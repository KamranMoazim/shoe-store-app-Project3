// import Shoes from '../shoe.json'
import React, {useContext} from 'react'
import {ContextWorker} from '../Data/Context'
import EachProduct from './EachProduct'


import Grid from '@material-ui/core/Grid';


export default function AllProducts() {
    const {products, AddProduct, cart} = useContext(ContextWorker)
    
    return (
        <Grid container spacing={5}>
            {
                products.map( (_, index) => {
                    const data = products[index]
                    return (
                        <EachProduct data={{data , AddProduct, cart}} key={index} />
                )
                } )
            }
        </Grid>
    )
}





