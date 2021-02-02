<template>
  <div class="pop-up">
    <div class="pop-up-container">
      <div class="close">
        <button
            class="button-close"
            @click="close()"
        />
      </div>
      <div class="shipping-cost-info">
        <h2>
          Kontakt
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$emit('popup', false);
    }
  }
};
</script>
