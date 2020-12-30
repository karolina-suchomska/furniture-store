<template>
  <div class="footer">
    {{ year }}
  </div>
</template>

<script>
export default {
  data () {
    const data = new Date();

    return {
      year: data.getFullYear()
    };
  }
};
</script>
