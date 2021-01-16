<template>
  <div class="popular-products">
    <h3>
      Popularne produkty
    </h3>
    <div class="popular-container">
      <router-link
          v-for="product in products"
          :key="product.id"
          :to="'/' + product.species + '/' + product.id"
      >
        <Product :product="product" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Product from '@/components/molecules/Product';

export default {
  components: {
    Product
  },
  computed: {
    products () {
      return this.$store.state.database.popular;
    }
  }
};
</script>
