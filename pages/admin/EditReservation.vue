<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <NuxtLink :to="{ name: 'admin-Reservation' }"
        type="button"
        class="mb-1 px-4 py-2 bg-gray-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray transition ease-in-out duration-150"
      >
        Retour
      </NuxtLink>
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
        <div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-8">
                      <label
                        class="block font-medium text-sm text-gray-700"
                        for="name"
                      >
                        Nom
                      </label>
                      <input
                        class="form-input rounded-md shadow-sm mt-1 block w-full"
                        type="text"
                        name="name"
                      />
                    </div>

                    <div class="col-span-8">
                      <label
                        class="block font-medium text-sm text-gray-700"
                        for="text"
                      >
                        Description
                      </label>
                      <input
                        class="form-input rounded-md shadow-sm mt-1 block w-full"
                        type="text"
                        name="description"
                      />
                    </div>

                    <div class="col-span-8">
                      <label
                        class="block font-medium text-sm text-gray-700"
                        for="text"
                      >
                        Couleur
                      </label>
                      <input
                        class="form-input rounded-md shadow-sm mt-1 block w-full"
                        type="text"
                        name="color"
                      />
                    </div>

                    <div class="col-span-8">
                      <label
                        class="block font-medium text-sm text-gray-700"
                        for="text"
                      >
                        Genre
                      </label>
                      <input
                        class="form-input rounded-md shadow-sm mt-1 block w-full"
                        type="text"
                        name="genre"
                      />
                    </div>

                    <div class="col-span-8">
                      <label
                        class="block font-medium text-sm text-gray-700"
                        for="text"
                      >
                        Marque
                      </label>
                      <input
                        class="form-input rounded-md shadow-sm mt-1 block w-full"
                        type="text"
                        name="brand"
                      />
                    </div>

                    <div class="col-span-8">
                      <label
                        class="block font-medium text-sm text-gray-700"
                        for="text"
                      >
                        Prix
                      </label>
                      <input
                        class="form-input rounded-md shadow-sm mt-1 block w-full"
                        type="text"
                        name="price"
                      />
                    </div>

                    <div class="col-span-8">
                      <label
                        class="block font-medium text-sm text-gray-700"
                        for="text"
                      >
                        Date de création
                      </label>
                      <input
                        class="form-input rounded-md shadow-sm mt-1 block w-full opacity-50"
                        type="text"
                        disabled="disabled"
                      />
                    </div>

                    <div class="col-span-8">
                      <label
                        class="block font-medium text-sm text-gray-700"
                        for="text"
                      >
                        Dernière mise à jour
                      </label>
                      <input
                        class="form-input rounded-md shadow-sm mt-1 block w-full opacity-50"
                        type="text"
                        disabled="disabled"
                      />
                    </div>

                    <div class="col-span-8">
                      <label
                        class="block font-medium text-sm text-gray-700"
                        for="text"
                      >
                        Lien de l'image
                      </label>
                      <input
                        class="form-input rounded-md shadow-sm mt-1 block w-full"
                        type="text"
                        name="imgLink"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6"
                >
                  <a
                    type="button"
                    href="/admin/articles"
                    class="inline-flex items-center mr-1 px-4 py-2 bg-gray-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150"
                  >
                    Cancel
                  </a>
                  <button
                    type="submit"
                    class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'EditReservation',
  layout: 'admin',
  data() {
    return {
      reservation: {},
    }
  },
  mounted() {
    this.getInfos()
  },
  methods: {
    ...mapActions({ getRes: 'admin/reservationById' }),
    async getInfos() {
      console.log(this.$route.query.id)
      const ret = await this.getRes(this.$route.query.id)
      this.reservation = ret
      return false
    },
    timeToDate(timestamp) {
      return new Date(timestamp * 1000).toLocaleDateString()
    },
    formatStatus(value) {
      switch (value) {
        case 'unpaid':
          return "<font color='#7f1d1d'>Impayer - à contacter</font>"
          break

        case 'paid':
          return "<font color='#2d821e'>Payer</font>"
          break

        default:
          return "<font color='#e7b52b'>Impayer</font>"
          break
      }
    },
  },
}
</script>