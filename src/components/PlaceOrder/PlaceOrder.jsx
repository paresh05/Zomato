import React, { useEffect, useState } from 'react';
import '../Checkout/checkoutBody.css';
import './placeOrder.css';
import cartApi from '../../service/zomatoApi';

/**
 * This component creates the oder placed component of the website
 * @returns a component with order summary
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
            <div className="summarry">
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
                    <p className="grandTotalTitle">Grand Total</p>
                    <p className="grandTotalPrice">
                      Rs.
                      {order[order.length - 1].attributes.totalPrice + 15}
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '20px' }} className="summaryBody">
                <div className="deliveryAdd">
                  <p className="orderFromTitle">DELIVERY ADDRESS</p>
                  <p className="orderHotelTitle">
                    {order[order.length - 1].attributes.deliveryAddress.address}
                    ,
                    {order[order.length - 1].attributes.deliveryAddress.city}
                    ,
                  </p>
                  <p className="orderHotelTitle">
                    {order[order.length - 1].attributes.deliveryAddress.state}
                    -
                    {order[order.length - 1].attributes.deliveryAddress.pinCode}
                  </p>
                  <p className="orderedLocation">
                    Mobile Number -
                    {order[order.length - 1].attributes.deliveryAddress.mobile}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PlaceOrder;
