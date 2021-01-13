<template>
  <div class="container">
    <Slider />
    <Beam />
    <PopularProducts />
    <AboutUs />
  </div>
</template>

<script>
import Slider from '@/components/Slider';
import Beam from '@/components/Beam';
import PopularProducts from '@/components/PopularProducts';
import AboutUs from '@/components/AboutUs';

export default {
  components: {
    Slider,
    Beam,
    PopularProducts,
    AboutUs
  }
};
</script>
