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
      <router-link
          to="/"
          class="button-back"
      >
        Wróć na stronę główną
      </router-link>
    </div>
    <div
        v-else
        class="shoping-cart-full"
    >
      <ShoppingCartProducts
          :products="products"
      />
      <div class="shopping-cart-container">
        <Shipment />
        <div>
          Podsumowanie
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCartProducts from '@/components/ShoppingCartProducts';
import Shipment from '@/components/Shipment';

export default {
  components: {
    ShoppingCartProducts,
    Shipment
  },
  computed: {
    products () {
      return this.$store.state.database.shoppingCart;
    }
  }
};
</script>
