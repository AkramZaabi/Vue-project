<template>
  <div class="all container mt-5 card">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link now active links"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home-tab-pane"
          type="button"
          role="tab"
          aria-controls="home-tab-pane"
          aria-selected="true"
        >
          Favorite Products
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link links"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile-tab-pane"
          type="button"
          role="tab"
          aria-controls="profile-tab-pane"
          aria-selected="false"
        >
          saved events
        </button>
      </li>
      <li class="nav-item links" role="presentation">
        <button
          class="nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact-tab-pane"
          type="button"
          role="tab"
          aria-controls="contact-tab-pane"
          aria-selected="false"
        >
          confirmed orders
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="disabled-tab"
          data-bs-toggle="tab"
          data-bs-target="#disabled-tab-pane"
          type="button"
          role="tab"
          aria-controls="disabled-tab-pane"
          aria-selected="false"
        >
          comments
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home-tab-pane"
        role="tabpanel"
        aria-labelledby="home-tab"
        tabindex="0"
      >
        <div class="container">
          <div class="container" v-if="getWishlist">
            <div class="container py-5">
              <div class="row d-flex justify-content-center align-items-center">
                <div class="col-11">
                  <div
                    class="card card-registration card-registration-2"
                    style="border-radius: 15px"
                  >
                    <div class="card-body p-0">
                      <div class="row g-0">
                        <div class="col-lg-12">
                          <div class="p-5">
                            <div
                              class="d-flex justify-content-between align-items-center mb-5"
                            >
                              <h1 class="fw-bold mb-0" style="color: #6699cc">
                                Favorite Items
                              </h1>
                              <h6 class="mb-0 text-muted">
                                <b>items :</b> {{ items }}
                              </h6>
                            </div>
                            <hr class="my-4" />

                            <div
                              class="row mb-4 d-flex justify-content-between align-items-center shadow-sm p-3 mb-5 bg-white rounded"
                              v-for="(product, index) in getWishlist"
                              :key="index"
                            >
                              <div class="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  :src="
                                    product.colors[product.selected].imageUrl
                                  "
                                  class="img-fluid rounded-3"
                                  alt="Cotton T-shirt"
                                  height="150px"
                                />
                              </div>
                              <div class="col-md-3 col-lg-3 col-xl-3">
                                <h6 class="text-muted">{{ product.name }}</h6>
                                <h6 class="text-black mb-0">
                                  {{ product.description }}
                                </h6>
                              </div>

                              <div
                                class="col-md-3 col-lg-2 col-xl-2 offset-lg-1"
                                style="
                                  display: flex;
                                  justify-content: space-between;
                                  align-content: center;
                                "
                              >
                                <h6 class="mt-2">{{ product.price }}$</h6>
                                <button class="ms-2 btn btn-danger px-2">
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
                                    ><i
                                      class="fas fa-long-arrow-alt-left me-2"
                                    ></i
                                    >Back to shop</a
                                  ></router-link
                                >
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        /**** */ */
      </div>
      <div
        class="tab-pane fade"
        id="profile-tab-pane"
        role="tabpanel"
        aria-labelledby="profile-tab"
        tabindex="0"
      >
        <table class="table table-info table-hover">
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
        </table>
      </div>
      <div
        class="tab-pane fade"
        id="contact-tab-pane"
        role="tabpanel"
        aria-labelledby="contact-tab"
        tabindex="0"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
        repudiandae labore laboriosam veniam assumenda corrupti neque enim at
        suscipit itaque, praesentium vero incidunt expedita explicabo sit fugiat
        eius nostrum hic.
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProfileView",

  computed: {
    ...mapGetters(["getWishlist","getfacture"]),
    items() {
      console.log(this.getWishlist);
      return this.getWishlist.length;
    },
  },
};
</script>
<style>
.links {
  font-size: larger;
}
.links:hover {
  color: white;
  background-color: #6699cc;
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

@media (min-width: 1025px) {
  .h-custom {
    height: 100vh !important;
  }
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
