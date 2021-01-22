
const cartReducer = (state, action) => {
    switch (action.type) {
    case "AddProduct":

        const requiredProduct = state.products[action.payload.id-1]
        state.cart.push(requiredProduct)

        return {
            ...state,
            cart: [...state.cart]
        };
    case "RemoveProduct":

        return {
            ...state,
            cart: state.cart.filter( (cartItem) => cartItem._productId !== action.payload.id )
        };

    default:
        return state;
}}

export default cartReducer