import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../redux/actions/index'; 
import { NavLink } from 'react-router-dom';
import './css/cart.css'



function Cart(){
    const state = useSelector((state) => state.addItem);
    console.log(state);
    const dispatch = useDispatch();

       
        
    const handleClose = (item) => {
        dispatch(delItem(item));
    };

    const cartItems = (cartItem) => {
        return (
            <div className='container' key={cartItem.id}>
                <button onClick={() => handleClose(cartItem)}></button>
              
                    <div className='item'>
                        <img src={cartItem.image} alt={cartItem.title}/>
                        <p className='title'>{cartItem.title}</p>
                        <p className='price'>${cartItem.price}</p>
                    </div>

                </div>

        );
    };

    const emptyCart = () => {
        return (
            <div className='container'>
                <h3>Your Cart is Empty</h3>
            </div>
        );
    };

    const button = () => {
        return (
          <NavLink to="/buy">  <div className="buy-button">
                Buy
            </div></NavLink>
        );
    };

    return (
        <div className='cont'>
            <div className='cart-items'>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            </div>
            {state.length !== 0 && button()}
        </div>
    );
};

export default Cart;
