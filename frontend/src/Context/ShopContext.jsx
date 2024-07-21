
import { createContext } from 'react';
import AllProducts from '../assets/all_products';


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = { AllProducts };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
} 

export default ShopContextProvider;