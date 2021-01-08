<template>
  <div>
    <header>
      <MainHeader />
    </header>
    <Menu />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

export default {
  components: {
    MainHeader,
    Menu,
    Footer
  }
};
</script>
