import chairs from '@/assets/database/chairs.json';
import tables from '@/assets/database/tables.json';
import popular from '@/assets/database/popular-products.json';

export const state = () => ({
  chairs,
  tables,
  popular,
  searchProduct: '',
  shoppingCart: []
});

export const mutations = {
  searchProduct (state, data) {
    state.searchProduct = data;
  },
  addToShoppingCart (state, product) {
    state.shoppingCart.push(product);
  }
};

export const getters = {
  getChair: state => (id) => {
    return state.chairs.find(chair => chair.id === id);
  },
  getTable: state => (id) => {
    return state.tables.find(table => table.id === id);
  }
};
