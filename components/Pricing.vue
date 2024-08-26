<template>
  <section id="pricing" class="container our-pricing">
    <div class="row">
      <h2 class="heading-title">Mes tarifs</h2>
      <h3 class="gender-text">Hommes</h3>
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

      <h3 class="gender-text" style="margin-top: 20px">Femmes</h3>
      <div class="our-pricing-wrapper clearfix">
        <div v-for="item in pricingWomen" :key="item.id" class="our-price-box">
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
                  <div v-if="item.price" class="start-price">
                    <span>À partir</span>
                    <b>{{ item.price }} €</b>
                  </div>
                  <div v-else class="start-price">
                    <span class="quote">Sur devis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 class="gender-text" style="margin-top: 20px">Enfants</h3>
      <div class="our-pricing-wrapper clearfix">
        <div v-for="item in pricingChildren" :key="item.id" class="our-price-box">
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
                  <div v-if="item.price" class="start-price">
                    <span>À partir</span>
                    <b>{{ item.price }} €</b>
                  </div>
                  <div v-else>
                    <span>Sur devis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <em style="color: #8a8682; font-size: 11px;">Les prix peuvent être différents en fonction de la longueur des cheveux et des produits utilisés.</em>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Pricing',
  data() {
    return {
      pricingMen: [
        {
          id: 1,
          price: 17,
          title: 'Forfait coupe',
          comment: "sans shampoing",
          img: 'images/price-ic1.png',
          altImg: 'ciseaux Marilyn Coiffure',
        },
        {
          id: 2,
          price: 20,
          title: 'Forfait coupe',
          comment: "shampoing, séchage inclus",
          img: 'images/price-ic1.png',
          altImg: 'ciseaux Marilyn Coiffure',
        },
        {
          id: 3,
          price: 5,
          title: 'Taille Barbe',
          comment: "Sans soin",
          img: 'images/price-ic1.png',
          altImg: 'ciseaux Marilyn Coiffure',
        },
        {
          id: 4,
          price: 25,
          title: 'Taille Barbe couleur',
          comment: "shampoing, soins, coloration et séchage inclus",
          img: 'images/price-ic1.png',
          altImg: 'ciseaux Marilyn Coiffure',
        },
      ],
      pricingWomen: [
        {
          id: 1,
          price: 25,
          title: 'Forfait coupe',
          comment: "sans shampoing",
          img: 'images/price-ic1.png',
          altImg: 'ciseaux Marilyn Coiffure',
        },
        {
          id: 2,
          price: 25,
          title: 'Shampoing brush',
          comment: "Shampoing, soin et brush inclus",
          img: 'images/price-ic1.png',
          altImg: 'ciseaux Marilyn Coiffure',
        },
        {
          id: 3,
          price: 35,
          title: 'Forfait coupe',
          comment: "shampoing, conditionneur, brush inclus",
          img: 'images/price-ic1.png',
          altImg: 'ciseaux Marilyn Coiffure',
        },
        {
          id: 4,
          price: 60,
          title: 'Forfait coupe couleur',
          comment: "shampoing, soin, brush inclus",
          img: 'images/price-ic4.png',
          altImg: 'produits Marilyn Coiffure',
        },
        {
          id: 5,
          price: 65,
          title: 'Forfait coupe mèches',
          comment: "shampoing, soin, brush inclus",
          img: 'images/price-ic4.png',
          altImg: 'produits Marilyn Coiffure',
        },
        {
          id: 6,
          price: 55,
          title: 'Forfait couleur brush',
          comment: "shampoing, couleur et soin inclus",
          img: 'images/price-ic4.png',
          altImg: 'produits Marilyn Coiffure',
        },
        {
          id: 6,
          title: 'Lissage brésilien relax',
          comment: "Maitrise des frisottis",
          img: 'images/price-ic4.png',
          altImg: 'produits Marilyn Coiffure',
        },
        {
          id: 6,
          title: 'Lissage brésilien smooth',
          comment: "Réduction du volume",
          img: 'images/price-ic4.png',
          altImg: 'produits Marilyn Coiffure',
        },
        {
          id: 6,
          title: 'Lissage brésilien Strong',
          comment: "Effet durable dans le temps",
          img: 'images/price-ic4.png',
          altImg: 'produits Marilyn Coiffure',
        },
        {
          id: 6,
          price: 35,
          title: 'Soin détox Olaplex',
          comment: "Soin réparateur Olaplex, massage crânien inclus",
          img: 'images/price-ic4.png',
          altImg: 'produits Marilyn Coiffure',
        },
      ],
      pricingChildren: [
        {
          id: 1,
          price: 8,
          title: 'Forfait coupe 0-6 ans',
          comment: "sans shampoing",
          img: 'images/price-ic1.png',
          altImg: 'ciseaux Marilyn Coiffure',
        },
        {
          id: 2,
          price: 10,
          title: 'Forfait coupe 6-12 ans',
          comment: "sans shampoing",
          img: 'images/price-ic1.png',
          altImg: 'ciseaux Marilyn Coiffure',
        }
      ],
    }
  },
}
</script>

<style>
.quote {
	font-size: 12px!important;
}
</style>