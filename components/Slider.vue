<template>
  <div class="slider">
    <div
        v-for="card in cards"
        :key="card.id"
        :style="{ display: activeCard.id != card.id ? 'none' : '' }"
        class="img"
    >
      <img :src="card.img">
    </div>
    <div class="dots">
      <span
          v-for="dot in cards"
          :key="dot + uuid()"
          :class="{ dot: true, active: dot.id == activeSlide }"
          @click="activate(dot.id)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        {
          id: 1,
          img: 'pictures/carousel_1.jpg'
        },
        {
          id: 2,
          img: 'pictures/carousel_2.jpg'
        },
        {
          id: 3,
          img: 'pictures/carousel_3.jpg'
        }
      ],
      activeSlide: 1
    };
  },
  computed: {
    activeCard () {
      return this.cards.filter(card => card.id === this.activeSlide)[0];
    }
  },
  created () {
    this.interval = setInterval(() => {
      this.activeSlide =
        this.activeSlide === this.cards.length ? 1 : (this.activeSlide + 1) % (this.cards.length + 1);
    }, 6000);
  },
  methods: {
    activate (id) {
      this.activeSlide = id;
    },
    uuid () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);

        return v.toString(16);
      });
    }
  }
};
</script>
