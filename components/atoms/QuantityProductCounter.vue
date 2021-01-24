<template>
  <div class="quantity-product-counter">
    <span
        class="minus"
        @click="counter > 1 ? counter-- : counter"
    />
    <input
        v-model="counter"
        type="number"
        min="1"
        max="20"
        disabled
    >
    <span
        class="plus"
        @click="counter < 20 ? counter++ : counter"
    />
  </div>
</template>

<script>
export default {
  props: {
    counterValue: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      counter: 1
    };
  },
  watch: {
    counter () {
      this.$emit('counter', this.counter);
    }
  },
  mounted () {
    this.counter = this.counterValue;
  }
};
</script>
