import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import cartApi from '../../service/zomatoApi';
import './menu.css';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';

/**
 * This component creates the menu component of the website
 * @returns a component with dish details and price
 */

function Menu(props) {
  const { menuItems } = props;
  const total = useSelector((state) => state.city.subTotal);
  const token = localStorage.getItem('token');
  const [cart, setCart] = useState([]);
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const handleLoginOpen = () => {
    setLogin(true);
  };
  const handleLoginClose = () => {
    setLogin(false);
  };
  const handlesignUpOpen = () => {
    setSignUp(true);
  };
  const handlesignUpClose = () => {
    setSignUp(false);
  };
  const handleClick = (dish) => {
    if (token) {
      const data = {
        data: {
          itemName: dish.item,
          itemPrice: dish.price,
          noOfItems: 1,
        },
      };
      cartApi
        .postToCart(data)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    } else setLogin(true);
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
  }, [total]);
  return (
    <div className="menuDetails">
      <div className="categories">
        <p className="categoryTitle">Todays Exclusive</p>
        <p className="categoryTitle">Recommended</p>
        <p className="categoryTitle">Cakes</p>
        <p className="categoryTitle">Beverages</p>
        <p className="categoryTitle">Meals</p>
        <p className="categoryTitle">Starters</p>
        <p className="categoryTitle">Main Course</p>
        <p className="categoryTitle">Rice</p>
        <p className="categoryTitle">Desserts</p>
      </div>
      <div>
        <h2 className="orderOnline">Order Online</h2>
        {menuItems.map((dish) => (
          <div className="dishes">
            <img
              className="dishImage"
              src={dish.image}
              alt="logo"
            />
            <div className="dishDetails">
              <div className="nameNprice">
                <h3>{dish.item}</h3>
                <span>
                  Rs.
                  {dish.price}
                </span>
              </div>
              <div>
                {cart.some((obj) => obj.attributes.itemName === dish.item) ? null
                  : (
                    <Button
                      variant="contained"
                      onClick={() => handleClick(dish)}
                      style={{
                        height: '30px',
                        background: 'rgb(255, 246, 247)',
                        color: 'rgb(239, 79, 95)',
                        textTransform: 'none',
                        fontFamily: 'Quicksand, sans-serif',
                        fontSize: '15px',
                        borderRadius: '0.5rem',
                        border: '0.5px solid rgb(239, 79, 95)',
                        cursor: 'pointer',
                        margin: '15px 24px 15px 24px',
                      }}
                    >
                      Add
                    </Button>
                  )}
              </div>
            </div>
          </div>
        ))}
        <Login
          login={login}
          onOpen={handlesignUpOpen}
          onClose={handleLoginClose}
        />
        <SignUp
          signUp={signUp}
          onOpen={handleLoginOpen}
          onClose={handlesignUpClose}
        />
      </div>
    </div>
  );
}

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })).isRequired,
};

export default Menu;
