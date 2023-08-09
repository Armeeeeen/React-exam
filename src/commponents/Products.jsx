import React, { useEffect, useState } from 'react'
import './css/products.css'
import { NavLink } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {addItem} from '../redux/actions/index'


function Products() {
         const [loading, setLoading] = useState(false)
         const [data, setData] = useState(null)
         const [filter,setFilter] = useState(data)
          let componentMounted = true

          const dispatch = useDispatch()

          const addProduct = (product) =>{
            dispatch(addItem(product))
          }
        

          
      

      useEffect(()=>{
        const getProduct = async ()=>{
          const response = await fetch('https://fakestoreapi.com/products')
          if(componentMounted){
            setData(await response.clone().json())
            setFilter(await response.json())
            console.log(filter);
          }
          return ()=> {
            componentMounted = false
          }
        }
        getProduct()
      })

  return (
    <div>
         <section className='products'>
              {!!data && data.length > 0 ? data.map((product) => {
                  return(
                    <article className='product' key={product.id}>
                      <img src={product.image} alt="" />
                      <h2 id='title'>S{product.title}</h2>
                      <div>
                      <p className='price'>${product.price}</p>
                      </div>
                      <div className='buttons'>
                      <NavLink to={`/products/${product. id}` }><button className="button">View Product</button></NavLink>
                     <button className="button" onClick={()=> addProduct(product)}>Add to cart</button>
                      </div>
                    </article>
                  )   
                }):(<p>API did not provided any product, try again.</p>)
              }
            </section>
    </div>
  )
}

export default Products