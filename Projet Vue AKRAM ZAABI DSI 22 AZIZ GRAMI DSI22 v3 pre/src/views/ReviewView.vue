<template>
  <div class="review">
    <h1 class="mt-5">Products Review</h1>
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

<style scoped>
h1 {
  color: #6699cc;
}
h1 {
  animation-name: let;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
@keyframes let {
  0% {
    letter-spacing: 2%;
  }
  50% {
    letter-spacing: 1px;
  }
  100% {
    letter-spacing: 2px;
  }
}
</style>
