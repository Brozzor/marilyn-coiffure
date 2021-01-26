<template>
  <div class="container">
    <div class="">
      <form
        class="d-flex flex-column justify-content-center rounded my-md-5 bg-white p-md-5"
      >
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="form.mail"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="form.password"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" @click.prevent="signIn()" class="btn btn-primary">
          Connexion
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      regMail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      form: {
        mail: '',
        password: '',
      },
      errorForm: '',
      isModalResetOpen: false,
      retReqResetPass: '',
    }
  },
  computed: {
    mailIsValid() {
      return this.regMail.test(this.form.mail)
    },
    passwordIsValid() {
      return this.form.password.length >= 3 && this.form.password.length <= 32
    },
    formIsValid() {
      return this.mailIsValid && this.passwordIsValid
    },
  },
  methods: {
    ...mapActions({ reqsignIn: 'user/signIn' }),
    async signIn() {
      if (this.formIsValid) {
        const ret = await this.reqsignIn(this.form)
        console.log(ret)
        if (ret.error) {
          this.errorForm = ret.error
        } else {
          this.$router.push('admin/dashboard')
        }
        return false
      } else {
        console.log('invalid form')
      }
    },
  },
}
</script>

<style>
</style>