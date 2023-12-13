<template>
  <section class="h-100 h-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12">
          <div
            class="card card-registration card-registration-2"
            style="border-radius: 15px"
          >
            <div class="card-body p-0">
              <div class="row g-0">
                <div class="col-lg-8">
                  <div class="p-5" v-if="cart">
                    <div
                      class="d-flex justify-content-between align-items-center mb-5"
                    >
                      <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                      <h6 class="mb-0 text-muted">
                        {{ cartLength + " items" }}
                      </h6>
                    </div>
                    <hr class="my-4" />

                    <div
                      class="row mb-4 d-flex justify-content-between align-items-center"
                      v-for="(product, index) in cart"
                      :key="index"
                    >
                      <div class="col-md-2 col-lg-2 col-xl-2">
                        <img
                          :src="
                            require(`../assets/${
                              product.colors[product.selected].imageUrl
                            }`)
                          "
                          class="img-fluid rounded-3"
                          alt="Cotton T-shirt"
                        />
                      </div>
                      <div class="col-md-3 col-lg-3 col-xl-3">
                        <h6 class="text-muted">{{ product.name }}</h6>
                        <h6 class="text-black mb-0">
                          {{ product.description }}
                        </h6>
                      </div>
                      <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button
                          class="btn btn-link px-2"
                          @click="decrementquantity(product)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-dash-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                            />
                            <path
                              d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"
                            />
                          </svg>
                        </button>

                        <input
                          :id="product.id"
                          min="0"
                          name="quantity"
                          :value="product.colors[product.selected].inStock"
                          type="number"
                          class="form-control form-control-sm"
                        />

                        <button
                          class="btn btn-link px-2"
                          @click="incrementquantity(product)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-plus-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                            />
                            <path
                              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
                            />
                          </svg>
                        </button>
                      </div>

                      <div
                        class="col-md-3 col-lg-2 col-xl-2 offset-lg-1"
                        style="
                          display: flex;
                          justify-content: space-between;
                          align-content: center;
                        "
                      >
                        <h6 class="mt-2">{{ "€ " + product.price }}</h6>
                        <button
                          class="ms-2 btn btn-danger px-2"
                          @click="deletefromCart(product.id)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                            />
                            <path
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" class="text-muted"
                          ><i class="fas fa-times"></i
                        ></a>
                      </div>
                    </div>
                    <hr class="my-4" />
                    <hr class="my-4" />

                    <div class="pt-5">
                      <h6 class="mb-0">
                        <router-link to="/product"
                          ><a href="#!" class="text-body"
                            ><i class="fas fa-long-arrow-alt-left me-2"></i>Back
                            to shop</a
                          ></router-link
                        >
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 bg-grey">
                  <div class="p-5">
                    <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                    <hr class="my-4" />

                    <div class="d-flex justify-content-between mb-4">
                      <h5 class="text-uppercase">items {{ cartLength }}</h5>
                      <h5></h5>
                    </div>

                    <h5 class="text-uppercase mb-3">Shipping</h5>

                    <div class="mb-4 pb-2">
                      <select class="select">
                        <option value="1">Standard-Delivery- €5.00</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                      </select>
                    </div>

                    <h5 class="text-uppercase mb-3">Give code</h5>

                    <div class="mb-5">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Examplea2"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Examplea2"
                          >Enter your code</label
                        >
                      </div>
                    </div>

                    <hr class="my-4" />

                    <div class="d-flex justify-content-between mb-5">
                      <h5 class="text-uppercase">Total price</h5>
                      <h5>{{ prixtotal }}</h5>
                    </div>

                    <button
                      @click="addfactures(), generatePDF()"
                      type="button"
                      class="btn btn-dark btn-block btn-lg"
                      data-mdb-ripple-color="dark"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import ProductServices from "@/services/ProductService";
export default {
  name: "CartPurchase",
  data() {
    return {
      heading: "Your Tredify Mode Here",
    };
  },
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
  computed: {
    cartLength() {
      return this.cart.length;
    },
    prixtotal() {
      let total = 0;

      this.cart.forEach((product) => {
        total += product.colors[product.selected].inStock * product.price;
      });

      // Return the formatted total price
      return "€ " + total.toFixed(2);
    },
  },
  methods: {
    addfactures() {
      let p = this.cart;
      const tab = localStorage.getItem("facture")
        ? JSON.parse(localStorage.getItem("facture"))
        : [];
      tab.push(this.cart);
      localStorage.setItem("facture", JSON.stringify(tab));
      console.log(p);
    },
    incrementquantity(product) {
      this.$emit("increment-quantity", product.id);
    },
    decrementquantity(product) {
      this.$emit("decrement-quantity", product.id);
    },
    deletefromCart(id) {
      this.$emit("deletefromcart", id);
    },
    generatePDF() {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: "letter",
      });
      doc.text(this.heading, 3.5, 0.4); // (message,horizontale,vertical)
      var total_payment = "Total amount :" + this.prixtotal + " Dt ";
      doc.text(total_payment, 3.4, 0.7);
      autoTable(doc, { html: "#my-table" });
      this.cart.forEach((v) => {
        var name = v.name;
        var quantity = v.colors[0].inStock;
        var val = quantity * v.price;
        autoTable(doc, {
          head: [["Name", "Quantity", "Price"]],
          body: [[name, quantity, val]],
        });
      });
      this.updatequantity(this.cart);
      let cart = null;
      localStorage.setItem("products", JSON.stringify(cart));
      doc.save(`${Math.random()}.pdf`);
    },
    updatequantity(cart) {
      let list = cart;
      if (!list) {
        return;
      }
      for (let i = 0; i < list.length; i++) {
        ProductServices.updateProduct(list[i].id, list[i]).then((res) => {
          console.log(res);
        });
      }
    },
  },
};
</script>
<style>
@media (min-width: 1025px) {
  .h-custom {
    height: 100vh !important;
  }
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: 0.75em;
  padding-right: 0.75em;
}

.card-registration .select-arrow {
  top: 13px;
}

.bg-grey {
  background-color: #eae8e8;
}

@media (min-width: 992px) {
  .card-registration-2 .bg-grey {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
}

@media (max-width: 991px) {
  .card-registration-2 .bg-grey {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
}
</style>
