<template>
  <div class="product">
    <div
        v-if="value"
        class="added-to-cart"
    >
      Dodano do koszyka!
    </div>
    <div class="product-img">
      <img
          :src="'pictures/' + product.type + '/' + product.img"
          alt="product"
      >
    </div>
    <div class="product-container">
      <div class="product-text">
        <h4 class="product-name">
          {{ product.name }}
        </h4>
        <p class="product-price">
          {{ new Intl.NumberFormat().format(product.price) + ' zł' }}
        </p>
      </div>
      <button
          class="button-to-cart"
          @click.prevent="addToShoppingCart()"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      value: false
    };
  },
  methods: {
    addToShoppingCart () {
      this.$store.commit('database/addToShoppingCart', [this.product, 1]);
      this.value = true;

      setTimeout(() => {
        this.value = false;
      }, 1000);
    }
  }
};
</script>
