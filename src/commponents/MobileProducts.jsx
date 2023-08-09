import React, { useEffect, useState } from 'react'
import './css/mobile.css'

function MobileProducts({product}) {
    const [data, setData] = useState(null)
      
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(e => e.json())
        .then(products => setData(products))
    }, [])
  return (
    <div className={product}>
        {data?.map((e, i)=>{
            if (e.category === product && e.id !== 12 && e.id !== 9) {
                return(  <div className='mobile-product' key={e.id}>
                    <img src={e.image} alt="" />
                    <p className='price'>{'$'+e.price}</p>
                </div>
              ) 
            }
        })}
    </div>
  )
}

export default MobileProducts