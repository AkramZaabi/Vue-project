<template>
  <nav id="nav" class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">LOGO</a>
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
          <router-link class="nav-link" to="/about"
            ><a>Products</a></router-link
          >
          <a class="nav-link" href="#">About</a>
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
