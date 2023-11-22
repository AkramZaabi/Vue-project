<template>
  <div class="container card mt-5">
    <div class="success-starts">
      <div class="parag-card">
        <h2>Success Starts</h2>
        <h1>with a great product!</h1>
        <p>
          Welcome to [Your E-commerce Store Name] - Your One-Stop Shop for
          Premium Products! Explore a curated collection of high-quality items,
        </p>

        <button class="shop-now-button btn btn-primary">
          <span>Shop Now</span>
          <img src="../assets/icons8-e-commerce-66.png" alt="Shop Now!" />
        </button>
      </div>
      <div class="img-container">
        <img
          src="../assets/16544-removebg-preview.png"
          alt="Success Starts with a Great Product"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>

<style scoped>
.container.card {
  background-color: #28bee3;
  display: flex;
  color: white;
  justify-content: flex-start;
  border-radius: 10px;
  font-family: Sofia Pro;
}
.img-container {
  width: 50%;
}

h2,
h1 {
  font-weight: 900;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  line-height: 1.5;
}

.shop-now-button:hover {
  background-color: #007bff;
}

/* New CSS styles */

.success-starts img {
  width: 250px;
}

.parag-card {
  text-align: left;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 50%;
}
.shop-now-button {
  width: 150px;
  height: 30px;
  padding: 5px 18px 30px;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  background-color: #007bff;
  margin-bottom: 50px;
}
.success-starts {
  display: flex;
}
.shop-now-button img {
  width: 25px;
  height: 25px;
}

.success-starts p {
  flex: 1;
  margin-left: 10px;
}
</style>
