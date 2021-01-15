<template>
  <div class="objects-list">
    <router-link
        v-for="object in objects"
        :key="object.id"
        :to="'/' + object.species + '/' + object.id"
    >
      <Product :product="object" />
    </router-link>
  </div>
</template>

<script>
import Product from '@/components/molecules/Product';

export default {
  components: {
    Product
  },
  props: {
    objects: {
      type: Array,
      default: null
    }
  }
};
</script>
