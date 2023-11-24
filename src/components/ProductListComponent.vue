<!-- ProductListComponent.vue -->
<template>
  <div>
    <h2>Product List</h2>
  </div>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="product in products" :key="product.name">
        <div class="card">
          <img :src="product.imageUrl" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductListComponent",
  data() {
    return {
      products: [
        {
          name: "T-shirt Super Mario",
          description: "T-shirt avec la photo de Mario",
          price: 50,
          imageUrl: require("../assets/t-shirt.png"),
        },
      ],
    };
  },
  // Other component options
};
</script>

<style scoped>
img {
  height: 120px;
  width: 120px;
}
</style>
