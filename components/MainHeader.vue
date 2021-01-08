<template>
  <div class="main-header">
    <Logo />
    <Search />
    <div class="shopping-cart-icon">
      <router-link to="/ShoppingCart">
        <img
            src="pictures/shopping-basket.svg"
            alt="shopping-cart"
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/molecules/Logo';
import Search from '@/components/Search';

export default {
  components: {
    Logo,
    Search
  }
};
</script>
