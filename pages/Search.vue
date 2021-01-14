<template>
  <div class="search-page">
    <div v-if="products">
      <h3>
        Znalezione produkty:
      </h3>
      <ObjectsList
          :objects="products"
      />
    </div>
    <div v-else>
      <h3>
        Nie znaleziono produktów.
      </h3>
    </div>
  </div>
</template>

<script>
import ObjectsList from '@/components/ObjectsList';

export default {
  components: {
    ObjectsList
  },
  computed: {
    products () {
      return this.$store.state.database.searchProduct;
    }
  }
};
</script>
