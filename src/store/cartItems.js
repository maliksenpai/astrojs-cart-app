import { action, atom } from "nanostores";

/* The line `export const selectedCartItemsStore = atom([]);` is creating a new atom using the `atom`
function from the "nanostores" library. An atom is a state container that holds a single value and
allows you to subscribe to changes in that value. */
export const selectedCartItemsStore = atom([]);

/**
 * The function `addElementCart` adds an element to the cart by updating the `selectedCartItemsStore`
 * array.
 * @param element - The `element` parameter represents the item that you want to add to the cart.
 */
export const addElementCart = (element) => {
    selectedCartItemsStore.set([...selectedCartItemsStore.get(), element]);
}

// Get elements of cart. This is used to determine which items are visible and which are not
export const getElementsOfCart = action(selectedCartItemsStore, 'get', (store) => {
    return store.get();
});

// Adds an element to the cart. This is used to ensure that items are added in the right order
export const addElementCartAction = action(selectedCartItemsStore, 'add', (store, newElement) => {
    store.set([...store.get(), newElement]);
    return store.get();
});

/**
 * The `removeElementCart` function removes an element from the `selectedCartItemsStore` array by
 * filtering out items with a matching `id`.
 * @param element - The `element` parameter represents the item that needs to be removed from the cart.
 */
export const removeElementCart = (element) => {
    const copyItems = [...selectedCartItemsStore.get()].filter((item) => item.id !== element.id);
    selectedCartItemsStore.set(copyItems);
}