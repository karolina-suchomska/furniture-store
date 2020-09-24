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
          name: 'chair_1.png'
        },
        {
          id: 1,
          name: 'chair_2.png'
        },
        {
          id: 3,
          name: 'chair_4.png'
        },
        {
          id: 4,
          name: 'chair_3.png'
        },
        {
          id: 5,
          name: 'chair_4.png'
        },
        {
          id: 6,
          name: 'chair_2.png'
        },
        {
          id: 7,
          name: 'chair_1.png'
        }
      ]
    };
  }
};
</script>
