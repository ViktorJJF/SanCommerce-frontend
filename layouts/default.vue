<template>
  <div>
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
      { src: '/js/owl.carousel.min.js', body: true },
      // { src: '/js/main.js', body: true },
    ],
  },
};
</script>

<style></style>
