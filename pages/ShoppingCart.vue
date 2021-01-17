<template>
  <div class="shopping-cart">
    <h3>
      Koszyk
    </h3>
    <div
        v-if="products.length === 0"
        class="shopping-cart-empty"
    >
      <p>
        Twój koszyk jest pusty.
      </p>
      <button class="button-back">
        Wróć na stronę główną
      </button>
    </div>
    <div
        v-else
        class="shoping-cart-full"
    >
      {{ products }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: true
    };
  },
  computed: {
    products () {
      return this.$store.state.database.shoppingCart;
    }
  }
};
</script>
