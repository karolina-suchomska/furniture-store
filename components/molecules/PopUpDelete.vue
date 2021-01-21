<template>
  <div class="pop-up">
    <div class="pop-up-container">
      <div class="close">
        <button
            class="button-close"
            @click="close()"
        />
      </div>
      <div class="pop-up-delete">
        <h3>
          Usunąć ten produkt?
        </h3>
        <button
            @click="close()"
        >
          Anuluj
        </button>
        <button
            @click="deleteProduct()"
        >
          Usuń
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    idProduct: {
      type: Number,
      default: 0
    }
  },
  methods: {
    close () {
      this.$emit('popup', false);
    },
    deleteProduct () {
      this.$emit('deleteProduct', false);
    }
  }
};
</script>
