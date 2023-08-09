import React, { useEffect, useState } from 'react'
import './css/mobile.css'
import { NavLink } from 'react-router-dom'

function ProductsByCategory({product}) {
         const [data, setData] = useState(null)
         const [filter,setFilter] = useState(data)
          let componentMounted = true
      

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
    <div className={product}>
        {data?.map((e, i)=>{
            if (e.category === product && e.id !== 12 && e.id !== 9) {
                return(  
                <div className='Cproduct' key={e.id}>
                    <img src={e.image} alt="" />
                    <div className="down">
                    <p className='price'>{'$'+e.price}</p>
                    <NavLink to={`/products/${e.id}` }><button className="button">View Product</button></NavLink>
                    </div>
                </div>
              ) 
            }
        })}
        
    </div>
    
  )
}

export default ProductsByCategory