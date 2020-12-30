<template>
  <div class="chairs">
    <div class="container">
      <ObjectsList
          :objects="chairList"
          :type="'chair'"
      />
    </div>
  </div>
</template>

<script>
import ObjectsList from '@/components/ObjectsList';

export default {
  components: {
    ObjectsList
  },
  data () {
    return {
      chairList: [
        {
          id: 0,
          img: 'chair_1.png',
          name: 'Krzesło 1'
        },
        {
          id: 1,
          img: 'chair_2.png',
          name: 'Krzesło 2'
        },
        {
          id: 3,
          img: 'chair_4.png',
          name: 'Krzesło 3'
        },
        {
          id: 4,
          img: 'chair_3.png',
          name: 'Krzesło 4'
        },
        {
          id: 5,
          img: 'chair_4.png',
          name: 'Krzesło 5'
        },
        {
          id: 6,
          img: 'chair_2.png',
          name: 'Krzesło 6'
        },
        {
          id: 7,
          img: 'chair_1.png',
          name: 'Krzesło 7'
        }
      ]
    };
  }
};
</script>
