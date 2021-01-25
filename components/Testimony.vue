<template>
  <!--Testimonial section -->
  <section id="testimonial" class="container client-testimonial">
    <div class="row">
      <h2 class="heading-title">+4000 clients satisfait</h2>
      <div >
        <VueSlickCarousel class="testimonial-wrapper" v-bind="carousel" >
        <div class="testimonial-main">
          <div class="testimonial-box">
            <p>
              Mon conjoint y va depuis plusieurs années et mon fils depuis tout petit on est jamais déçu et Marilyn est très aimable et gentille je recommande les yeux fermés
            </p>
            <span><b>Marco polo</b></span>
          </div>
          <div class="test-img">
            <img src="images/testi-img.png" alt="" />
          </div>
        </div>
        <div class="testimonial-main">
          <div class="testimonial-box">
            <p>
              J'y ai été pour la première fois aujourd'hui :  coiffeuse très sympas, minutieux, coupe propre, dégradé impeccable ! Coupe qui répond parfaitement à la demande du client et ce, pour un prix minime !
Je recommande totalement ! 👍
            </p>
            <span><b>Didier raoult</b></span>
          </div>
          <div class="test-img">
            <img src="images/testi-img.png" alt="" />
          </div>
        </div>
        </VueSlickCarousel>
      </div>

    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'Testimony',
  components: { VueSlickCarousel },
  data() {
    return {
      carousel: {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,

      },
    }
  },
}
</script>

<style>
.arrow {
  font-size: 65px;
  font-weight: bold;
  width: 17px;
  height: 9px;
  padding: 2px 0px;
  color: white;
  text-align: center;
  display: inline-block;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin-top: -49px;
  transition: all 0.3s ease;
}

.arrow:hover {
  color: #121212;
  background: white;
  cursor: pointer;
}
.arrow-left {
  left: -23px;
  transform: translateY(-50%);
}

.arrow-right {
  right: -23px;
  transform: translateY(-50%);
}
</style>