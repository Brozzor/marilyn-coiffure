<template>
  <section id="appointment" class="container make-appointment">
    <div class="row">
      <h2 class="heading-title">Prendre un rendez vous</h2>
      <div v-if="errorForm" class="alert-error">
        <p>{{ errorForm }}</p>
      </div>
      
      <div class="appointment-header">
        <div class="appointment-cell" @click="nbStep = 1">
          <div class="appointment-inner" :class="{ current: nbStep == 1 }">
            <span>01</span>
            <p>Details</p>
          </div>
        </div>
        <div class="appointment-cell" @click="nbStep = 2">
          <div class="appointment-inner" :class="{ current: nbStep == 2 }">
            <span>02</span>
            <p>Choisir un service</p>
          </div>
        </div>
        <div class="appointment-cell" @click="nbStep = 3">
          <div class="appointment-inner" :class="{ current: nbStep == 3 }">
            <span>03</span>
            <p>Choisir une date</p>
          </div>
        </div>
        <div class="appointment-cell" @click="nbStep = 4">
          <div class="appointment-inner" :class="{ current: nbStep == 4 }">
            <span>04</span>
            <p>Finis</p>
          </div>
        </div>
      </div>
      <div
        class="appointment-form tab-content2 clearfix"
        :class="{ current: nbStep == 1 }"
      >
        <p>01: Veuillez remplir les détails</p>
        <div class="appointment-form-wrapper clearfix">
          <div class="form-field">
            <label>Nom/Prénom</label>
            <input type="text" name="name" v-model="form.name" />
          </div>
          <div class="form-field">
            <label>Email</label>
            <input type="email" name="email" v-model="form.mail" />
          </div>
          <div class="form-field">
            <label>Numéro de téléphone</label>
            <input type="text" name="mobile" v-model="form.mobile" />
          </div>
          <div class="form-field" style="width: 65%">
            <label>Rue</label>
            <input type="text" v-model="form.street" />
          </div>
          <div class="form-field" style="width: 25%">
            <label>Ville</label>
            <input type="text" v-model="form.city" />
          </div>
          <div class="form-field" style="width: 10%">
            <label>Code postal</label>
            <input type="text" v-model="form.zip" />
          </div>

          <div class="form-field submit-field">
            <input
              type="submit"
              name="submit"
              @click="nbStep++"
              value="suivant"
            />
          </div>
        </div>
      </div>
      <div
        class="appointment-form tab-content2 clearfix"
        :class="{ current: nbStep == 2 }"
      >
        <p>02: Choisir un service</p>
        <div class="appointment-form-wrapper clearfix">
          <div class="form-field full">
            <label>Ecrivez ce que vous désirez</label>
            <textarea v-model="form.comment"></textarea>
          </div>
          <div class="form-field submit-field">
            <input
              type="submit"
              name="submit"
              @click="nbStep--"
              value="précédent"
            />
            <input
              type="submit"
              name="submit"
              @click="nbStep++"
              value="suivant"
            />
          </div>
        </div>
      </div>
      <div
        class="appointment-form tab-content2 clearfix"
        :class="{ current: nbStep == 3 }"
      >
        <p>03: Choisir une préférences de rendez vous</p>
        <div class="appointment-form-wrapper clearfix">
          <div>
            <div class="form-field" style="float: inherit">
              <label for="day">Le jour </label>
              <Datepicker
                id="day"
                :monday-first="true"
                :language="fr"
                :disabled-dates="disabledDates"
                v-model="form.reservation"
              ></Datepicker>
            </div>
            <div class="form-field" style="float: inherit">
              <label>L'horaire</label>
              <select v-model="form.timetables">
                <option value="start_morning">Début de matinée</option>
                <option value="end_morning">Fin de matinée</option>
                <option value="lunch">Déjeuner</option>
                <option value="start_afternoon">Début d'après-midi</option>
                <option value="end_afternoon">Fin d'après-midi</option>
              </select>
            </div>
          </div>

          <em class="info-date">
            Après avoir confirmer votre demande vous serez recontactez dans
            moins de 24h (jours ouvrés) pour convenir de l'horaire du rendez
            vous
          </em>
          <div class="form-field submit-field">
            <input
              type="submit"
              name="submit"
              @click="nbStep--"
              value="précédent"
            />
            <input
              type="submit"
              name="submit"
              style="max-width: 160px"
              @click="sendReservation()"
              value="Envoyez ma demande"
            />
          </div>
        </div>
      </div>

      <div
        class="appointment-form tab-content2 clearfix"
        :class="{ current: nbStep == 4 }"
      >
        <p>Bravo</p>
        <p>Votre demande a été envoyer avec succès nous allons vous recontacter au plus vite</p>
        
      </div>
    </div>
  </section>
</template>

<script>
import { fr } from 'vuejs-datepicker/dist/locale'
import Datepicker from 'vuejs-datepicker'
import { mapActions } from 'vuex'

export default {
  name: 'Appointment',
  components: {
    Datepicker,
    mapActions
  },
  data() {
    return {
      nbStep: 1,
      fr: fr,
      disabledDates: {
        days: [0],
      },
      form: {
        name: '',
        mail: '',
        mobile: '',
        street: '',
        city: '',
        zip: '',
        comment: '',
        reservation: new Date(),
        timetables: ''
      },
      errorForm: ""
    }
  },
  methods: {
    ...mapActions({ reqReservation: 'booking/booking' }),
    async sendReservation() {
      let temp = this.form.reservation;
      this.form.reservation = parseInt(this.form.reservation.getTime() / 1000);
      this.form.mobile = parseInt(this.form.mobile);
      const ret = await this.reqReservation(this.form)
      this.form.reservation = temp;
      if (ret.error) {
        this.errorForm = ret.error
      } else {
        this.nbStep = 4;
        this.errorForm = ""
      }
      return false
    },
  },
}
</script>