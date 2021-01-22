import React, {useContext} from 'react'
import {ContextWorker} from '../Data/Context'
import ProductForCart from './ProductForCart.js'

function Cart() {
    const { cart } = useContext(ContextWorker)
    // console.log((cart))

    return (
        <div>
            {
                cart.map( (prod, index) => {
                    return (
                        <ProductForCart shoe={prod} key={index} />
                )
                } )
            }
        </div>
    )
}

export default Cart
