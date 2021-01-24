<template>
<section id="appointment" class="container make-appointment">
      <div class="row">
        <h2 class="heading-title">Prendre un rendez vous</h2>
        <div class="appointment-header">
          <div 
          class="appointment-cell"
          @click="nbStep = 1"
          >
            <div 
            class="appointment-inner" 
            :class="{'current': nbStep == 1}"
            >
              <span>01</span>
              <p>Details</p>
            </div>
          </div>
          <div 
          class="appointment-cell"
          @click="nbStep = 2"
          >
            <div 
            class="appointment-inner" 
            :class="{'current': nbStep == 2}"
            >
              <span>02</span>
              <p>Choisir un service</p>
            </div>
          </div>
          <div 
          class="appointment-cell"
          @click="nbStep = 3"
          >
            <div 
            class="appointment-inner" 
            :class="{'current': nbStep == 3}"
            >
              <span>03</span>
              <p>Choisir une date</p>
            </div>
          </div>
          <div 
          class="appointment-cell"
          @click="nbStep = 4"
          >
            <div 
            class="appointment-inner" 
            :class="{'current': nbStep == 4}"
            >
              <span>04</span>
              <p>Finis</p>
            </div>
          </div>
        </div>
        <div class="appointment-form tab-content2 clearfix"
         :class="{'current': nbStep == 1}"
         >
          <p>01: Veuillez remplir les détails</p>
          <div class="appointment-form-wrapper clearfix">
            <div class="form-field">
              <label>Nom/Prénom</label>
              <input type="text" name="name" />
            </div>
            <div class="form-field">
              <label>Email</label>
              <input type="email" name="email" />
            </div>
            <div class="form-field">
              <label>Numéro de téléphone</label>
              <input type="tel" name="mobile" />
            </div>
            <div class="form-field" style="width: 65%">
              <label>Rue</label>
              <input type="text" />
            </div>
            <div class="form-field" style="width: 25%">
              <label>Ville</label>
              <input type="text" />
            </div>
            <div class="form-field" style="width: 10%">
              <label>Code postal</label>
              <input type="text" />
            </div>
            
            
            <div class="form-field full">
              <label>Comments</label>
              <textarea></textarea>
            </div>
            <div class="form-field submit-field">
              <input type="submit" name="submit" @click="nbStep++" value="suivant" />
            </div>
          </div>
        </div>
        <div class="appointment-form tab-content2 clearfix"
         :class="{'current': nbStep == 2}"
         >
          <p>02: Select Services</p>
          <div class="appointment-form-wrapper clearfix">
            <div class="form-field">
              <label>Service Name</label>
              <input type="text" name="service name" />
            </div>
            <div class="form-field">
              <label>Technisian</label>
              <input type="text" name="Technisian" />
            </div>
            <div class="form-field">
              <label>Service Name</label>
              <input type="text" name="Service Name" />
            </div>
            <div class="form-field calender">
              <label>Technisian</label>
              <input type="text" name="Technisian" />
            </div>
            <div class="form-field">
              <label>Service Name</label>
              <input type="text" name="Service Name" />
            </div>
            <div class="form-field">
              <label>Technisian</label>
              <input type="email" name="Technisian" />
            </div>
            <div class="form-field">
              <label>Service Name</label>
              <input type="text" name="Service Name" />
            </div>
            <div class="form-field calender">
              <label>Technisian</label>
              <input type="text" name="Technisian" />
            </div>
            <div class="form-field">
              <label>Service Name</label>
              <input type="text" name="Service Name" />
            </div>
            <div class="form-field">
              <label>Technisian</label>
              <input type="email" name="Technisian" />
            </div>
            <div class="form-field">
              <label>Service Name</label>
              <input type="text" name="Service Name" />
            </div>
            <div class="form-field calender">
              <label>Technisian</label>
              <input type="text" name="Technisian" />
            </div>
            <div class="form-field submit-field">
              <input type="submit" name="submit" @click="nbStep++" value="suivant" />
            </div>
          </div>
        </div>
        <div class="appointment-form tab-content2 clearfix"
         :class="{'current': nbStep == 3}"
         >
          <p>03: Schedule Your Time</p>
          <div class="appointment-form-wrapper clearfix">
            <div class="form-field">
              <label>Name</label>
              <input type="text" name="Name" />
            </div>
            <div class="form-field">
              <label>Email</label>
              <input type="email" name="Email" />
            </div>
            <div class="form-field">
              <label>Phone</label>
              <input type="text" name="Phone" />
            </div>
            <div class="form-field calender">
              <label>Date of Birth</label>
              <input type="text" name="dob" />
            </div>
            <div class="form-field full">
              <label>Comments</label>
              <textarea></textarea>
            </div>
            <div class="form-field submit-field">
              <input type="submit" name="submit" @click="nbStep++" value="suivant" />
            </div>
          </div>
        </div>

        <div class="appointment-form tab-content2 clearfix"
         :class="{'current': nbStep == 4}"
         >
          <p>04: Thank You Message</p>
          <div class="appointment-form-wrapper clearfix">
            <div class="form-field">
              <label>Name</label>
              <input type="text" name="Name" />
            </div>
            <div class="form-field">
              <label>Email</label>
              <input type="email" name="Email" />
            </div>
            <div class="form-field">
              <label>Phone</label>
              <input type="text" name="Phone" />
            </div>
            <div class="form-field calender">
              <label>Date of Birth</label>
              <input type="text" name="dob" />
            </div>
            <div class="form-field full">
              <label>Comments</label>
              <textarea></textarea>
            </div>
            <div class="form-field submit-field">
              <input type="submit" name="submit" @click="nbStep++" value="suivant" />
            </div>
          </div>
        </div>
      </div>
    </section>

</template>

<script>
export default {
  name: 'Appointment',
  data(){
      return {
          nbStep: 1,
          form: {
              name: "",
              mail: "",
              mobile: "",
              address: {
                  street: "",
                  city: "",
                  zip: ""
              }
          }
      }
  }
}
</script>