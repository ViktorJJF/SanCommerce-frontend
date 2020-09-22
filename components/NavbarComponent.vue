<template>
  <div class="container mt-3">
    <nav class="navbar navbar-expand-md bg-dark" style="background-color:#F6F4EC !important;">
      <ul class="navbar-nav m-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Inicio
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="category.html">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="product.html">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="product.html">Noticias</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contactos</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.categoriesModule.categories;
    },
    isIndex() {
      return this.$nuxt.$route.name === 'index';
    },
    activePath() {
      return this.$nuxt.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
