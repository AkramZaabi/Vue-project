import { createStore } from "vuex";

export default createStore({
  state: {
    wishlist: [],
  },
  mutations: {
    addToWishlist(state, wishlistItem) {
      state.wishlist.push(wishlistItem);
    },
  },
  actions: {
    addToWishlist({ commit }, product) {
      commit("addToWishlist", product);
    },
  },
  getters: {
    wishlist: (state) => state.wishlist,
  },
});
