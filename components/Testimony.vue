<template>
  <!--Testimonial section -->
  <section id="testimonial" class="container client-testimonial">
    <div class="row">
      <h2 class="heading-title">+4000 clients satisfaits</h2>
      <div >
        <client-only><VueSlickCarousel class="testimonial-wrapper" v-bind="carousel" >
        <div class="testimonial-main">
          <div class="testimonial-box">
            <p>
              Coiffeuse sympa et pro,  coiffure à domicile très pratique. Pour moi c'est la solution idéale!
            </p>
            <span><b>L Bernard</b></span>
          </div>
         <!--
          <div class="test-img">
            <img src="images/testi-img.png" alt="Photo client satisfait Marilyn Coiffure" />
          </div>-->
        </div>
        <div class="testimonial-main">
          <div class="testimonial-box">
            <p>
              Couleur et mèches très réussies, avec effet patiné et naturel. <br>Et ce qui prouve que c'est réussi, c'est quand les proches font des compliments en voyant ma nouvelle coiffure. 👍Je recommande Marilyn pour sa bonne humeur aussi
            </p>
            <span><b>Sandrine Duvigneaux</b></span>
          </div>
          <!--
          <div class="test-img">
            <img src="images/testi-img.png" alt="Photo client satisfait Marilyn Coiffure" />
          </div>-->
        </div>
        </VueSlickCarousel></client-only>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimony',
  components: {
    VueSlickCarousel: () => process.client ? import('vue-slick-carousel') : Promise.resolve({}),
  },
  data() {
    return {
      carousel: {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 480,
            settings: {
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