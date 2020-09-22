<template>
  <div class="bg">
    <section class="top">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/404/4d1b9949412819.Y3JvcCw0MDUsMzE3LDE4NCww.png"
              class="img-fluid"
              alt="Responsive image"
              width="160px"
            />
          </div>
          <div class="col-sm-8">
            <div class="row">
              <div class="col-sm-6 mb-3">
                <p class="h5 text-white">Urb. Aurora 1866, Tacna - Perú</p>
              </div>
              <div class="col-sm-6 mb-3">
                <p class="h5 text-white">correo@gmail.com</p>
              </div>
              <div class="col-sm-6 mb-3">
                <p class="h5 text-white">Delivery</p>
              </div>
              <div class="col-sm-6 mb-3">
                <p class="h5 text-white">CALPORT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <navbar-component />
    <Nuxt />
    <footer-component />
  </div>
</template>

<script>
import { addCustomScript } from '@/utils/utils';
export default {
  mounted() {
    if (process.browser) {
      // addCustomScript('/js/jquery-3.3.1.min.js');
      // addCustomScript('/js/bootstrap.min.js');
      // addCustomScript('/js/jquery.nice-select.min.js');
      // addCustomScript('/js/jquery-ui.min.js');
      // addCustomScript('/js/jquery.slicknav.js');
      // addCustomScript('/js/mixitup.min.js');
      // addCustomScript('/js/owl.carousel.min.js');
      addCustomScript('/js/main.js');
    }
  },
  head: {
    script: [
      { src: '/js/jquery-3.3.1.min.js', body: true },
      { src: '/js/bootstrap.min.js', body: true },
      { src: '/js/jquery.nice-select.min.js', body: true },
      { src: '/js/jquery.slicknav.js', body: true },
      { src: '/js/mixitup.min.js', body: true },
      // { src: '/js/main.js', body: true },
    ],
  },
};
</script>

<style></style>
