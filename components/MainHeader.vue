<template>
  <div class="main-header">
    <Logo />
    <Search />
    <ShoppingCartIcon />
  </div>
</template>

<script>
import Logo from '@/components/molecules/Logo';
import Search from '@/components/molecules/Search';
import ShoppingCartIcon from '@/components/atoms/ShoppingCartIcon';

export default {
  components: {
    Logo,
    Search,
    ShoppingCartIcon
  }
};
</script>
