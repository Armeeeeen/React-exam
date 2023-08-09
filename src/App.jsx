import React, { useEffect, useState } from 'react'
import Header from './commponents/Header'
import Products from './commponents/Products'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Home from './commponents/Home'
import Clothes from './commponents/Clothes'
import Blog from './commponents/Blog'
import Product from './commponents/Product'
import Cart from './commponents/Cart'
import Buy from './commponents/Buy'
import Alert from './commponents/Alert'
        
        function App(){
        
      
          return (  
           <>
           <Header/>
          <switch>
            <Routes>
              <Route exact path="/" Component={Home}/>
              <Route exact path="/products" Component={Products}/>
              <Route exact path="/clothes" Component={Clothes}/>
              <Route exact path="/blog" Component={Blog}/>
              <Route exact path="/products/:id" Component={Product}/>
              <Route exact path="/cart" Component={Cart}/>
              <Route exact path='/buy'  Component={Buy} />
              <Route exact path='/alert' Component={Alert} />
          </Routes>
          </switch>
          
            </>
            )
        }
        
        export default App
                            