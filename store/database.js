import chairs from '@/assets/database/chairs.json';
import popular from '@/assets/database/popular-products.json';

export const state = () => ({
  chairs,
  popular
});

export const getters = {
  getChair: state => (id) => {
    return state.chairs.find(chair => chair.id === id);
  }
};
