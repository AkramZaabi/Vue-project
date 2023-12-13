<template>
  <CartPurchase
    @decrement-quantity="decreasequantity"
    @deletefromcart="deletefromcart"
    @increment-quantity="addquantity"
    @update-quantity="updatecart"
    :cart="cart"
  ></CartPurchase>
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
    updatecart() {
      localStorage.setItem("product", JSON.stringify(this.cart));
    },
    addquantity(id) {
      for (let i = 0; i < this.cart.length; i++) {
        if (id == this.cart[i].id) {
          if (
            this.cart[i].colors[this.cart[i].selected].inStock <
            this.cart[i].colors[this.cart[i].selected].quantity
          ) {
            this.cart[i].colors[this.cart[i].selected].inStock++;
            console.log(this.cart[i].colors[this.cart[i].selected].inStock);
          } else {
            alert("vous avez atteint la quantite maxiale de ce produit !!");
          }
        }
      }
      localStorage.setItem("products", JSON.stringify(this.cart));
      console.log(id);
      this.$router.push({ name: "Purchase" }).then(() => {
        this.$router.go();
      });
      return this.cart;
    },
    decreasequantity(id) {
      for (let i = 0; i < this.cart.length; i++) {
        if (id == this.cart[i].id) {
          if (this.cart[i].colors[this.cart[i].selected].inStock > 0) {
            this.cart[i].colors[this.cart[i].selected].inStock--;
            console.log(this.cart[i].colors[this.cart[i].selected].inStock);
            break;
          } else {
            alert("vous avez atteint la quantite maxiale de ce produit !!");
          }
        }
      }
      localStorage.setItem("products", JSON.stringify(this.cart));
      console.log(this.$router);
      this.$router.push({ name: "Purchase" }).then(() => {
        this.$router.go();
      });
      return this.cart;
    },
    deletefromcart(id) {
      const indexToRemove = this.cart.findIndex((product) => product.id === id);

      if (indexToRemove !== -1) {
        this.cart.splice(indexToRemove, 1);
      } else {
        console.log(`Item with ID ${id} not found in the cart.`);
      }
      localStorage.setItem("products", JSON.stringify(this.cart));
      this.$router.push({ name: "Purchase" }).then(() => {
        this.$router.go();
      });
    },
  },
};
</script>
