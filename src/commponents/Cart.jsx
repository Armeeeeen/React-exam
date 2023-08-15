import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../redux/actions/index'; 
import { NavLink } from 'react-router-dom';
import './css/cart.css'



function Cart(){
    let state = useSelector((state) => state.addItem);
    console.log(state);
    const dispatch = useDispatch();
       
        
    const handleClose = (item) => {
        dispatch(delItem(item));
    };

    const cartItems = (cartItem) => {
                if(cartItem.id !== state.forEach((e)=> console.log(e.id))){

                    return (
                        <div className='container' key={cartItem.id}>
                <button className='close-button' onClick={() => handleClose(cartItem)}>X</button>
                
                <div className='item'>
                <img src={cartItem.image} alt={cartItem.title}/>
                <p className='title'>{cartItem.title}</p>
                <p className='price'>${cartItem.price}</p>
                </div>
                
                </div>
                
                );
            }
            
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

    const uniqueItems = Array.from(new Set(state)); // Convert state to Set to remove duplicates, then convert back to Array
    
    return (
        <div className='cont'>
            <div className='cart-items'>
                {uniqueItems.length === 0 ? emptyCart() : uniqueItems.map(cartItems)}
            </div>
            {uniqueItems.length !== 0 && button()}
        </div>
    );

    // return (
    //     <div className='cont'>
    //         <div className='cart-items'>
    //         {state.length === 0 && emptyCart()}
    //         {state.length !== 0 && state.map(cartItems)}
    //         </div>
    //         {state.length !== 0 && button()}
    //     </div>
    // );
    
};

export default Cart;
