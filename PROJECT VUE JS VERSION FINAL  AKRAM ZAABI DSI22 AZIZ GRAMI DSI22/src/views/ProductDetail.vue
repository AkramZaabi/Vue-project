<template>
  <div class="parent">
    <div v-if="product" class="container shadow-sm p-3 mb-5 bg-body rounded">
      <div class="imgBx">
        <img :src="product.colors[product.selected].imageUrl" />
      </div>
      <div class="details">
        <div class="content">
          <h2>
            {{ product.name }} <br />
            <span>{{ product.categoty }}</span>
          </h2>
          <p>
            Featuring soft foam cushioning and lightweight, woven fabric in the
            upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort.
            Lightweight Breathability: Lightweight woven fabric with real or
            synthetic leather provides breathable support. Cushioned Comfort: A
            full-length foam midsole delivers lightweight, plush cushioning.
            Secure Traction: Exaggerated herringbone-pattern outsole offers
            traction on a variety of surfaces.
          </p>
          <p class="product-colors">
            Available Colors:
            <button
              v-for="(color, index) in product.colors"
              :key="index"
              :style="{ backgroundColor: color.name }"
              class="color mb-1"
              @click="update_selected(product, index)"
            ></button>
          </p>
          <h3>{{ product.price }} DT</h3>
          <button @click="addToCart(product)">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "@/services/ProductService";

export default {
  name: "ProductDetail",
  props: ["id"],
  data() {
    return {
      product: null,
    };
  },

  created() {
    ProductService.getProduct(this.id)
      .then((response) => {
        this.product = response.data;
        for (let j = 0; j < this.product.colors.length; j++) {
          this.product.colors[j].imageUrl = require("../assets/" +
            this.product.colors[j].imageUrl);
          console.log(this.product.colors[j].imageUrl);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
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
    update_selected(product, index) {
      product.selected = index;
      console.log(index);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,800&display=swap");

body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  background: #000;
}
.parent {
  justify-content: center;
  display: flex;
}
.product-colors {
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
}
.product-colors button {
  width: 20px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 50% !important;
}

.container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 900px;
  height: 600px;
  background: #fff;
  margin: 20px;
}

.container .imgBx {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: #6699cc;
  transition: 0.3s linear;
}

.container .imgBx:before {
  content: "Trend";
  position: absolute;
  top: 0px;
  left: 24px;
  color: #000;
  opacity: 0.2;
  font-size: 8em;
  font-weight: 800;
}

.container .imgBx img {
  position: relative;
  width: 700px;
  transform: rotate(-30deg);
  left: -50px;
  transition: 0.9s linear;
}

.container .details {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 40px;
}

.container .details h2 {
  margin: 0;
  padding: 0;
  font-size: 2.4em;
  line-height: 1em;
  color: #444;
}

.container .details h2 span {
  font-size: 0.4em;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #999;
}

.container .details p {
  max-width: 85%;
  margin-left: 15%;
  color: #333;
  font-size: 15px;
  margin-bottom: 36px;
}

.container .details h3 {
  margin: 0;
  padding: 0;
  font-size: 2.5em;
  color: #a2a2a2;
  float: left;
}
.container .details button {
  background: #6699cc;
  color: #fff;
  border: none;
  outline: none;
  padding: 15px 20px;
  margin-top: 5px;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 40px;
  float: right;
}

.product-colors button {
  width: 26px;
  height: 26px;
  top: 7px;
  margin-right: 12px;
  left: 10px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  display: inline-block;
}

.black {
  background: #000;
}

.red {
  background: #d5212e;
}

.orange {
  background: #f18557;
}

.product-colors .active:after {
  content: "";
  width: 36px;
  height: 36px;
  border: 2px solid #000;
  position: absolute;
  border-radius: 50%;
  box-sizing: border-box;
  left: -5px;
  top: -5px;
}

/* responsive */
@media (max-width: 1080px) {
  .container {
    height: auto;
  }
  .container .imgBx {
    padding: 40px;
    box-sizing: border-box;
    width: 100% !important;
    height: auto;
    text-align: center;
    overflow: hidden;
  }
  .container .imgBx img {
    left: initial;
    max-width: 100%;
    transform: rotate(0deg);
  }
  .details {
    width: 100% !important;
    height: auto;
    padding: 20px;
  }
  .container .details p {
    margin-left: 0;
    max-width: 100%;
  }
}
</style>
