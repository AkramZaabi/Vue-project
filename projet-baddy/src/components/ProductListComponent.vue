<template>
  <div>
    <h2>Product List</h2>
    <div class="container">
      <div class="container shadow p-3 mb-5 bg-body rounded" id="clothing">
        <div class="row row-cols-1 row-cols-md-2 g-4 mb-5 mt-5 clothes-card">
          <div class="col" v-for="product in products" :key="product.name">
            <div class="card" style="width: 12rem">
              <img
                :src="product.imageUrl"
                class="card-img-top"
                :class="{ 'image-disabled': product.quantity === 0 }"
                alt="..."
              />
              <div class="card-body text-center">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">
                  <span class="span-product mt-2">{{ product.price }} TND</span>
                </p>
                <div class="quantity-controls">
                  <button
                    class="btn btn-secondary"
                    @click="decrementQuantity(product)"
                    :disabled="product.quantity === 0"
                  >
                    -
                  </button>
                  <span class="quantity">{{ product.quantity }}</span>
                  <button
                    class="btn btn-secondary"
                    @click="incrementQuantity(product)"
                    :disabled="product.quantity === initialProductQuantity"
                  >
                    +
                  </button>
                </div>
                <button
                  class="btn btn-primary"
                  @click="addToCart(product)"
                  :disabled="product.quantity === 0"
                >
                  Buy
                </button>
                <button
                  class="btn btn-danger"
                  @click="removeFromCart(product)"
                  :disabled="product.quantity === initialProductQuantity"
                >
                  Remove
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
  </div>
</template>

<script>
export default {
  name: "ProductListComponent",
  data() {
    return {
      initialProductQuantity: 5,
      products: [
        {
          name: "T-shirt Super Mario",
          description: "T-shirt avec la photo de Mario",
          price: 50,
          imageUrl: require("../assets/t-shirt.png"),
          quantity: 5,
        },
        {
          name: "Hoodie Zelda",
          description: "Hoodie featuring the iconic Zelda logo",
          price: 65,
          imageUrl: require("../assets/t-shirt.png"),
          quantity: 10,
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
      if (product.quantity > 0) {
        this.cart.push({ ...product, quantity: 1 });
        product.quantity--;
      }
    },
    removeFromCart(product) {
      const index = this.cart.findIndex((p) => p.name === product.name);
      if (index !== -1) {
        this.cart.splice(index, 1);
        product.quantity++;
      }
    },
    incrementQuantity(product) {
      if (product.quantity < this.initialProductQuantity) {
        product.quantity++;
      }
    },
    decrementQuantity(product) {
      if (product.quantity > 0) {
        product.quantity--;
      }
    },
  },
};
</script>

<style scoped>
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
  flex: 0 0 20%;
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

.quantity-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.quantity {
  font-size: 18px;
  font-weight: bold;
}

.btn-primary,
.btn-danger {
  width: 45%;
  margin-top: 10px;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-danger:hover {
  background-color: #dc3545;
}

.image-disabled {
  filter: grayscale(100%);
  opacity: 0.7;
}
</style>
