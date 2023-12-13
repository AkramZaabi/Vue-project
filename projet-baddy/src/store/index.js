import { createStore } from "vuex";

export default createStore({
  state: {
    titre: "Trendify mode",
    CEOs: "Akram Zaabi Aziz Grami",
    wishlist: [],
    products: [],
    facture: [],
    reviews: [],
  },
  getters: {
    getWishlist(state) {
      return state.wishlist;
    },
    gettitre(state) {
      return state.titre;
    },
    getCEOs(state) {
      return state.CEOs;
    },
    getfacture(state) {
      return state.facture;
    },
    getreviews(state) {
      return state.reviews;
    },
  },
  mutations: {
    //appel this.$store.commit("name function"):
    addreview(state, review) {
      state.reviews.push(review);
    },
    setFavorite(state, product) {
      const list = state.wishlist;
      const index = list.findIndex((p) => p.id === product.id);
      if (index === -1) {
        state.wishlist.push(product);
        alert("product added to wishlist");
      }
    },
    removefavorite(state, id) {
      const list = state.wishlist;
      const index = list.findIndex((p) => p.id === id);
      if (index != -1) {
        if (confirm("are you  sure you want to  remove the product")) {
          state.wishlist.splice(index, 1);
          alert("product  removoed");
        }
      }
    },
    addfacture(state, cart) {
      state.facture.push(cart);
    },
  },
  actions: {},
  modules: {},
});
