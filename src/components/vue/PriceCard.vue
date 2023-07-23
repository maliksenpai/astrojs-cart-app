<script>
import { selectedCartItemsStore } from "../../store/cartItems";
import { Toast } from 'bootstrap';
export default {
  data() {
    return {
      cost: 0,
    };
  },
  computed: {
    // The `toastElement` computed property is returning the DOM element with the id
    // "price-alert-toast". This element is used to display a toast message when the user clicks the
    // purchase button without selecting any items. The `document.getElementById('price-alert-toast')`
    // method is used to retrieve the DOM element with the specified id from the document.
    toastElement() {
        return document.getElementById('price-alert-toast');
    }
  },
  methods: {
    // The `updatePrice` method is used to calculate the total cost of the selected items in the cart.
    // It takes an array of `newItems` as a parameter, which represents the selected items in the cart.
    updatePrice(newItems) {
      const newValue = newItems.reduce((accumulator, currentValue) => {
        return accumulator + Number(currentValue.price);
      }, 0);
      this.cost = newValue;
    },
    // The `clickPurchaseButton` method is a click event handler for the "Purchase" button. When the
    // button is clicked, this method is called.
    clickPurchaseButton(event) {
        const toast = new Toast(this.toastElement);
        if (this.cost === 0) {
            toast.show();
        } else {
            window.location.href = "/purchase";
        }
    }
  },
  mounted() {
    // The `selectedCartItemsStore.subscribe((newItems) => { this.updatePrice(newItems); });` code is
    // subscribing to changes in the `selectedCartItemsStore` store.
    selectedCartItemsStore.subscribe((newItems) => {
      this.updatePrice(newItems);
    });
  },
};
</script>

<template>
  <div class="price-container">
    <h3 class="price-title">Total Cost</h3>
    <h6 class="price-inner-container">
      <div>{{ cost }}$</div>
    </h6>
    <button class="purchase-button" @click="clickPurchaseButton">Purchase</button>
  </div>
  <div class="toast position-fixed top-0 end-0 p-3 text-white bg-primary border-0" role="danger" aria-live="assertive" aria-atomic="true" data-bs-delay="2000" id="price-alert-toast">
  <div class="d-flex">
    <div class="toast-body">
      You need select one or more items.
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
</template>

<style scoped>
.price-title {
  text-decoration: underline;
  display: block;
}
.price-container {
  display: block;
  background-color: whitesmoke;
  text-align: center;
  height: fit-content;
  padding-block: 2rem;
}

.purchase-button {
  padding: 2rem 1rem;
  margin-top: 5rem;
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.purchase-button:hover,
.purchase-button:focus {
  background-color: #f082ac;
}
</style>
