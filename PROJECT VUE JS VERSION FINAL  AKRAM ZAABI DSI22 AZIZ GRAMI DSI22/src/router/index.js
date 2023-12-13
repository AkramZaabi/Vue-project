import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import PurchaseProduct from "../views/PurchaseProduct.vue";
import ReviewView from "../views/ReviewView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Purchase",
    name: "Purchase",
    component: PurchaseProduct,
  },
  {
    path: "/review",
    name: "review",
    component: ReviewView,
  },
  {
    path: "/Profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProfileView.vue"),
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    props: true,
    component: () => import("../views/ProductDetail.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: ProductsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
