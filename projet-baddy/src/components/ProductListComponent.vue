<template>
  <div>
    <h2>Product List</h2>
    <div class="container">
      <div class="container shadow p-3 mb-5 bg-body rounded" id="clothing">
        <div class="row row-cols-1 row-cols-md-2 g-4 mb-5 mt-5 clothes-card">
          <div class="col" v-for="product in products" :key="product.name">
            <div class="card" style="width: 12rem">
              <img
                :src="product.colors[0].imageUrl"
                class="card-img-top"
                :class="{ 'image-disabled': product.colors[0].quantity === 0 }"
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
                    :disabled="product.colors[0].quantity === 0"
                  >
                    -
                  </button>
                  <span class="quantity">{{ product.colors[0].quantity }}</span>
                  <button
                    class="btn btn-secondary"
                    @click="incrementQuantity(product)"
                    :disabled="
                      product.colors[0].quantity === initialProductQuantity
                    "
                  >
                    +
                  </button>
                </div>
                <button
                  class="btn btn-primary"
                  @click="addToCart(product, product.colors[0].name)"
                  :disabled="product.colors[0].quantity === 0"
                >
                  Buy
                </button>
                <button
                  class="btn btn-danger"
                  @click="removeFromCart(product)"
                  :disabled="
                    product.colors[0].quantity === initialProductQuantity
                  "
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
import ProductService from "@/services/ProductService.js";
export default {
  name: "ProductListComponent",
  data() {
    return {
      initialProductQuantity: 5,
      products: null,
      cart: [],
    };
  },
  async created() {
    ProductService.getProducts()
      .then((response) => {
        this.products = response.data;
        for (let i = 0; i < this.products.length; i++) {
          for (let j = 0; j < this.products[i].colors.length; j++) {
            this.products[i].colors[j].imageUrl = require("../assets/" +
              this.products[i].colors[j].imageUrl);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    cartCount() {
      return this.cart.length;
    },
    cartTotal() {
      return this.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
  },
  methods: {
    addToCart(product, color) {
      const selectedColor = product.colors.find((c) => c.name === color);

      if (selectedColor && selectedColor.quantity > 0) {
        const cartProduct = {
          ...product,
          color: selectedColor.name,
          imageUrl: selectedColor.imageUrl,
          quantity: 1,
        };

        this.cart.push(cartProduct);
        selectedColor.quantity--;

        this.updateLocalStorage(cartProduct, true);
      }
    },
    removeFromCart(product) {
      const index = this.cart.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        const removedProduct = this.cart.splice(index, 1)[0];
        const selectedColor = product.colors.find(
          (c) => c.name === removedProduct.color
        );

        if (selectedColor) {
          selectedColor.quantity += removedProduct.quantity;
        }

        this.updateLocalStorage(product, false);
      }
    },
    incrementQuantity(product) {
      if (product.colors[0].quantity < this.initialProductQuantity) {
        product.colors[0].quantity++;
        this.updateLocalStorage(product, true);
      }
    },
    decrementQuantity(product) {
      if (product.colors[0].quantity > 0) {
        product.colors[0].quantity--;
        this.updateLocalStorage(product, false);
      }
    },
    updateLocalStorage(product, isAdding) {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const index = savedCart.findIndex(
        (p) => p.id === product.id && p.color === product.colors[0].name
      );

      if (index !== -1) {
        if (isAdding) {
          savedCart[index].quantity += 1;
        } else {
          savedCart.splice(index, 1);
        }
      } else if (isAdding) {
        savedCart.push({
          id: product.id,
          color: product.colors[0].name,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(savedCart));
    },
    loadCartFromLocalStorage() {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      for (const item of savedCart) {
        const product = this.products.find((p) => p.id === item.id);
        if (product) {
          const selectedColor = product.colors.find(
            (c) => c.name === item.color
          );
          if (selectedColor && selectedColor.quantity > 0) {
            this.cart.push({
              ...product,
              color: selectedColor.name,
              imageUrl: selectedColor.imageUrl,
              quantity: item.quantity,
            });
            selectedColor.quantity -= item.quantity;
          }
        }
      }
    },
  },
  mounted() {
    this.loadCartFromLocalStorage();
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

.photos img {
  width: 100%;
  height: 20% !important;
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
