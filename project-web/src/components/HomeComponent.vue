<template>
  <div class="container mt-5">
    <div id="text-content">
      <h1>Modista</h1>
      <h1>Mode</h1>
      <h2 class="mt-4">
        Success Starts with <b style="font-weight: bold">a great product!</b>
      </h2>
      <button class="shop-now-button mt-3 btn btn-primary">
        <span>Shop Now</span>
        <img src="../assets/icons8-e-commerce-66.png" alt="Shop Now!" />
      </button>
    </div>

    <div class="img-container">
      <img
        src="../assets/Niche service marketplace-amico.svg"
        alt="Success Starts with a Great Product"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>

<style scoped>
button span {
  font-weight: 500;
}
#text-content {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-content: space-around;
}
h1 {
  color: #0c9cda;
  font-weight: bold;
}
h2 {
  color: #707070;
  width: 50%;
  font-weight: 100;
}
.container {
  align-self: center;
  place-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  text-align: left;
  height: 80% !important;
}
.container img {
  width: 100%;
  height: 100%;
}

.shop-now-button:hover {
  background-color: #007bff;
}

.img-container {
  width: 40%;
  height: 50%;
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
