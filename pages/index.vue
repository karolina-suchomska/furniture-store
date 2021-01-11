<template>
  <div class="container">
    <Slider />
    <Beam />
    <AboutUs />
  </div>
</template>

<script>
import Slider from '@/components/Slider';
import Beam from '@/components/Beam';
import AboutUs from '@/components/AboutUs';

export default {
  components: {
    Slider,
    Beam,
    AboutUs
  }
};
</script>
