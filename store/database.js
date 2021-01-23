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
    let value = false;

    if (state.shoppingCart.length > 0) {
      state.shoppingCart.find((cart) => {
        if (cart.code === product.code) {
          cart.quantity++;
          value = true;
        }
      });

      if (!value) {
        state.shoppingCart.push(product);
      }
    } else {
      state.shoppingCart.push(product);
    }
  },
  deleteProduct (state, id) {
    const products = [];

    state.shoppingCart.find((product) => {
      if (product.id !== id) {
        products.push(product);
      }
    });
    state.shoppingCart = products;
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
