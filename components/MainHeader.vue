<template>
  <div class="main-header">
    <Logo />
    <Search />
    <div class="shopping-basket">
      Wózek sklpeowy
    </div>
  </div>
</template>

<script>
import Logo from '@/components/molecules/Logo';
import Search from '@/components/Search';

export default {
  components: {
    Logo,
    Search
  }
};
</script>
