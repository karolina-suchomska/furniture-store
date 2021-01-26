<template>
  <div class="summary-shopping">
    <h4 class="summary-shopping-title">
      Podsumowanie produktów
    </h4>
    <div class="summary-shopping-container">
      <div class="summary-shopping-row">
        <p>
          {{ 'Łączna kwota produktów: ' + new Intl.NumberFormat('pl', { style: 'currency', currency: 'PLN' }).format(sum) }}
        </p>
      </div>
      <div class="summary-shopping-row">
        <p>
          {{ 'Wybrana wysyłka: ' + newShipment().name + ' ' + new Intl.NumberFormat('pl', { style: 'currency', currency: 'PLN' }).format(newShipment().price) }}
        </p>
      </div>
      <div class="summary-shopping-row">
        <p>
          {{ 'Całkowita kwota do zapłaty: ' + new Intl.NumberFormat('pl', { style: 'currency', currency: 'PLN' }).format(sum + newShipment().price) }}
        </p>
      </div>
      <button disabled>
        Przejdż do kasy
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    sum () {
      return this.$store.state.database.sum;
    },
    shipment () {
      return this.$store.state.database.shipment;
    }
  },
  methods: {
    newShipment () {
      return this.$store.state.database.shipments[this.shipment];
    }
  }
};
</script>
