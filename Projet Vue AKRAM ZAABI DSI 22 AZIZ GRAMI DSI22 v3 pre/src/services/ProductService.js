import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
const apiCli = axios.create({
  baseURL: "http://localhost/vue/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getProducts() {
    return apiClient.get("/products");
  },
  getProduct(id) {
    return apiClient.get("/event/" + id);
  },
  addReview(productReview) {
    return apiCli.post("addReview.php", productReview);
  },
  getEvents() {
    return apiCli.get("/reviews.php");
  },
  getEvent(id) {
    return apiCli.get("review.php?id=" + id);
  },
};
