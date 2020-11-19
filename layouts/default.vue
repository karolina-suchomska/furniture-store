<template>
  <div>
    <Logo />
    <Menu />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

export default {
  components: {
    Logo,
    Menu,
    Footer
  }
};
</script>
