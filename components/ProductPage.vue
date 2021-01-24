<template>
  <div class="product-page">
    <div
        v-if="value"
        class="added-to-cart"
    >
      Dodano do koszyka!
    </div>
    <div class="container">
      <PopUpInfo
          v-if="popup"
          @popup="popupValue"
      />
      <router-link :to="'/' + product.type">
        <button
            class="button-back"
            type="button"
        >
          Wróć do listy
        </button>
      </router-link>
      <div class="row">
        <div class="col">
          <img
              :src="'pictures/' + product.type + '/' + product.img"
              alt="object"
          >
          <div class="box">
            <div class="box-container">
              <div class="box-row-buttons">
                <button
                    type="button"
                    :class="variable ? 'active' : ''"
                    class="description-button"
                    @click="variable = true"
                >
                  Opis
                </button>
                <button
                    type="button"
                    :class="variable ? '' : 'active'"
                    class="technical-data-button"
                    @click="variable = false"
                >
                  Dane techniczne
                </button>
              </div>
              <div class="box-row">
                <div
                    v-if="variable"
                    class="description"
                >
                  Opis jdksaljdlsjlsajlkdsajds
                </div>
                <div
                    v-else-if="!variable"
                    class="technical-data"
                >
                  Dane techniczne jsakdhkjsahdsajhk
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <h2>
            {{ product.name }}
          </h2>
          <h3 class="price">
            {{ new Intl.NumberFormat().format(product.price) + " zł" }}
          </h3>
          <p>
            {{ "Czas wysyłki: " + product.shippingTime + " tygodni" }}
          </p>
          <div class="shipping-information">
            <p>
              {{ "Koszt wysyłki od " + product.shippingCost + " zł" }}
            </p>
            <button
                class="info"
                @click="popup = true"
            />
          </div>
          <div class="product-actions">
            <QuantityProductCounter
                :counter-value="counter"
                @counter="counterValue"
            />
            <button
                type="button"
                class="button-buy"
                @click="addToShoppingCart()"
            >
              <img
                  src="pictures/shopping-cart.svg"
                  alt="shopping"
              >
              <p>
                Dodaj do koszyka
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PopUpInfo from '@/components/molecules/PopUpInfo';
import QuantityProductCounter from '@/components/atoms/QuantityProductCounter';

export default {
  components: {
    PopUpInfo,
    QuantityProductCounter
  },
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      variable: true,
      counter: 1,
      popup: false,
      value: false,
      newProduct: {}
    };
  },
  methods: {
    popupValue (value) {
      this.popup = value;
    },
    addToShoppingCart () {
      this.newProduct = {
        ...this.product
      };

      this.$store.dispatch('database/addToShoppingCart', [this.newProduct, this.counter]);
      this.value = true;
      this.counter = 1;

      setTimeout(() => {
        this.value = false;
      }, 1000);
    },
    counterValue (value) {
      this.counter = value;
    }
  }
};
</script>
