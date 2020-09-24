<template>
  <div class="chair-list">
    <div
        v-for="chair in chairs"
        :key="chair.id"
    >
      <div class="picture">
        <img
            :src="'pictures/chair/' + chair.name"
            alt="Chair"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chairs: {
      type: Array,
      default: null
    }
  }
};
</script>
