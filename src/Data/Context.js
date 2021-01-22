import React, { useReducer, createContext } from 'react'
import Shoes from '../shoe.json'
import cartReducer from './Reducer'



const initialState = {
    AddProduct : ({id})=>{},
    RemoveProduct  : ({id})=>{},
    products : Shoes["products"],
    cart: []
}


export const ContextWorker = createContext(initialState);

function Context({children}) {

    const [state, dispatch] = useReducer(cartReducer, initialState)


    const AddProduct = (id) => {
        dispatch({
            type: 'AddProduct',
            payload: {
                id: id
            },
    })}
    
    const RemoveProduct = (id) => {
        dispatch({
            type: 'RemoveProduct',
            payload: {
                id
            },
    })
}


    return (
        <ContextWorker.Provider value={{
            products: state.products,
            AddProduct,
            RemoveProduct,
            cart: state.cart
        }}>
            {children}
        </ContextWorker.Provider>
    )
}
export default Context
