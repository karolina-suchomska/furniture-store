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
          <div class="box">
            <div class="box-container">
              <div class="box-row-buttons">
                <button
                    type="button"
                    :class="variable ? 'active' : ''"
                    class="description-button"
                    @click="variable = true"
                >
                  Opis
                </button>
                <button
                    type="button"
                    :class="variable ? '' : 'active'"
                    class="technical-data-button"
                    @click="variable = false"
                >
                  Dane techniczne
                </button>
              </div>
              <div class="box-row">
                <div
                    v-if="variable"
                    class="description"
                >
                  Opis jdksaljdlsjlsajlkdsajds
                </div>
                <div
                    v-else-if="!variable"
                    class="technical-data"
                >
                  Dane techniczne jsakdhkjsahdsajhk
                </div>
              </div>
            </div>
          </div>
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
  data () {
    return {
      variable: true
    };
  },
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
