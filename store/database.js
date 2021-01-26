import chairs from '@/assets/database/chairs.json';
import tables from '@/assets/database/tables.json';
import popular from '@/assets/database/popular-products.json';
import shipments from '@/assets/database/shipment.json';

export const state = () => ({
  chairs,
  tables,
  popular,
  shipments,
  searchProduct: '',
  shoppingCart: [],
  quantity: 0,
  sum: 0,
  shipment: 'shipment_1'
});

export const mutations = {
  searchProduct (state, data) {
    state.searchProduct = data;
  },
  quantityValue (state) {
    state.quantity = 0;

    Object.entries(state.shoppingCart).forEach(
      ([key, value]) => {
        Object.entries(value).forEach(
          ([keyProduct, valueProduct]) => {
            if (keyProduct === 'quantity') {
              state.quantity += valueProduct;
            }
          }
        );
      }
    );

    return state.quantity;
  },
  changingQuantity (state, [id, value]) {
    state.shoppingCart.find((product) => {
      if (product.id === id) {
        product.quantity = value;
      }
    });
  },
  addToShoppingCart (state, [product, quantity]) {
    let value = false;

    if (state.shoppingCart.length > 0) {
      state.shoppingCart.find((cart) => {
        if (cart.code === product.code) {
          cart.quantity += quantity;
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
  },
  sumProduct (state) {
    state.sum = 0;

    Object.entries(state.shoppingCart).forEach(
      ([key, value]) => {
        state.sum += (value.price * value.quantity);
      }
    );

    return state.sum;
  },
  changeShipment (state, data) {
    state.shipment = data;
  }
};

export const actions = {
  changingQuantity ({ commit }, [id, value]) {
    commit('changingQuantity', [id, value]);
    commit('quantityValue');
    commit('sumProduct');
  },
  addToShoppingCart ({ commit }, [product, quantity]) {
    commit('addToShoppingCart', [product, quantity]);
    commit('quantityValue');
    commit('sumProduct');
  },
  deleteProduct ({ commit }, id) {
    commit('deleteProduct', id);
    commit('quantityValue');
    commit('sumProduct');
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
