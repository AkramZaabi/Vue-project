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
              <router-link
                :to="{ name: 'ProductDetail', params: { id: product.id } }"
              >
                <img
                  id="image-product"
                  :src="
                    require(`../assets/${
                      product.colors[product.selected].imageUrl
                    }`)
                  "
                  class="card-img-top"
                  :class="{
                    'image-disabled':
                      product.colors[product.selected].inStock ===
                      product.colors[product.selected].quantity,
                  }"
                  alt="..."
                />
              </router-link>
              <div
                class="card-body text-center product-description"
                height="250px"
              >
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">
                  <span class="span-product mt-2">{{ product.price }} TND</span>
                </p>
                <div class="colors">
                  <button
                    v-for="(color, index) in product.colors"
                    :key="index"
                    :style="{ backgroundColor: color.name }"
                    class="color"
                    @click="update_selected(product, index)"
                  ></button>
                </div>
                <button
                  class="btn btn-primary ms-1"
                  @click="addToCart(product)"
                  :disabled="
                    product.colors[product.selected].inStock ===
                    product.colors[product.selected].quantity
                  "
                >
                  Add
                </button>

                <button
                  class="btn btn-link px-2"
                  @click="addfavorite(product)"
                  id="btn-favorite"
                >
                  <svg
                    style="height: 28px; width: 30px"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                  </svg>
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
import { mapMutations } from "vuex";

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
      await ProductService.getProducts().then((response) => {
        console.log("akram");
        console.log(response.data);
        this.products = response.data;
        // for (let i = 0; i < this.products.length; i++) {
        //   for (let j = 0; j < this.products[i].colors.length; j++) {
        //     console.log(this.products[i].colors[j].imageUrl);
        //     this.products[i].colors[j].imageUrl = require("../assets/" +
        //       this.products[i].colors[j].imageUrl);
        //   }
        // }
      });

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
    ...mapMutations(["setFavorite"]),
    getImagePath(product) {
      return import(`../assets/${product.colors[product.selected].imageUrl}`);
    },
    addfavorite(product) {
      this.setFavorite(product);
    },
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
        alert("product added to cart");
      } else {
        alert("product already in cart");
      }
      localStorage.setItem("products", JSON.stringify(productList));
      console.log("Cart length:", productList.length);
    },
    update_selected(product, index) {
      product.selected = index;
      console.log(index);
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
  width: 30%;
  justify-content: center;
  flex-direction: column;
}

.colors {
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
}

.color {
  width: 30px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 50%;
}

.link-products {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Center items vertically */
  flex-direction: column;
  width: 100%;
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
