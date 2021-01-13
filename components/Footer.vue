<template>
  <div class="footer">
    {{ '&copy; ' + year + ' furniture-store' }}
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
