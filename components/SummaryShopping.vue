<template>
  <div class="summary-shopping">
    <h4 class="summary-shopping-title">
      Podsumowanie produktów
    </h4>
    <div>
      Łączna kwota:
      <p>
        {{ new Intl.NumberFormat('pl', { style: 'currency', currency: 'PLN' }).format(sum) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    sum () {
      return this.$store.state.database.sum;
    }
  },
  mounted () {
    this.$store.commit('database/sumProduct');
  }
};
</script>
