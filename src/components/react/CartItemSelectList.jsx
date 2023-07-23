/* The code is importing various dependencies and components for the `CartItemSelectList` component. */
import { useStore } from "@nanostores/react";
import { useState, useEffect } from 'react';
import { selectedCartItemsStore, addElementCart, removeElementCart, addElementCartAction } from "../../store/cartItems";
import { faker } from '@faker-js/faker';
import CartItemSelectListContainer from "./CartItemSelectListContainer";

const CartItemSelectList = () => {
    /* The line `const selectedCartItems = useStore(selectedCartItemsStore);` is using the `useStore`
    hook from the `@nanostores/react` library to create a local state variable `selectedCartItems`
    that is connected to the `selectedCartItemsStore` store. This allows the component to access and
    update the data stored in the `selectedCartItemsStore`. */
    const selectedCartItems = useStore(selectedCartItemsStore);
    const [shopItems, setShopItems] = useState();

    /* The `useEffect` hook is used to perform side effects in a React component. In this case, it is
    used to set the initial value of the `shopItems` state variable. */
    useEffect(() => {
      setShopItems(Array.from({ length: 10 }, () => ({ id: faker.string.uuid(), name: faker.commerce.productName(), description: faker.commerce.productDescription(), price: faker.commerce.price() })));
    }, []);
    
   
   
    /**
     * The function `handleSelectItem` checks if an item is already in the cart and either removes it
     * or adds it based on the result.
     */
    const handleSelectItem = (selectedItem) => {
        const item = selectedCartItems.find((arrayItem) => arrayItem.id === selectedItem.id);
        if (item) {
            removeElementCart(selectedItem);
        } else {
            addElementCartAction(selectedItem);
        }
    }
    
    return (
        <CartItemSelectListContainer>
            {shopItems && shopItems.map((item) => {
                return <div key={item.name} className="shadow my-4 p-4">
                    <div className="d-flex justify-content-between">
                            <div>
                                <input 
                                    type="checkbox"
                                    className="form-check-input me-2"
                                    checked={selectedCartItems.some((arrayItem) => arrayItem.id === item.id)}
                                    onChange={() => handleSelectItem(item)}
                                />
                                <span>{item.name}</span>
                            </div>
                            <span>{item.price}</span>
                        </div>
                    <div className="text-secondary">{item.description} </div>
                 </div>
            })}
        </CartItemSelectListContainer>
    )
}

export default CartItemSelectList;