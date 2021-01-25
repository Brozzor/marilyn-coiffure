<template>
  <!--Statistics section -->
  <section class="container counter-banner">
    <div class="row">
      <div class="table">
        <div class="table-cell">
          <div class="counter-wrapper">
            <div class="counter-box">
              <div class="counter-img">
                <img src="images/ic1.png" alt="" />
              </div>
              <div class="counter-text">
                <h5 class="count">36</h5>
                <p>Années d'expériences</p>
              </div>
            </div>
            <div class="counter-box">
              <div class="counter-img">
                <img src="images/ic2.png" alt="" />
              </div>
              <div class="counter-text">
                <h5 class="count">+50000</h5>
                <p>Coupes réalisées</p>
              </div>
            </div>
            <div class="counter-box">
              <div class="counter-img">
                <img src="images/ic3.png" alt="" />
              </div>
              <div class="counter-text">
                <h5 class="count">+4000</h5>
                <p>Clients satisfait</p>
              </div>
            </div>
            <div class="counter-box">
              <div class="counter-img">
                <img src="images/ic4.png" alt="" />
              </div>
              <div class="counter-text">
                <h5 class="count">5</h5>
                <p>Formations par an</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
//import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'Statistique',
  components: { VueSlickCarousel },
  data() {
    return {
      carousel: {
        dots: true,
        infinite: true,
        initialSlide: 2,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
    }
  },
}
</script>

<style>
</style>