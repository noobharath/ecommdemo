import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Filters from '../products/Filters';
import Loading from '../utils/loading/Loading'

export default function Electronics() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [loading, setLoading] = useState(false)

    if(loading) return <div><Loading /></div>

    return (
        <div>
            <Filters/>
        <div className="products1">
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product} />
                })
            }
        </div>
        </div>
    )
}