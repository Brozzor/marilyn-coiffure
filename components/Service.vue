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
                  <h6>Classic Hair Cut</h6>
                  <p>
                    Lorem Ipsum is simply<br />
                    dummy text of the printinorem<br />
                    Ipsum is simply mmy text of the printing<br />
                    and typeseing industry Lorem
                  </p>
                  <a href="#" title="read more" class="read-more-btn"
                    >read more</a
                  >
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
                    <img src="images/clipper-cut.png" alt="" />
                  </div>
                  <h6>Clipper Cut</h6>
                  <p>
                    Lorem Ipsum is simply<br />
                    dummy text of the printinorem<br />
                    Ipsum is simply mmy text of the printing<br />
                    and typeseing industry Lorem
                  </p>
                  <a href="#" title="read more" class="read-more-btn"
                    >read more</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="service-block service-middle">
            <div class="service-block-inner service-3-hover">
              <div class="service-block-image">
                <div class="service-wrap-img">
                  <img src="images/service-img.jpg" alt="" />
                </div>
                <div class="service-block-image-wrap">
                  <div class="service-ic">
                    <img src="images/razoe-shaver.png" alt="" />
                  </div>
                  <h6>Razoe Shaver</h6>
                  <p>
                    Lorem Ipsum is simply<br />
                    dummy text of the printinorem<br />
                    Ipsum is simply mmy text of the printing<br />
                    and typeseing industry Lorem
                  </p>
                  <a href="#" title="read more" class="read-more-btn"
                    >read more</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="service-block service-middle">
            <div class="service-block-inner service-4-hover">
              <div class="service-block-image">
                <div class="service-wrap-img">
                  <img src="images/service-img.jpg" alt="" />
                </div>
                <div class="service-block-image-wrap">
                  <div class="service-ic">
                    <img src="images/classic-cut.png" alt="" />
                  </div>
                  <h6>Classic Hair Cut</h6>
                  <p>
                    Lorem Ipsum is simply<br />
                    dummy text of the printinorem<br />
                    Ipsum is simply mmy text of the printing<br />
                    and typeseing industry Lorem
                  </p>
                  <a href="#" title="read more" class="read-more-btn"
                    >read more</a
                  >
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
                  <h6>Clipper Cut</h6>
                  <p>
                    Lorem Ipsum is simply<br />
                    dummy text of the printinorem<br />
                    Ipsum is simply mmy text of the printing<br />
                    and typeseing industry Lorem
                  </p>
                  <a href="#" title="read more" class="read-more-btn"
                    >read more</a
                  >
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
                  <h6>Razoe Shaver</h6>
                  <p>
                    Lorem Ipsum is simply<br />
                    dummy text of the printinorem<br />
                    Ipsum is simply mmy text of the printing<br />
                    and typeseing industry Lorem
                  </p>
                  <a href="#" title="read more" class="read-more-btn"
                    >read more</a
                  >
                </div>
              </div>
            </div>
          </div>
          <template #prevArrow="" hidden>
            <div class="custom-arrow">

            </div>
          </template>
          <template #nextArrow="" hidden>
            <div class="">

            </div>
          </template>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
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
      },
    }
  },
}
</script>

<style>
</style>