<template>
  <CartPurchase :cart="cart"></CartPurchase>
</template>

<script>
import CartPurchase from "@/components/CartPurchase.vue";
export default {
  name: "PurchaseProduct",
  components: {
    CartPurchase,
  },
  computed: {
    cart() {
      const list = localStorage.getItem("products");
      let cart = JSON.parse(list) || [];

      for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < cart[i].colors.length; j++) {
          let s = cart[i].colors[j].imageUrl;
          let res = "../assets/";
          for (let i = 5; i < s.length; i++) {
            res += s[i];
          }
          console.log(res);
        }
      }

      return cart;
    },
  },
  methods: {
    addquantity(id) {
      for (let i = 0; i < this.cart.length; i++) {
        if (id == this.cart[i].id) {
          if (
            this.cart[i].colors[0].inStock < this.cart[i].colors[0].quantity
          ) {
            this.cart[i].colors[0].inStock++;
            console.log(this.cart[i].colors[0].inStock);
          } else {
            alert("vous avez atteint la quantite maxiale de ce produit !!");
          }
        }
      }
      localStorage.setItem("products", JSON.stringify(this.cart));
      console.log(id);
      return this.cart;
    },
    decreasequantity(id) {
      for (let i = 0; i < this.cart.length; i++) {
        if (id == this.cart[i].id) {
          if (this.cart[i].colors[0].inStock > 0) {
            this.cart[i].colors[0].inStock--;
            console.log(this.cart[i].colors[0].inStock);
            break;
          } else {
            alert("vous avez atteint la quantite maxiale de ce produit !!");
          }
        }
      }
      localStorage.setItem("products", JSON.stringify(this.cart));
      console.log(this.cart);

      return this.cart;
    },
  },
};
</script>
