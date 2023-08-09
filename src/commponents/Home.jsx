import React from 'react'
import Carousel from './Carousel'
import ProductsByCategory from './ProductByCategory'

export default function Home() {
  return (
    <div>
        <Carousel/>
           <ProductsByCategory product={"electronics"}/>
           <ProductsByCategory product={"jewelery"}/> 
    </div>
  )
}
