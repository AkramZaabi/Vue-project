<template>
  <div class="product">
    <h1>Products View</h1>
    <ProductListComponent />
  </div>
</template>

<script>
import ProductListComponent from "@/components/ProductListComponent.vue";
export default {
  name: "ProductsView",
  components: {
    ProductListComponent,
  },
};
</script>

<style scoped></style>
