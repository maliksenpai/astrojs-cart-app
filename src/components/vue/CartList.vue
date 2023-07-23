<script>
import { selectedCartItemsStore } from '../../store/cartItems';
    export default {
        data() {
            return {
                data: null,
            };
        },
        methods: {
            // The `updateItems` method is responsible for updating the `data` property of the Vue
            // component with the new items passed as an argument. It sets the `data` property to the
            // value of `newItems`, which allows the component to display the updated items in the
            // template.
            updateItems(newItems) {
                this.data = newItems;
            }
        },
        mounted() {
           // The `selectedCartItemsStore.subscribe((newItems) => { this.updateItems(newItems); })`
           // code is subscribing to changes in the `selectedCartItemsStore` and updating the `data`
           // property of the Vue component with the new items.
            selectedCartItemsStore.subscribe((newItems) => {
                this.updateItems(newItems);
            })
        }
    }
</script>

<template>
<div class="cart-list-container">
    <h3 class="cart-list-title"> Selected Items </h3>
    <div v-for="item in data" class="cart-list-item-container">
        <div class="cart-list-item">
            <span>{{ item.name }}</span>
            <span>{{ item.price }}</span>
        </div>
    </div>
</div>
</template>

<style scoped>
     .cart-list-container {
        background-color: whitesmoke;
        height: fit-content;
        width: 100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-block: 2rem;
    }

    .cart-list-title:hover {
        text-decoration: underline;
    }
    
    .cart-list-item-container {
        width: calc(100% - 4rem);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cart-list-item {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-block: 1rem;
        margin-inline: 2rem;
        padding: 1rem 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
</style>