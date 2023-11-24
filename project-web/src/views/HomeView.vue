<template>
  <div class="home">
    <HomeComponent />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import HomeComponent from "@/components/HomeComponent.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HomeView",
  components: {
    HomeComponent,
    Footer,
  },
};
</script>
