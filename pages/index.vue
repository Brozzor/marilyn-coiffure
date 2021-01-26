<template>
  <div>
    <Hero></Hero>
    <AboutUs></AboutUs>
    <Service></Service>
    <Statistique></Statistique>
    <Testimony></Testimony>
    <Team></Team>
    <Pricing></Pricing>
    <Appointment></Appointment>
    <Gallery></Gallery>

    <section class="container join-member">
      <div class="row">
        <div class="join-member-left">
          <h3>
            Vous voulez devenir client ?<br />
            Prenez rendez vous
          </h3>
        </div>
        <div class="join-member-right">
          <a
            href="#appointment"
            title="Make an appointment"
            class="read-more-btn"
            >Prendre un rendez vous</a
          >
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
import AboutUs from '~/components/AboutUs.vue'
import Appointment from '~/components/Appointment.vue'
import Footer from '~/components/Footer.vue'
import Gallery from '~/components/Gallery.vue'
import Service from '~/components/Service.vue'
import Statistique from '~/components/Statistique.vue'
import Team from '~/components/Team.vue'
import Testimony from '~/components/Testimony.vue'
import Pricing from '~/components/Pricing.vue'
import '@/assets/css/styles.css'
export default {
  components: {
    Service,
    AboutUs,
    Statistique,
    Testimony,
    Team,
    Footer,
    Appointment,
    Gallery,
    Pricing,
  },
}
</script>
