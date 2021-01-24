<template>
  <div class="shopping-cart-table">
    <PopUpDelete
        v-if="popup"
        :id-product="idProduct"
        @popup="popupValue"
        @deleteProduct="popupDeleteProduct"
    />
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
                @counter="counterValue($event, product.id)"
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
</template>

<script>
import PopUpDelete from '@/components/molecules/PopUpDelete';
import QuantityProductCounter from '@/components/atoms/QuantityProductCounter';

export default {
  components: {
    PopUpDelete,
    QuantityProductCounter
  },
  props: {
    products: {
      type: [Array, Object],
      default: null
    }
  },
  data () {
    return {
      value: true,
      popup: false,
      idProduct: 0,
      counter: 1
    };
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
      this.$store.dispatch('database/deleteProduct', this.idProduct);
      this.popup = value;
    },
    counterValue (value, id) {
      this.$store.dispatch('database/changingQuantity', [id, value]);
    }
  }
};
</script>
