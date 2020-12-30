<template>
  <div class="objects-list">
    <div
        v-for="object in objects"
        :key="object.id"
    >
      <router-link
          :to="'/chair/' + object.id"
      >
        <div class="object">
          <img
              :src="'pictures/' + type + '/' + object.img"
              alt="object"
          >
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    objects: {
      type: Array,
      default: null
    },
    type: {
      type: String,
      default: ''
    }
  }
};
</script>
