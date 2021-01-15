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
      return this.$store.getters['database/getChair'](parseInt(this.$route.params.id));
    }
  }
};
</script>
