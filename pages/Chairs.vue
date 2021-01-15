<template>
  <div class="chairs">
    <div class="container">
      <ObjectsList
          :objects="products"
          :type="'chair'"
      />
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
      return this.$store.state.database.chairs;
    }
  }
};
</script>
