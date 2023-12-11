<template>
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
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    // You can remove this if you don't need to fetch reviews when the component is mounted
    // this.fetchReviews();
  },
  methods: {
    // If you need to fetch reviews dynamically, uncomment the method below
    fetchReviews() {
      axios
        .get("http://localhost:3000/reviews")
        .then((response) => {
          // eslint-disable-next-line vue/no-mutating-props
          this.reviews = response.data;
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
        });
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
h2 {
  color: #6699cc;
}
</style>
