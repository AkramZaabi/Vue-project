<template>
  <div class="review">
    <h1>Products Review</h1>
    <ReviewShow v-bind:reviews="reviews" />
    <ReviewForm @review-sent="showReview" />
  </div>
</template>

<script>
import ReviewForm from "@/components/ReviewForm.vue";
import ReviewShow from "@/components/ReviewShow.vue";
export default {
  name: "ReviewView",
  components: {
    ReviewForm,
    ReviewShow,
  },
  data() {
    return {
      reviews: [],
    };
  },
  methods: {
    showReview(review) {
      this.reviews.push(review);
      console.log(this.reviews);
    },
  },
};
</script>

<style scoped></style>
