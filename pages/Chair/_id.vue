<template>
  <div class="chairs">
    <div class="container">
      <p>
        Krzesło {{ ' ' + this.$route.params.id }}
      </p>
      <p>
        {{ chair }}
      </p>
    </div>
  </div>
</template>

<script>
import ObjectsList from '@/components/ObjectsList';

export default {
  data () {
    return {
    };
  },
  computed: {
    chairs () {
      return this.$store.state.chairs.chairs;
    },
    chair () {
      const self = this;

      return this.$store.getters['chairs/getChair'](parseInt(this.$route.params.id));
    }
  }
};
</script>
