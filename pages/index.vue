<template>
  <div>
    <div class="row">
      <div class="col">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://as01.epimg.net/deporteyvida/imagenes/2018/07/25/portada/1532534810_283215_1532534923_noticia_normal.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://static-b.walac.pe/wp-content/uploads/2020/03/Algarrobina-1.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://dummyimage.com/855x365/1443ff/fff"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div class="container mt-3"></div>
    <div class="container mt-3">
      <div class="row justify-content-center">
        <div class="card text-center blockquote" style="width: 80%;background-color:#F6F4EC;">
          <div class="card-body">
            <h5 class="card-title">Sobre Natura S.A.</h5>
            <p class="card-text">
              Nosotros
              Es una empresa productora y comercializadora de productos agroindustriales del Perú, que comercializa y distribuye sus productos a nivel nacional e internacional.
            </p>
            <a href="#" class="btn btn-success">Nosotros</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-sm">
          <!-- <div class="card" style="background-color:#F6F4EC;"> -->
          <div class="card-header bg-success text-white text-uppercase">
            <i class="fa fa-star" /> Productos destacados
          </div>
          <div class="card-body">
            <div class="row">
              <div v-for="product in products" :key="product.id" class="col-sm-6 mb-3">
                <div class="card" style="background-color:#F6F4EC;">
                  <img class="card-img-top" :src="product.img" alt="Card image cap" />
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="product.html" title="View Product">{{ product.name }}</a>
                    </h4>
                    <p class="card-text">{{ product.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3 justify-content-center">
              <a href="#" class="btn btn-success">Ver Productos</a>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row justify-content-center">
        <div class="card" style="width:80%">
          <form class="text-center border border-light p-5" action="#!">
            <p class="h4 mb-4">Formulario de Contacto</p>

            <!-- Name -->
            <input
              id="defaultContactFormName"
              type="text"
              class="form-control mb-4"
              placeholder="Name"
            />

            <!-- Email -->
            <input
              id="defaultContactFormEmail"
              type="email"
              class="form-control mb-4"
              placeholder="E-mail"
            />

            <!-- Subject -->
            <label>Subject</label>

            <!-- Message -->
            <div class="form-group">
              <textarea
                id="exampleFormControlTextarea2"
                class="form-control rounded-0"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>

            <!-- Copy -->
            <div class="custom-control custom-checkbox mb-4">
              <input id="defaultContactFormCopy" type="checkbox" class="custom-control-input" />
              <label
                class="custom-control-label"
                for="defaultContactFormCopy"
              >Enviarme una copia de este mensaje</label>
            </div>

            <!-- Send button -->
            <button class="btn btn-success btn-block" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Producto 1',
          description:
            'Optio quasi sed perferendis esse voluptatum minus modi in. Quia error atque quia quidem voluptatem ea. Sit quis omnis voluptas quis commodi temporibus vel autem eius.',
          img:
            'https://www.ecestaticos.com/image/clipping/557/418/634a5bae879ca7fb428f5bbc12dfe40c/lo-que-debes-saber-antes-de-mezclar-dos-aceites-para-freir.jpg',
        },
        {
          id: 1,
          name: 'Producto 1',
          description:
            'Optio quasi sed perferendis esse voluptatum minus modi in. Quia error atque quia quidem voluptatem ea. Sit quis omnis voluptas quis commodi temporibus vel autem eius.',
          img:
            'https://www.ecestaticos.com/image/clipping/557/418/634a5bae879ca7fb428f5bbc12dfe40c/lo-que-debes-saber-antes-de-mezclar-dos-aceites-para-freir.jpg',
        },
        {
          id: 1,
          name: 'Producto 1',
          description:
            'Optio quasi sed perferendis esse voluptatum minus modi in. Quia error atque quia quidem voluptatem ea. Sit quis omnis voluptas quis commodi temporibus vel autem eius.',
          img:
            'https://www.ecestaticos.com/image/clipping/557/418/634a5bae879ca7fb428f5bbc12dfe40c/lo-que-debes-saber-antes-de-mezclar-dos-aceites-para-freir.jpg',
        },
        {
          id: 1,
          name: 'Producto 1',
          description:
            'Optio quasi sed perferendis esse voluptatum minus modi in. Quia error atque quia quidem voluptatem ea. Sit quis omnis voluptas quis commodi temporibus vel autem eius.',
          img:
            'https://www.ecestaticos.com/image/clipping/557/418/634a5bae879ca7fb428f5bbc12dfe40c/lo-que-debes-saber-antes-de-mezclar-dos-aceites-para-freir.jpg',
        },
      ],
    };
  },
};
</script>

<style></style>
