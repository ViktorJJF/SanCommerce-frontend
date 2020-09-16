<template>
  <!-- Footer Section Begin -->
  <footer class="footer spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="footer__about">
            <div class="footer__about__logo">
              <a href="./index.html">
                <img src="img/logo.png" alt />
              </a>
            </div>
            <ul>
              <li>Address: 60-49 Road 11378 New York</li>
              <li>Phone: +65 11.188.888</li>
              <li>Email: hello@colorlib.com</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
          <div class="footer__widget">
            <h6>Enlaces De Interés</h6>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">About Our Shop</a>
              </li>
              <li>
                <a href="#">Secure Shopping</a>
              </li>
              <li>
                <a href="#">Delivery infomation</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Our Sitemap</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Who We Are</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Innovation</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="footer__widget">
            <h6>Registrate en nuestro boletín</h6>
            <p>Obtén correos con nuestros últimos descuentos</p>
            <form action="#">
              <input type="text" placeholder="Ingresa tu correo" />
              <button type="submit" class="site-btn">Suscribirse</button>
            </form>
            <div class="footer__widget__social">
              <a href="#">
                <i class="fa fa-facebook" />
              </a>
              <a href="#">
                <i class="fa fa-instagram" />
              </a>
              <a href="#">
                <i class="fa fa-twitter" />
              </a>
              <a href="#">
                <i class="fa fa-pinterest" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="footer__copyright">
            <div class="footer__copyright__text">
              <p>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy;
                {{ new Date().getFullYear() }} Todos los derechos reservados
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              </p>
            </div>
            <div class="footer__copyright__payment">
              <img src="img/payment-item.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Section End -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
