<template>
  <div class="product-contact">
    <div class="product-contact-title">
      <h4>
        Masz problem z wyborem?
      </h4>
      <p>
        Pomożemy Ci!
      </p>
    </div>
    <div class="product-contact-content">
      <button
          type="button"
          class="button-one"
          @click="changePopUpValue()"
      >
        Zadaj nam pytanie
      </button>
      <p class="middle">
        lub
      </p>
      <a
          class="button-one"
          href="tel:5551234567"
      >
        <p>
          Zadzwoń do nas
        </p>
        <span>
          (67)-987-543-232
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      popup: false
    };
  },
  methods: {
    changePopUpValue () {
      this.$store.commit('popup/changeValuePopUpContact', true);
    }
  }
};
</script>
