<template>
  <div class="chair">
    <div class="container">
      <router-link to="/chairs">
        <button
            class="button-back"
            type="button"
        >
          Wróć do listy
        </button>
      </router-link>
      <p>
        {{ chair.name }}
      </p>
      <img
          :src="'pictures/chair/' + chair.img"
          alt="object"
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    chairs () {
      return this.$store.state.chairs.chairs;
    },
    chair () {
      return this.$store.getters['chairs/getChair'](parseInt(this.$route.params.id));
    }
  }
};
</script>
