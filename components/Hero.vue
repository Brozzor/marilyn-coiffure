<template>
  <!--banner slider section -->
  <section id="home" class="banner-slider-initial">
    <!--slider-->
    <div class="banner-slide-show-wrapper">
      <div class="banner-slider" id="banner-slide-show">
        <div class="banner-slider-item">
          <div
            class="banner-slider-item-img"
            style="background-image: url(images/banner-03.jpg)"
          >
            <div class="banner-text">
              <span>Coiffeuse/Barbière à domicile</span>
              <h1>Marilyn Coiffure</h1>
              <p>Prenez rendez vous avec Marilyn en seulement deux clics, profitez d'une experience de salon chez vous</p>
              <span class="much-img"
                ><img src="images/much-img.png" alt=""
              /></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Center Navigation -->
    <div class="container slider-header">
      <div class="row">
        <!--new header-->
        <div class="header">
          <div class="mobile-ic" @click="isActive = !isActive">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="responsive-menu" :class="{'display-menu': isActive}">
            <ul>
              <li class="active"><a href="#home" title="Home">Accueil</a></li>
              <li><a href="#about" title="Aboutus">A propos</a></li>
              <li><a href="#services" title="Services">Services</a></li>
              <li>
                <a href="#testimonial" title="Testimonials">Témoignages</a>
              </li>
              <li><a href="#our-team" title="Our Team">L'équipe</a></li>
              <li><a href="#pricing" title="Pricing">Tarifs</a></li>
              <li>
                <a href="#appointment" title="Appointment">Rendez vous</a>
              </li>
              <li><a href="#gallery" title="Gallery">Galerie</a></li>

            </ul>
          </div>
          <div class="table-cell">
            <ul style="text-align: center;">
              <li class="active"><a href="#home" title="Home">Accueil</a></li>
              <li><a href="#about" title="Aboutus">A propos</a></li>
              <li><a href="#services" title="Services">Services</a></li>
              <li>
                <a href="#testimonial" title="Testimonials">Témoignages</a>
              </li>
              
            </ul>
          </div>
          <div class="logo">
            <a href="index.html" title="Barber Shop"
              ><img src="img/logo235.png" alt="logo marilyn coiffure"
            /></a>
          </div>
          <div class="table-cell">
            <ul style="text-align: center;">
              <li><a href="#pricing" title="Pricing">Tarifs</a></li>
              <li>
                <a href="#appointment" title="Appointment">Rendez vous</a>
              </li>
              <li><a href="#gallery" title="Gallery">Galerie</a></li>
              <li><a href="#our-team" title="Our Team">L'équipe</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data(){
    return {
      isActive: false
    }
  }
}
</script>

<style>
.display-menu {
  display: block;
}
</style>