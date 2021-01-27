<template>
  <div class="flex content-center justify-center mt-20">
    <div class="w-full max-w-xs">
      <center>
        <img class="mb-2 w-48" src="/img/logo.png" />
      </center>
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="signIn"
      >
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="type">
            Mail
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-model="form.mail"
            type="text"
            placeholder="Enter your mail address"
            v-on:change="form.mailClick = true"
          />
          <p
            v-if="!mailIsValid && form.mailClick"
            class="text-red-500 text-xs italic"
          >
            Merci d'entrez email valide
          </p>
        </div>
        <div class="mb-2">
          <div class="mb-2">
            <label
              class="text-gray-700 text-sm font-bold mb-2 space-x-16"
              for="type"
            >
              <div class="inline-block">Password</div>

            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              v-model="form.password"
              type="password"
              placeholder="Enter your password"
              v-on:change="form.passwordClick = true"
            />
            <p
              v-if="!passwordIsValid && form.passwordClick"
              class="text-red-500 text-xs italic"
            >
              Merci d'entrez un mot de passe valide
            </p>
          </div>
        </div>

        <div class="mb-2">
          <button
            :class="{
              'bg-brown-600': true,
              'hover:bg-gray-700': true,
              'text-white': true,
              'font-bold': true,
              'w-full': true,
              'py-2': true,
              rounded: true,
              'focus:outline-none': true,
              'focus:shadow-outline': true,
              'opacity-50': !formIsValid,
              'cursor-not-allowed': !formIsValid,
            }"
            type="submit"
          >
            Connexion
          </button>
        </div>

        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
          role="alert"
          v-if="errorForm"
        >
          <strong class="font-bold">Login Error !</strong><br />
          <span class="block sm:inline">{{ errorForm }}</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css',
        },
      ],
    }
  },
  data() {
    return {
      regMail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      form: {
        mail: '',
        mailClick: false,
        password: '',
        passwordClick: false,
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
.bg-brown-600 {
  background-color: #917758;
}
.bg-brown-700 {
  background-color: #887054;
}

</style>