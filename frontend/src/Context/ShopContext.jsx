
import { createContext, useState } from 'react';
import AllProducts from '../assets/all_products';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < AllProducts.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;

}
const ShopContextProvider = (props) => {

    const [ cartItems, setCartItems ] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const RemoveFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }
    // console.log(cartItems);

    const contextValue = { AllProducts ,cartItems,addToCart,RemoveFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;