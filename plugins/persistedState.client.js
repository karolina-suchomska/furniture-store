import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
  createPersistedState({
    key: 'vuex',
    paths: [],
    storage: {
      getItem: key => sessionStorage.get(key),
      setItem: (key, value) => sessionStorage.set(key, value),
      removeItem: (key) => {
        sessionStorage.remove(key);
      }
    }
  })(store);
};
