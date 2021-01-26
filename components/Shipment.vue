<template>
  <div class="shipment">
    <h4 class="shipment-title">
      Sposób dostawy
    </h4>
    <div class="shipment-radio">
      <input
          id="shipment_1"
          v-model="shipment"
          type="radio"
          name="shipment"
          value="shipment_1"
          @click="changeShipment('shipment_1')"
      >
      <label for="shipment_1">
        <span>
          Przesyłka kurierska
        </span>
        <span>
          40 zł
        </span>
      </label>
      <div class="check" />
    </div>
    <div class="shipment-radio">
      <input
          id="shipment_2"
          v-model="shipment"
          type="radio"
          name="shipment"
          value="shipment_2"
          @click="changeShipment('shipment_2')"
      >
      <label for="shipment_2">
        <span>
          Przesyłka kurierska za pobraniem
        </span>
        <span>
          60 zł
        </span>
      </label>
      <div class="check" />
    </div>
    <div class="shipment-radio">
      <input
          id="shipment_3"
          v-model="shipment"
          type="radio"
          name="shipment"
          value="shipment_3"
          @click="changeShipment('shipment_3')"
      >
      <label for="shipment_3">
        <span>
          Odbiór w punkcie
        </span>
        <span>
          50 zł
        </span>
      </label>
      <div class="check" />
    </div>
    <div class="shipment-radio">
      <input
          id="shipment_4"
          v-model="shipment"
          type="radio"
          name="shipment"
          value="shipment_4"
          @click="changeShipment('shipment_4')"
      >
      <label for="shipment_4">
        <span>
          Odbiór osobisty
        </span>
        <span>
          0 zł
        </span>
      </label>
      <div class="check" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shipment: 'shipment_1'
    };
  },
  mounted () {
    this.shipment = this.$store.state.database.shipment;
  },
  methods: {
    changeShipment (value) {
      this.$store.commit('database/changeShipment', value);
    }
  }
};
</script>
