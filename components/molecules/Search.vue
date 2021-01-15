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
      notFound: false,
      products: []
    };
  },
  computed: {
    chairs () {
      return this.$store.state.database.chairs;
    },
    tables () {
      return this.$store.state.database.tables;
    },
    productSearch () {
      return this.products.filter(
        (product) => {
          let checkedSearch = false;
          const self = this;
          self.notFound = false;

          Object.entries(product).forEach(
            ([key, value]) => {
              if ((key === 'name' || key === 'category') && value.toString().toLowerCase().includes(self.dynamicSearch.toLowerCase())) {
                checkedSearch = true;
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
      let id = 0;
      let type = '';

      self.products = [
        ...self.chairs,
        ...self.tables
      ];

      if (self.productSearch.length === 0) {
        self.notFound = true;
      } else if (self.productSearch.length === 1) {
        Object.entries(self.productSearch).forEach(
          ([key, value]) => {
            id = value.id;
            type = value.species;
            Object.entries(value).forEach(
              ([keyCorrect, valueCorrect]) => {
                if ((keyCorrect === 'name' || keyCorrect === 'category') && valueCorrect.toLowerCase() === self.dynamicSearch.toLowerCase()) {
                  self.notFound = false;
                } else {
                  self.notFound = false;
                  return 0;
                }
              }
            );
          }
        );

        return self.$router.push('/' + type + '/' + id);
      } else if (self.productSearch.length > 1) {
        self.$store.commit('database/searchProduct', self.productSearch);
        self.$router.push('/search/');
      }
    }
  }
};
</script>
