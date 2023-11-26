<template>
  <div>
    <h2>Product List</h2>
  </div>
  <div class="container">
    <div class="container shadow p-3 mb-5 bg-body rounded" id="cloathing">
      <div class="row row-cols-1 row-cols-md-2 g-4 mb-5 mt-5 clothes-card">
        <div class="col" v-for="product in products" :key="product.name">
          <div class="card" style="width: 12rem">
            <img :src="product.imageUrl" class="card-img-top" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">
                <span class="span-product mt-2">{{ product.price }} TND</span>
              </p>
              <button class="btn btn-primary" @click="addToCart(product)">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="cart">
    <p>Cart: {{ cartCount }} item(s) - Total: {{ cartTotal }}$</p>
  </div>
</template>

<script>
export default {
  name: "ProductListComponent",
  data() {
    return {
      products: [
        {
          name: "T-shirt Super Mario",
          description: "T-shirt avec la photo de Mario",
          price: 50,
          imageUrl: require("../assets/t-shirt.png"),
        },
        {
          name: "Hoodie Zelda",
          description: "Hoodie featuring the iconic Zelda logo",
          price: 65,
          imageUrl: require("../assets/t-shirt.png"),
        },
        {
          name: "T-shirt Super Mario",
          description: "T-shirt avec la photo de Mario",
          price: 50,
          imageUrl: require("../assets/t-shirt.png"),
        },
        {
          name: "T-shirt Super Mario",
          description: "T-shirt avec la photo de Mario",
          price: 50,
          imageUrl: require("../assets/t-shirt.png"),
        },
        {
          name: "T-shirt Super Mario",
          description: "T-shirt avec la photo de Mario",
          price: 50,
          imageUrl: require("../assets/t-shirt.png"),
        },
        {
          name: "T-shirt Super Mario",
          description: "T-shirt avec la photo de Mario",
          price: 50,
          imageUrl: require("../assets/t-shirt.png"),
        },
      ],
      cart: [],
    };
  },
  computed: {
    cartCount() {
      return this.cart.length;
    },
    cartTotal() {
      return this.cart.reduce((total, product) => total + product.price, 0);
    },
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
  },
};
</script>

<style scoped>
/* Special CSS for the provided HTML structure */

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.row-cols-md-2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.col {
  flex: 0 0 20%; /* Adjust as needed */
}

.card {
  width: 100%;
  border: 1px solid #0c9cda;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.card-body {
  padding: 15px;
}

.card-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  text-align: center;
}

.span-product {
  font-size: 15px;
  font-weight: bold;
}

.btn-primary {
  width: 100%;
  background-color: #007bff;
  color: white;
  border: 1px solid #007bff;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
