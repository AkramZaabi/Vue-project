<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-6">
        <form @submit.prevent="onSubmitReview()">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="email"
              required
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Your comment</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="review"
              required
            ></textarea>
          </div>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="rating"
            required
          >
            <option selected disabled value="">Select a rating</option>
            <option value="1">One Star</option>
            <option value="2">Two Stars</option>
            <option value="3">Three Stars</option>
            <option value="4">Four Stars</option>
            <option value="5">Five Stars</option>
          </select>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              required
            />
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
  <div class="container">
    <div v-if="reviews.length > 0" class="row justify-content-center mt-5">
      <h2 class="mb-4">Existing Reviews:</h2>
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="col-md-4 mb-3"
      >
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ review.name }}</h5>
            <p class="card-text">{{ review.review }}</p>
            <p class="card-text">
              <strong>Rating:</strong> {{ review.rating }} stars
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    this.fetchReviews();
  },
  data() {
    return {
      name: "",
      email: "",
      review: "",
      rating: null,
      reviews: [],
    };
  },
  methods: {
    onSubmitReview() {
      const productReview = {
        name: this.name,
        email: this.email,
        review: this.review,
        rating: this.rating,
      };

      axios
        .post("http://localhost:3000/reviews", productReview)
        .then((response) => {
          console.log(response.data);
          this.$emit("review-sent", productReview);
          this.clearForm();
          this.$router.go();
        })
        .catch((error) => {
          console.error("Error updating review:", error);
        });
    },
    fetchReviews() {
      axios
        .get("http://localhost:3000/reviews")
        .then((response) => {
          this.reviews = response.data;
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
        });
    },
    clearForm() {
      this.name = "";
      this.email = "";
      this.review = "";
      this.rating = null;
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
