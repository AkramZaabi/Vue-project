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
                          :src="product.colors[product.selected].imageUrl"
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
                      <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h6 class="mb-0">{{ "€ " + product.price }}</h6>
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
                      <h5>€ 132.00</h5>
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
                      @click="generatePDF()"
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
export default {
  name: "CartPurchase",
  data() {
    return {
      heading: "Your Tredify Mode Here", // Provide your actual heading
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
    incrementquantity(product) {
      this.$emit("increment-quantity", product.id);
    },
    decrementquantity(product) {
      this.$emit("decrement-quantity", product.id);
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
      localStorage.clear();
      doc.save(`${Math.random()}.pdf`);
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
