<template>
  <div class="product">
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
          {{ product.price + ' zł' }}
        </p>
      </div>
      <button
          class="button-to-cart"
      >
        Dodaj do koszyka
      </button>
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
  }
};
</script>
