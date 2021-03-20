<template>
  <!--Service section -->
  <section id="services" class="container our-service">
    <div class="row">
      <h2 class="heading-title">Nos services</h2>
      <div class="service-wrapper clearfix">
        <VueSlickCarousel v-bind="carousel">
          <div class="service-block service-middle">
            <div class="service-block-inner service-1-hover">
              <div class="service-block-image">
                <div class="service-wrap-img">
                  <img src="images/service-img.jpg" alt="" />
                </div>
                <div class="service-block-image-wrap">
                  <div class="service-ic">
                    <img src="images/classic-cut.png" alt="" />
                  </div>
                  <h6>Coupe de cheveux</h6>
                  <p>
                    Peu importe la taille<br />
                    ou la forme de votre coiffure<br />
                    nous réaliserons la coupe<br />
                    de vos rêves
                  </p>
                  <a href="#" class="read-more-btn">tarifs</a>
                </div>
              </div>
            </div>
          </div>
          <div class="service-block service-middle">
            <div class="service-block-inner service-2-hover">
              <div class="service-block-image">
                <div class="service-wrap-img">
                  <img src="images/service-img.jpg" alt="" />
                </div>
                <div class="service-block-image-wrap">
                  <div class="service-ic">
                    <img
                      src="img/service/cake.svg"
                      style="color: #917758"
                      width="87px"
                      alt=""
                    />
                  </div>
                  <h6>Événement important</h6>
                  <p>
                    Marilyn s'occupera<br />
                    de tous vos événements importants<br />
                    rester beau en toute circonstances<br />
                    <br />
                  </p>
                  <a href="#pricing" class="read-more-btn">tarifs</a>
                </div>
              </div>
            </div>
          </div>
          <div class="service-block service-middle">
            <div class="service-block-inner service-6-hover">
              <div class="service-block-image">
                <div class="service-wrap-img">
                  <img src="images/service-img.jpg" alt="" />
                </div>
                <div class="service-block-image-wrap">
                  <div class="service-ic">
                    <img src="images/razoe-shaver.png" alt="" />
                  </div>
                  <h6>Taillage de barbe</h6>
                  <p>
                    Besoin d'un entretien<br />
                    pour votre barbe ? <br />
                    Profiter d'une grande expérience<br />
                    pour le taillage de celle-ci
                  </p>
                  <a href="#pricing" class="read-more-btn">tarifs</a>
                </div>
              </div>
            </div>
          </div>

          <div class="service-block service-middle">
            <div class="service-block-inner service-1-hover">
              <div class="service-block-image">
                <div class="service-wrap-img">
                  <img src="images/service-img.jpg" alt="" />
                </div>
                <div class="service-block-image-wrap">
                  <div class="service-ic">
                    <img src="images/classic-cut.png" alt="" />
                  </div>
                  <h6>Coupe de cheveux</h6>
                  <p>
                    Peu importe la taille<br />
                    ou la forme de votre coiffure<br />
                    nous réaliserons la coupe<br />
                    de vos rêves
                  </p>
                  <a href="#pricing" class="read-more-btn">Tarifs</a>
                </div>
              </div>
            </div>
          </div>
          <div class="service-block service-middle active">
            <div class="service-block-inner service-5-hover">
              <div class="service-block-image">
                <div class="service-wrap-img">
                  <img src="images/service-img.jpg" alt="" />
                </div>
                <div class="service-block-image-wrap">
                  <div class="service-ic">
                    <img src="images/clipper-cut.png" alt="" />
                  </div>
                  <h6>Taillage de barbe</h6>
                  <p>
                    Besoin d'un entretien<br />
                    pour votre barbe ? <br />
                    Profiter d'une grande expérience<br />
                    pour le taillage de celle-ci
                  </p>
                  <a href="#pricing" class="read-more-btn">tarifs</a>
                </div>
              </div>
            </div>
          </div>
          <div class="service-block service-middle">
            <div class="service-block-inner service-6-hover">
              <div class="service-block-image">
                <div class="service-wrap-img">
                  <img src="images/service-img.jpg" alt="" />
                </div>
                <div class="service-block-image-wrap">
                  <div class="service-ic">
                    <img src="img/service/hair-dryer.svg" width="98px" alt="" />
                  </div>
                  <h6>Brushing</h6>
                  <p>
                    Profiter d'un brushing<br />
                    parfait et sentez-vous <br />
                    belle tout au long de votre soirée<br />
                    <br />
                  </p>
                  <a href="#" class="read-more-btn">tarifs</a>
                </div>
              </div>
            </div>
          </div>
          <template #prevArrow="" hidden>
            <div class="custom-arrow"></div>
          </template>
          <template #nextArrow="" hidden>
            <div class=""></div>
          </template>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import '@/assets/css/vue-slick-carousel-theme.css'
export default {
  name: 'Service',
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
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              "arrows": false
            },
          },
        ],
      },
    }
  },
}
</script>

<style>
</style>