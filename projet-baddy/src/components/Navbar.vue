<template>
  <nav id="nav" class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="../assets/trendify mode.png" id="logo"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav me-5" id="nav-links">
          <router-link class="nav-link active" aria-current="page" to="/"
            ><a>Home</a></router-link
          >
          <router-link class="nav-link" to="/product">Products</router-link>
          <router-link class="nav-link" to="/purchase">purchase</router-link>
          <router-link class="nav-link" to="/Profile">Profile</router-link>
          <router-link class="nav-link" to="/review">Reviews</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar-component",
};
</script>

<style scoped>
#logo {
  width: 110px;
  height: 60px;
}
#nav {
  font-weight: bold;
  font-size: 20px;
  background-color: #6699cc;
}
.nav-link {
  color: white !important;
  font-size: 15px !important;
}
#navbarNavAltMarkup {
  justify-content: flex-end;
  font-size: 26px;
}
</style>
