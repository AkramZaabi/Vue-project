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
export default {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
