<template>
  <div class="search">
    <input
        v-model="dynamicSearch"
        type="text"
        placeholder="Wyszukaj"
        name="search"
        class="input-search"
        @keyup.enter="search()"
        @click="notFound = false"
    >
    <button
        type="button"
        @click="search()"
    />
    <p
        v-if="notFound"
        class="not-found"
    >
      Nie znaleziono szukanego produktu.
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dynamicSearch: '',
      notFound: false
    };
  },
  computed: {
    products () {
      return this.$store.state.database.chairs;
    },
    productSearch () {
      return this.products.filter(
        (product) => {
          let checkedSearch = false;
          const self = this;
          self.notFound = false;

          Object.entries(product).forEach(
            ([key, value]) => {
              if (key === 'name' && value.toString().toLowerCase().includes(self.dynamicSearch.toLowerCase())) {
                checkedSearch = true;
              } else {
                self.notFound = true;
              }
            }
          );

          return checkedSearch;
        }
      );
    }
  },
  methods: {
    search () {
      const self = this;

      Object.entries(self.productSearch).forEach(
        ([key, value]) => {
          Object.entries(value).forEach(
            ([keyCorrect, valueCorrect]) => {
              if (keyCorrect === 'name' && valueCorrect.toLowerCase() === self.dynamicSearch.toLowerCase()) {
                self.notFound = false;
              } else {
                return 0;
              }
            }
          );
        }
      );

      Object.entries(self.productSearch).forEach(
        ([key, value]) => {
          Object.entries(value).forEach(
            ([keySearch, valueSearch]) => {
              if (keySearch === 'id') {
                return self.$router.push('/chair/' + valueSearch);
              }
            }
          );
        }
      );
    }
  }
};
</script>
