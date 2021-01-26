<template>
    <section id="pricing" class="container our-pricing">
      <div class="row">
        <h2 class="heading-title">Nos tarifs</h2>
        <div class="our-pricing-wrapper clearfix">
          
          <div v-for="item in pricingMen" :key="item.id" class="our-price-box">
            <div class="our-price-box-inner clearfix">
              <div class="our-price-box-left">
                <div class="our-price-ic">
                  <img :src="item.img" :alt="item.altImg" />
                </div>
                <div class="our-price-text">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.comment }}</p>
                </div>
              </div>
              <div class="our-price-box-right">
                <div class="table">
                  <div class="table-cell">
                    <div class="start-price">
                      <span>À partir</span>
                      <b>{{ item.price }} €</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Pricing',
  data(){
    return {
      pricingMen: [
        {
          id: 1,
          price: 15,
          title: "Forfait coupe ( sans shampooing )",
          img: "images/price-ic1.png",
          altImg: "ciseaux Marilyn Coiffure"
        },
        {
          id: 2,
          price: 18,
          title: "Forfait coupe ( shampooing, séchage inclus )",
          img: "images/price-ic1.png",
          altImg: "ciseaux Marilyn Coiffure"
        },
        {
          id: 3,
          price: 34,
          title: "Décoloration",
          img: "images/price-ic4.png",
          altImg: "produits Marilyn Coiffure"
        },
        {
          id: 4,
          price: 30,
          title: "Couleur fantaisie",
          img: "images/price-ic4.png",
          altImg: "produits Marilyn Coiffure"
        },

      ]
    }
  }
}
</script>