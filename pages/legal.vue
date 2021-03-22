<template>
    <div style="background-color: #917758">
    
    <div class="container-legal center" filter-color="black" >
                    <div class="card" style="margin-bottom: 15rem;margin-top: 5rem;">
                        <div style="margin-left: auto; margin-right: auto;text-align: center; margin-bottom: 50px;">
                            <img src="/img/logo235.png">
                            <h1>Mentions Légales</h1>
                        </div>
                        
                        <div>
                            <p>Date de mise à jour : 22/03/2021</p>
                            <h3 style="color: black" class="mt-5">ÉDITEUR DU SITE :</h3>
                            <p><b>Propriétaire</b>: BUISSON MARILYN</p>
                            <p>1 RUE JULES ABONNEAU</p>
                            <p>86440 MIGNE-AUXANCES</p>
                            <p><b>Téléphone</b>: 07 60 78 94 85</p>
                            <p><b>Addresse électronique</b>: contact@marilyn-coiffure.fr</p>
                            <p><b>Siret</b>: 894 663 558 00019</p>

                            <h3 style="color: black" class="mt-5">Le site est développer par :</h3>
                            <p><b>Webmaster</b>: BUISSON ROMAIN</p>
                            <p><b>Site web </b>: <a href="https://buisson.us">https://buisson.us</a></p>

                            <h3 style="color: black" class="mt-5">Hébergement :</h3>
                            <p><b>Hébergeur </b>: Netlify</p>
                            <p>610 22nd Street, Suite 315,</p>
                            <p>San Francisco, CA 94107 </p>
                            <p><b>Site web </b>: <a href="https://www.netlify.com">https://www.netlify.com</a></p>

                            
                        </div>
                    </div>
            
        
    </div>
    <Footer></Footer>
    </div>
</template>

<script>
import '@/assets/css/styles.css'
import Footer from '~/components/Footer.vue'
export default {
    components:{
        Footer
    }
}
</script>

<style>
.container-legal{
  width: 100rem!important;

 
  display: flex;
 
  
  margin-left: auto;
  margin-right: auto;
}

.center{
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.card{
  background-color: white;
  width: auto;
  
  display: -webkit-box;
  
  display: -ms-flexbox;
  
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding: 20px;
  margin: 5px;
  
  border-radius: 2px;
}

.mt-5{
margin-top: 1.5rem;
margin-bottom: 0.5rem;
}
  
  
  
</style>