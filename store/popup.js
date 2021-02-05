export const state = () => ({
  popUpContact: false
});

export const mutations = {
  changeValuePopUpContact (state, value) {
    state.popUpContact = value;
  }
};
