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
      <div class="row">
        <div class="col">
          <img
              :src="'pictures/chair/' + chair.img"
              alt="object"
          >
        </div>
        <div class="col">
          <p>
            {{ chair.name }}
          </p>
        </div>
      </div>
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
