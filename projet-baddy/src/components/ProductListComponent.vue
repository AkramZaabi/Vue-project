<template>
  <div>
    <h2>Product List</h2>
    <div class="container">
      <div class="container shadow p-3 mb-5 bg-body rounded" id="clothing">
        <div class="nav-products mt-5">
          <h2 class="mt-5">Products</h2>
          <div class="link-products">
            <button class="btn btn-primary" @click="chooseCategory('')">
              ALL
            </button>
            <button class="btn btn-primary" @click="chooseCategory('T-shirts')">
              T_shirt
            </button>
            <button
              class="btn btn-primary"
              @click="chooseCategory('Sweatshirts')"
            >
              sweater
            </button>
            <button class="btn btn-primary" @click="chooseCategory('Pants')">
              pants
            </button>
            <button class="btn btn-primary" @click="chooseCategory('Shoes')">
              shoes
            </button>
            <button class="btn btn-primary" @click="chooseCategory('Hoodie')">
              hoodie
            </button>
          </div>
        </div>
        <div
          class="row row-cols-1 row-cols-md-1 g-5 mb-5 mt-5 clothes-card ms-5 clothy"
        >
          <div class="col" v-for="product in listProducts" :key="product.name">
            <div class="card product" style="width: 12rem">
              <img
                id="image-product"
                :src="product.colors[0].imageUrl"
                class="card-img-top"
                :class="{ 'image-disabled': product.colors[0].quantity === 0 }"
                alt="..."
              />
              <div
                class="card-body text-center product-description"
                height="250px"
              >
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">
                  <span class="span-product mt-2">{{ product.price }} TND</span>
                </p>
                <button
                  class="btn btn-primary"
                  @click="addToCart(product)"
                  :disabled="product.colors[0].quantity === 0"
                >
                  Add
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
      category: null,
    };
  },
  async created() {
    try {
      const response = await ProductService.getProducts();
      this.products = response.data;

      for (let i = 0; i < this.products.length; i++) {
        for (let j = 0; j < this.products[i].colors.length; j++) {
          this.products[i].colors[j].imageUrl = require("../assets/" +
            this.products[i].colors[j].imageUrl);
        }
      }
      console.log(this.products);
    } catch (error) {
      console.error(error);
    }
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

    listProducts() {
      let list = [];

      if (this.category == null) {
        console.log(this.products);
        return this.products;
      }

      return list;
    },
  },
  methods: {
    show() {
      console.log(this.listProducts);
    },
    chooseCategory(category2) {
      if (!category2) {
        this.category = null;
        return;
      }
      this.category = category2;
      this.listProducts = [];
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].category == this.category) {
          this.listProducts.push(this.products[i]);
        }
      }

      return this.listProducts;
    },
    addToCart(product) {
      const list = localStorage.getItem("products");
      let productList = JSON.parse(list) || [];
      const index = productList.findIndex((p) => p.id === product.id);
      if (index === -1) {
        productList.push(product);
        console.log("Product added to the cart");
      } else {
        console.log("Product already in the cart");
      }
      localStorage.setItem("products", JSON.stringify(productList));
      console.log("Cart length:", productList.length);
    },
  },
};
</script>

<style scoped>
.product-description {
  height: 50% !important;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}
.nav-products {
  align-self: flex-start;
  text-align: center;
  display: flex;
  width: 20%;
  justify-content: center;
  flex-direction: column;
}
.link-products {
  display: flex;
  justify-content: center;
  align-items: center; /* Center items vertically */
  flex-direction: column;
}
.link-products div {
  border: 1px solid black;
  margin-top: 10px;
  border-radius: 5px;
  width: 70%;
  text-align: center;
}
.link-products div:hover {
  background-color: #0c9cda;
  color: white;
  border: 1px solid white;
  cursor: pointer;
}
.clothy {
  flex-wrap: wrap;
}
.row-cols-md-2 {
  display: flex;
  flex-wrap: wrap;
}

#image-product {
  height: 180px !important;
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
  border-radius: 5px;
  height: 40% !important;
}
.product {
  height: 350px;
}
.card-body {
  padding: 15px;
}

.card-title {
  font-weight: bold;
  height: 15%;
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
h5 {
  font-size: 15px;
}
.image-disabled {
  filter: grayscale(100%);
  opacity: 0.7;
}
</style>
