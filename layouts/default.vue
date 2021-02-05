<template>
  <div
      class="main-container"
      :class="popUpContact ? 'shadow' : ''"
  >
    <PopUpContact
        v-if="popUpContact"
    />
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
import PopUpContact from '@/components/molecules/PopUpContact';

export default {
  components: {
    MainHeader,
    Menu,
    Footer,
    PopUpContact
  },
  computed: {
    popUpContact () {
      return this.$store.state.popup.popUpContact;
    }
  }
};
</script>
