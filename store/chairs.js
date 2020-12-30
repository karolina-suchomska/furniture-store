import chairs from '@/assets/database/chairs.json';

export const state = () => ({
  chairs
});

export const getters = {
  getChair: state => (id) => {
    return state.chairs.find(chair => chair.id === id);
  }
};
