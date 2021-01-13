<template>
  <div class="product">
    <img
        :src="'pictures/chair/' + product.img"
        alt="product"
    >
    <div class="product-text">
      <h4 class="product-name">
        {{ product.name }}
      </h4>
      <p class="product-price">
        {{ product.price + ' zł' }}
      </p>
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
