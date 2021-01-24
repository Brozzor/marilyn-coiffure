<template>
<section id="appointment" class="container make-appointment">
      <div class="row">
        <h2 class="heading-title">Prendre un rendez vous</h2>
        <div class="appointment-header">
          <div class="appointment-cell">
            <div class="appointment-inner current" data-tab="tab-5">
              <span>01</span>
              <p>Details</p>
            </div>
          </div>
          <div class="appointment-cell">
            <div class="appointment-inner" data-tab="tab-6">
              <span>02</span>
              <p>Choisir un service</p>
            </div>
          </div>
          <div class="appointment-cell">
            <div class="appointment-inner" data-tab="tab-7">
              <span>03</span>
              <p>Choisir une date</p>
            </div>
          </div>
          <div class="appointment-cell">
            <div class="appointment-inner" data-tab="tab-9">
              <span>05</span>
              <p>Finis</p>
            </div>
          </div>
        </div>
        <div id="tab-5" class="appointment-form tab-content2 current clearfix">
          <p>01: Please Fillup Details</p>
          <div class="appointment-form-wrapper clearfix">
            <div class="form-field">
              <label>Name</label>
              <input type="text" name="name" />
            </div>
            <div class="form-field">
              <label>Email</label>
              <input type="email" name="email" />
            </div>
            <div class="form-field">
              <label>Phone</label>
              <input type="text" name="phone" />
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
              <input type="submit" name="submit" value="next" />
            </div>
          </div>
        </div>
        <div id="tab-6" class="appointment-form tab-content2 clearfix">
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
              <input type="submit" name="submit" value="next" />
            </div>
          </div>
        </div>
        <div id="tab-7" class="appointment-form tab-content2 clearfix">
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
              <input type="submit" name="submit" value="next" />
            </div>
          </div>
        </div>
        <div id="tab-8" class="appointment-form tab-content2 clearfix">
          <p>04: Make Payment</p>
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
              <input type="submit" name="submit" value="next" />
            </div>
          </div>
        </div>
        <div id="tab-9" class="appointment-form tab-content2 clearfix">
          <p>05: Thank You Message</p>
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
              <input type="submit" name="submit" value="next" />
            </div>
          </div>
        </div>
      </div>
    </section>

</template>

<script>
export default {
  name: 'Appointment',
}
</script>