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
      <table>
        <thead>
          <tr>
            <th>
              Produkt
            </th>
            <th>
              Cena
            </th>
            <th>
              Ilość
            </th>
            <th>
              Razem
            </th>
            <th>
              Usuń
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
              v-for="product in products"
              :key="product.id"
          >
            <td>
              {{ product.name }}
            </td>
            <td>
              {{ new Intl.NumberFormat().format(product.price) }}
            </td>
            <td>
              {{ product.quantity }}
            </td>
            <td>
              {{ sum (product.price, product.quantity) }}
            </td>
            <td>
              x
            </td>
          </tr>
        </tbody>
      </table>
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
  },
  methods: {
    sum (price, quantity) {
      return new Intl.NumberFormat().format(price * quantity);
    }
  }
};
</script>
