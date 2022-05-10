import { Button, ButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import cartApi from '../../service/zomatoApi';
import './cart.css';
import { fetchTotal } from '../../actions/cardAction';

/**
 * This component creates the header component of the website
 * @returns a header component with searchbox, topbar and background image
 */

function Cart() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const [cart, setCart] = useState([]);
  const total = useSelector((state) => state.city.subTotal);
  const [rotate, setRotate] = useState('');
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState('subCart');
  const calculatePrice = () => {
    let price = 0;
    cart.map((carts) => {
      price = (carts.attributes.noOfItems * carts.attributes.itemPrice) + price;
      return dispatch(fetchTotal(price));
    });
  };
  const handleRotate = () => {
    if (style === 'subCart') setStyle('mainCart');
    else setStyle('subCart');
    if (rotate === '') setRotate('rotate(-180deg)');
    else setRotate('');
    setOpen(!open);
  };
  const updateCart = (noOfItems, id) => {
    const data = {
      data: {
        noOfItems,
      },
    };
    cartApi
      .updateCart(data, id)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deleteCart = (id) => {
    cartApi
      .deleteCart(id)
      .then((response) => {
        console.log(response);
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
  const handleIncrement = (cartItem) => {
    const numberOfItem = cartItem.attributes.noOfItems + 1;
    updateCart(numberOfItem, cartItem.id);
  };
  const handleDecrement = (cartItem) => {
    const numberOfItem = cartItem.attributes.noOfItems - 1;
    if (numberOfItem >= 1) updateCart(numberOfItem, cartItem.id);
    else deleteCart(cartItem.id);
  };
  const handlePrice = () => {
    if (total) dispatch(fetchTotal(0));
  };
  React.useEffect(() => {
    fetchCards();
    calculatePrice();
  }, [cart]);
  return (
    <div>
      {cart.length ? (
        <div className={style}>
          <div className="footerCart">
            <div className="cart">
              <div className="yourOrder">
                <span className="cartBox">
                  <ArrowDropUpIcon
                    onClick={handleRotate}
                    sx={{ transform: `${rotate}`, transition: 'all 0.25s linear' }}
                  />
                </span>
                <span id="orderTitle" className="yourOrderTitle">Your Orders</span>
              </div>
              <div>
                <span className="yourOrderrTitle">
                  Subtotal: Rs.
                  {total}
                </span>
                <Button
                  variant="contained"
                  onClick={() => setRedirect(true)}
                  style={{
                    width: '150px',
                    height: '44px',
                    background: 'rgb(232, 76, 95)',
                    color: 'white',
                    textTransform: 'none',
                    fontFamily: 'Quicksand, sans-serif',
                    fontSize: '18px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                  }}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
          {open ? (
            <div className="openCart">
              <div className="yourOrders">
                <h3 className="yourOrdersTitle">Your Orders</h3>
                <CloseIcon onClick={handleRotate} />
              </div>
              <div className="cartItems">
                {cart.map((item) => (
                  <div key={item.id}>
                    <hr className="cartDivider" />
                    <div className="cartItem">
                      <div className="orderItem">
                        <p className="orderItemTitle">{item.attributes.itemName}</p>
                      </div>
                      <div className="orderPrice">
                        <p className="priceItem">
                          Rs.
                          {item.attributes.noOfItems * item.attributes.itemPrice}
                        </p>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                          <Button
                            onClick={() => { handleIncrement(item); }}
                            style={{
                              width: '10px',
                              height: '30px',
                              background: 'rgb(232, 76, 95)',
                              color: 'white',
                              fontFamily: 'Quicksand, sans-serif',
                              fontSize: '18px',
                              borderRadius: '6px 0px 0px 6px',
                              cursor: 'pointer',
                            }}
                          >
                            +
                          </Button>
                          <Button
                            style={{
                              width: '10px',
                              height: '30px',
                              background: 'rgb(232, 76, 95)',
                              color: 'white',
                              fontFamily: 'Quicksand, sans-serif',
                              fontSize: '15px',
                              cursor: 'pointer',
                            }}
                          >
                            {item.attributes.noOfItems}
                          </Button>
                          <Button
                            onClick={() => { handleDecrement(item); }}
                            style={{
                              width: '10px',
                              height: '30px',
                              background: 'rgb(232, 76, 95)',
                              color: 'white',
                              fontFamily: 'Quicksand, sans-serif',
                              fontSize: '18px',
                              borderRadius: '0px 6px 6px 0px',
                              cursor: 'pointer',
                            }}
                          >
                            -
                          </Button>
                        </ButtonGroup>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : handlePrice() }
      {redirect ? <Redirect to="/delivery/order/verify" /> : null}
    </div>
  );
}

export default Cart;
