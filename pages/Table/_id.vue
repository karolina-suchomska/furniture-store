<template>
  <div>
    <ProductPage :product="product" />
  </div>
</template>

<script>
import ProductPage from '@/components/ProductPage';

export default {
  components: {
    ProductPage
  },
  computed: {
    product () {
      return this.$store.getters['database/getTable'](parseInt(this.$route.params.id));
    }
  }
};
</script>
