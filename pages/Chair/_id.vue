<template>
  <div class="chair">
    <div class="container">
      <ShippingCostInfo
          v-if="popup"
          @popup="popupValue"
      />
      <router-link to="/chairs">
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
              :src="'pictures/chair/' + product.img"
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
            {{ product.price + " zł" }}
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
            <div class="counter">
              <span
                  class="minus"
                  @click="counter > 1 ? counter-- : counter"
              />
              <input
                  :value="counter"
                  type="number"
                  min="1"
                  max="20"
              >
              <span
                  class="plus"
                  @click="counter++"
              />
            </div>
            <button
                type="button"
                class="button-buy"
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
import ShippingCostInfo from '@/components/molecules/ShippingCostInfo';

export default {
  components: {
    ShippingCostInfo
  },
  data () {
    return {
      variable: true,
      counter: 1,
      popup: false
    };
  },
  computed: {
    product () {
      return this.$store.getters['chairs/getChair'](parseInt(this.$route.params.id));
    }
  },
  methods: {
    popupValue (value) {
      this.popup = value;
    }
  }
};
</script>
