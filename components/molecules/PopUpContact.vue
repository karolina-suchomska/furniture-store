<template>
  <div class="pop-up">
    <div class="pop-up-container">
      <div class="close">
        <button
            class="button-close"
            @click="changePopUpValue()"
        />
      </div>
      <div class="pop-up-contact">
        <h2>
          Kontakt
        </h2>
        <input type="text">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changePopUpValue () {
      this.$store.commit('popup/changeValuePopUpContact', false);
    }
  }
};
</script>
