import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './css/buy.css'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'




const Buy = () => {

    const state = useSelector((state) => state.addItem)

    const showToast = () => {
        toast.success('Payment Completed!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000, 
        });
      };

    let total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li>
                <div>
                    <h6>{item.title}</h6>
                </div>
                <span>${item.price}</span>
            </li>
        );
    }
    return (
        <>
            <div className='general'>
                <div>
                    <div className='cart-info'>
                        <h4>
                            <span>Your cart </span>
                            <span>{state.length}</span>
                        </h4>
                        <ul>
                            {state.map(itemList)}

                            <li>
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <h4>Billing address</h4>
                        <form>
                            <div className='billing'>
                                    <input placeholder="First Name" type="text" />

                                    <input placeholder="Last Name" type="text"/>

                                    <input type="text"placeholder="Username"/>

                                    <input  type="email" placeholder='Email'/>

                                    <input placeholder="Address" type="text"/>

                                    <select>
                                        <option disabled>Country</option>
                                        <option>United States</option>
                                        <option>UK</option>
                                        <option>Russia</option>
                                        <option>Armenia</option>
                                        <option>Iran</option>
                                        <option>Austria</option>
                                        <option>Brazil</option>
                                        <option>France</option>
                                        <option>Pakistan</option>
                                        <option>Israel</option>
                                        <option>Canada</option>
                                        <option>Georgia</option>
                                    </select>
                                </div>

                            <hr />
                            <br/>
                            <br/>
                            <br/>

                            <h4>Payment</h4>

                            <div className='payment'>
                                <div className='radios'>
                                    <div>
                                    <input name='pay' type="radio"/>
                                    <label>Credit card</label>
                                    </div>
                                    <div>   
                                    <input name='pay' type="radio"/>
                                    <label>Debit card</label>
                                    </div>
                                    <div>
                                    <input name='pay'  type="radio" />
                                    <label>PayPal</label>
                                    </div>
                            </div>

                            <div className='payment-info'>
                                    <input placeholder='Name on card' type="text" />
                                    <input placeholder='Credit card number' type="text"  />
                                    <input placeholder='Expiration' type="text"  />
                                    <input placeholder='CVV' type="text" />
                            </div>
                            </div>

                            <hr />


    
       
    


                       
                           
                            </form> 
                           
             <button className='buy-button' onClick={showToast} >Buy</button>
             <ToastContainer/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Buy