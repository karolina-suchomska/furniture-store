<template>
  <div class="main-header">
    <Logo />
    <Search />
    <div>
      <router-link
          to="/ShoppingCart"
          class="shopping-cart-icon"
      >
        <img
            src="pictures/shopping-basket.svg"
            alt="shopping-cart"
        >
        <p
            v-if="products.length > 0"
            class="number-of-products"
        >
          {{ products.length }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/molecules/Logo';
import Search from '@/components/molecules/Search';

export default {
  components: {
    Logo,
    Search
  },
  computed: {
    products () {
      return this.$store.state.database.shoppingCart;
    }
  }
};
</script>
