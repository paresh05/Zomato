import React, { useEffect, useState } from 'react';
import '../Checkout/checkoutBody.css';
import './placeOrder.css';
import cartApi from '../../service/zomatoApi';

/**
 * This component creates the header component of the order delivery page
 * @returns a header component with searchbox, logo and account
 */

function PlaceOrder() {
  const [order, setOrder] = useState([]);
  const fetchOrder = () => {
    cartApi
      .getOrder()
      .then((response) => {
        setOrder(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <div>
      {order.length ? (
        <div className="placeOrderBody">
          <h3 className="placeOrderTitle">{order[order.length - 1].attributes.hotelName}</h3>
          <div className="placeOrder">
            <div className="deliveryImage">
              <img
                className="zomatoOrderImage"
                src="https://imgk.timesnownews.com/story/iPhone_Xs_-_2020-04-15T190504.722.png?tr=w-1200,h-900"
                alt="logo"
              />
            </div>
            <div className="summary">
              <h5 className="summaryTitle">Summary</h5>
              <div className="summaryBody">
                <div className="orderFrom">
                  <p className="orderFromTitle">ORDER SUMMARY</p>
                  <p className="orderHotelTitle">{order[order.length - 1].attributes.hotelName}</p>
                  <p className="orderedLocation">{order[order.length - 1].attributes.location}</p>
                </div>
                <div className="orderedItem">
                  {order[order.length - 1].attributes.orderItems.map((item) => (
                    <div className="orderItem">
                      <div>
                        <p className="orderItemName">{item.attributes.itemName}</p>
                      </div>
                      <p className="orderItemPrice">
                        {`${item.attributes.noOfItems} x`}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="totalPrice">
                  <div className="subTotal">
                    <p className="grandTotalTitle">Grandtotal</p>
                    <p className="grandTotalPrice">
                      Rs.
                      {order[order.length - 1].attributes.totalPrice + 15}
                    </p>
                  </div>
                </div>
                <hr className="summaryDivider" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PlaceOrder;
