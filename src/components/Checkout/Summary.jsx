import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './checkoutBody.css';
import cartApi from '../../service/zomatoApi';

/**
 * This component creates the order summary component of the order delivery page
 * @returns a component with orderes items, total cost and hotel name
 */

function Summary(props) {
  const { address } = props;
  const [cart, setCart] = useState([]);
  const btn = address.address && address.city && address.pinCode && address.mobile && address.state;
  const [redirect, setRedirect] = useState(false);
  const total = useSelector((state) => state.city.subTotal);
  const name = useSelector((state) => state.city.hotelName);
  const city = useSelector((state) => state.city.location);
  const handleDeleteCart = () => cart.map((item) => cartApi
    .deleteCart(item.id)
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    }));
  const handleClick = () => {
    setRedirect(true);
    const data = {
      data: {
        hotelName: name,
        totalPrice: total,
        location: city,
        orderItems: cart,
        deliveryAddress: address,
      },
    };
    cartApi
      .postToOrder(data)
      .then((response) => {
        console.log(response);
        handleDeleteCart();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const fetchCards = () => {
    cartApi
      .getCart()
      .then((response) => {
        setCart(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  React.useEffect(() => {
    fetchCards();
  }, []);
  return (
    <div className="summary">
      <h5 className="summaryTitle">Summary</h5>
      <div className="summaryBody">
        <div className="orderFrom">
          <p className="orderFromTitle">ORDER FROM</p>
          <p className="orderHotelTitle">{name}</p>
          <p className="orderedLocation">{city}</p>
        </div>
        <div className="orderedItem">
          {cart.map((item) => (
            <div className="orderItem">
              <div>
                <p className="orderItemName">{item.attributes.itemName}</p>
                <p className="orderItemName">
                  Rs.
                  {item.attributes.itemPrice}
                </p>
              </div>
              <p className="orderItemPrice">
                Rs.
                {item.attributes.itemPrice * item.attributes.noOfItems}
              </p>
            </div>
          ))}
          <div className="instructions">
            <p className="instruction">Add special cooking instructions</p>
          </div>
        </div>
        <div className="orderFrom">
          <p className="supportTitle">SUPPORT YOUR RIDER</p>
          <p className="supportText">
            Support your delivery partner and make their day
            ! 100% of your tip will be transferred to them.
          </p>
          <div className="supportPrice">
            <div className="supportPrices">
              <p className="supportPricesinRs">+ 20</p>
            </div>
            <div className="supportPrices">
              <p className="supportPricesinRs">+ 30</p>
            </div>
            <div className="supportPrices">
              <p className="supportPricesinRs">+ 40</p>
            </div>
          </div>
        </div>
        <div className="totalPrice">
          <div className="subTotal">
            <p className="subTotalTitle">Subtotal</p>
            <p className="subtotalPrice">
              Rs.
              {total}
            </p>
          </div>
          <div className="tax">
            <p className="taxTitle">Taxes & charges</p>
            <p className="taxPrice">Rs. 15</p>
          </div>
        </div>
        <hr className="summaryDivider" />
        <div className="grandTotal">
          <p className="grandTotalTitle">Grand Total</p>
          <p className="grandTotalPrice">
            Rs.
            {total + 15}
          </p>
        </div>
      </div>
      <Button
        variant="contained"
        onClick={handleClick}
        disabled={!btn}
        style={{
          width: '100%',
          height: '51px',
          background: 'rgb(232, 76, 66)',
          color: 'white',
          textTransform: 'none',
          fontFamily: 'Quicksand, sans-serif',
          fontSize: '18px',
          borderRadius: '0.6rem',
          cursor: 'pointer',
        }}
      >
        Place Order
      </Button>
      {redirect ? <Redirect to="/delivery/order/successfull" /> : null}
    </div>
  );
}

Summary.propTypes = {
  address: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      pinCode: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Summary;
