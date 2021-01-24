<template>
  <div class="shopping-cart">
    <PopUpDelete
        v-if="popup"
        :id-product="idProduct"
        @popup="popupValue"
        @deleteProduct="popupDeleteProduct"
    />
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
              <router-link
                  class="product-name"
                  :to="'/' + product.species + '/' + product.id"
              >
                <div class="product-img">
                  <img
                      :src="'pictures/' + product.type + '/' + product.img"
                      alt="product images"
                  >
                </div>
                <span>
                  {{ product.name }}
                </span>
              </router-link>
            </td>
            <td>
              {{ new Intl.NumberFormat().format(product.price) + ' zł' }}
            </td>
            <td>
              <QuantityProductCounter
                  :counter-value="product.quantity"
                  @counter="counterValue"
              />
            </td>
            <td>
              {{ sum (product.price, product.quantity) + ' zł' }}
            </td>
            <td>
              <button
                  class="button-delete"
                  @click="deleteProduct (product.id)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import PopUpDelete from '@/components/molecules/PopUpDelete';
import QuantityProductCounter from '@/components/atoms/QuantityProductCounter';

export default {
  components: {
    PopUpDelete,
    QuantityProductCounter
  },
  data () {
    return {
      value: true,
      popup: false,
      idProduct: 0,
      counter: 1
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
    },
    deleteProduct (id) {
      this.popup = true;
      this.idProduct = id;
    },
    popupValue (value) {
      this.popup = value;
    },
    popupDeleteProduct (value) {
      this.$store.commit('database/deleteProduct', this.idProduct);
      this.popup = value;
    },
    counterValue (value) {
      // this.counter = value;
    }
  }
};
</script>
