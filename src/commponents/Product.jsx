import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './css/single.css'
import { useDispatch } from 'react-redux';
import {addItem} from '../redux/actions/index'

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const productData = await response.json();
      setProduct(productData);
    };

    getProduct();
  }, [id]);

  const dispatch = useDispatch()

  const addProduct = (product) =>{
    dispatch(addItem(product))
  }

  return (
  <div className='single'>
    <div>
      <NavLink to={'/products'}><img src="https://www.freeiconspng.com/thumbs/return-button-png/back-undo-return-button-png-5.png" alt=""  className='back-button'/></NavLink>
    </div>
      <h1 className='title'>{product.title}</h1>
    <div id='container'>
      <div className="left">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="right">
        <div className='information'>
      <p id='info'><h3>Description:</h3> {product.description}</p>
        <p id='price'>${product.price}</p>
        </div>
        
      </div>
        <NavLink to={`/products/${product.id}` }><button id='single-button' className="buy-button" onClick={()=> addProduct(product)}>Add to cart</button></NavLink>
    </div>
  </div>
  );
}

export default ProductDetails;
