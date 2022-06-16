import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'

export default function Shoes() {

    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
  
    return (
    <div>
        <h2>Shoes</h2>
        <div className="products1">
            {
                products.map(product => {
                    return product.category === "62a80d3916efc519a8671d73" ? 
                    <ProductItem key={product._id} product={product} /> : null
                })
            }
        </div>
    </div>
  )
}
