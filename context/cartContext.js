import { useState, useEffect, createContext } from 'react'

export const cartContext = createContext(null)

function CartContextProvider({ children }) {

    const [cart,setCart] = useState([])

    useEffect(() => {
        async function  getCart() {
            const cartValue = JSON.parse(localStorage.getItem("cartHoney")) || []
            setCart(cartValue)
        }
        getCart()
    },[setCart])



    const addToCart = async (productData) => {

        const getAllItem = await JSON.parse(localStorage.getItem("cartHoney")) || [];
        const findCartWithInedx = getAllItem.findIndex(el => el.productId === productData.productId)

        if (findCartWithInedx != -1) {
            getAllItem[findCartWithInedx].amount += productData.amount;
            localStorage.setItem("cartHoney", JSON.stringify(getAllItem))
            setCart(getAllItem);
        } else {
            productData.id = Date.now()
            getAllItem.push(productData);
            localStorage.setItem("cartHoney", JSON.stringify(getAllItem))
            setCart(getAllItem);
        }
    }

    const deleteCart = async (itemId) => {
        const getAllItem =  await JSON.parse(localStorage.getItem("cartHoney")) || [];
        const filterCart = getAllItem.filter(el => el.id !== itemId)
        localStorage.setItem("cartHoney", JSON.stringify(filterCart))
        setCart(filterCart);

    }

    const clearCart = () => {
        localStorage.removeItem("cartHoney")
        setCart([])
    }

    return (
        <cartContext.Provider value={{ cart ,clearCart,addToCart,deleteCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider