
import { createContext, useEffect, useState } from 'react';
// import AllProducts from '../assets/all_products';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 300 + 1; i++) {
        cart[i] = 0;
    }
    return cart;

}
const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/allProducts')
            .then((res) => res.json())
            .then((data) => setAllProducts(data));
            if(localStorage.getItem('auth-token')){
                fetch('http://localhost:4000/getcart', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/form-data',
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json',
                    },
                    body: '',
                })
                    .then((res) => res.json())
                    .then((data) => setCartItems(data));
            }
    }, [])

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'itemId': itemId }),
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
        }
    }
    const RemoveFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'itemId': itemId }),
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allProducts.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }
    // console.log(cartItems);

    const contextValue = { getTotalCartItems, getTotalCartAmount, allProducts, cartItems, addToCart, RemoveFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;