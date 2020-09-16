<template>
  <div>
    <!-- Header Section Begin -->
    <header class="header">
      <!-- <div class="header__top">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="header__top__left">
                <ul>
                  <li><i class="fa fa-envelope"></i> san@gmail.com</li>
                  <li>Envíos gratis desde S/.50</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="header__top__right">
                <div class="header__top__right__social">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>
                <div class="header__top__right__language">
                  <img src="img/language.png" alt="" />
                  <div>English</div>
                  <span class="arrow_carrot-down"></span>
                  <ul>
                    <li><a href="#">Spanis</a></li>
                    <li><a href="#">English</a></li>
                  </ul>
                </div>
                <div class="header__top__right__auth">
                  <a href="#"><i class="fa fa-user"></i> Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="header__logo">
              <a href="./index.html">
                <img src="img/logo.png" alt />
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <nav class="header__menu">
              <ul>
                <li :class="{active:activePath==='/'}">
                  <a href="/">Inicio</a>
                </li>
                <li :class="{active:activePath==='/tienda'}">
                  <a href="/tienda">Tienda</a>
                </li>
                <li :class="{active:activePath==='/blog'}">
                  <a href="/blog">Blog</a>
                </li>
                <li :class="{active:activePath==='/contactos'}">
                  <a href="/contactos">Contactos</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-lg-3">
            <!-- <div class="header__cart">
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-heart" />
                    <span>1</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-shopping-bag" />
                    <span>3</span>
                  </a>
                </li>
              </ul>
              <div class="header__cart__price">
                item:
                <span>$150.00</span>
              </div>
            </div>-->
          </div>
        </div>
        <div class="humberger__open">
          <i class="fa fa-bars" />
        </div>
      </div>
    </header>
    <!-- Header Section End -->

    <!-- Hero Section Begin -->
    <section class="hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="hero__categories">
              <div class="hero__categories__all">
                <i class="fa fa-bars" />
                <span>Categorías</span>
              </div>
              <ul :style="isIndex?'':'display:none;'">
                <li v-for="category in categories" :key="category.id">
                  <a href="#">{{ category.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="hero__search">
              <div class="hero__search__form">
                <form action="#">
                  <div class="hero__search__categories">
                    Todas las Categorias
                    <span class="arrow_carrot-down" />
                  </div>
                  <input type="text" placeholder="¿Qué necesitas?" />
                  <button type="submit" class="site-btn">BUSCAR</button>
                </form>
              </div>
              <div class="hero__search__phone">
                <div class="hero__search__phone__icon">
                  <i class="fa fa-phone" />
                </div>
                <div class="hero__search__phone__text">
                  <h5>+51982547562</h5>
                  <span>De 7:00am a 7:00pm</span>
                </div>
              </div>
            </div>
            <div v-if="isIndex" class="hero__item set-bg" data-setbg="img/hero/tienda.png">
              <div class="hero__text">
                <span>Nombre Tienda</span>
                <h2 id="banner-title">
                  Productos
                  <br />100% Naturales
                </h2>
                <p>Delivery gratis</p>
                <a href="/tienda" class="primary-btn">COMPRAR AHORA</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Hero Section End -->
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
