<template>
  <div class="shopping-cart-icon">
    <router-link to="/ShoppingCart">
      <img
          src="pictures/shopping-basket.svg"
          alt="shopping-cart"
      >
      <p
          v-if="quantity > 0"
          class="number-of-products"
      >
        {{ quantity }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    quantity () {
      return this.$store.state.database.quantity;
    }
  }
};
</script>
