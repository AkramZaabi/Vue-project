import { createStore } from "vuex";

export default createStore({
  state: {
    aff: "rien",
    wishlist: [],
    products: [],
    facture: [],
  },
  getters: {
    getWishlist(state) {
      return state.wishlist;
    },
  },
  mutations: {
    //appel this.$store.commit("name function"):
    setFavorite(state, product) {
      state.wishlist.push(product);
    },
  },
  actions: {},
  modules: {},
});
