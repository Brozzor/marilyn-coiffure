<template>
  <div class="container w-full ml-auto mr-auto">
    <p class="text-xl font-semibold mb-4 text-center">
      Toutes les réservations
    </p>
    <div>
      <table class="min-w-full table-auto">
        <thead class="justify-between">
          <tr class="bg-gray-800">
            <th class="px-16 py-2">
              <span class="text-gray-300">Name</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Ville</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Mobile</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Mail</span>
            </th>

            <th class="px-16 py-2">
              <span class="text-gray-300">Date</span>
            </th>

            <th class="px-16 py-2">
              <span class="text-gray-300">Status</span>
            </th>

            <th class="px-16 py-2">
              <span class="text-gray-300">Montant</span>
            </th>
            <th class="px-16 py-2"></th>
          </tr>
        </thead>
        <tbody class="bg-gray-200">
          <tr
            v-for="item in allReservations"
            :key="item._id"
            class="bg-white border-4 border-gray-200"
          >
            <td class="text-center">
              <span class="text-center ml-2 font-semibold">{{ item.name }}</span>
            </td>
            <td class="text-center">
              <span class="text-center ml-2 font-semibold">{{ item.address.city }}({{ item.address.zip }})</span>
            </td>
            <td class="text-center">
              {{ item.mobile }}
            </td>
            
            <td class="text-center">
              <span>{{ item.mail }}</span>
            </td>

            <td class="text-center">
              <span>{{ timeToDate(item.dateReservation) }}</span>
            </td>

            <td  class="text-center">
              <span v-html="formatStatus(item.status)"></span>
            </td>

            <td  class="text-center">
              <span>{{ item.amount }}€</span>
            </td>

            <td class="text-center" >
              <button
              @click="userProfile(item._id)"
                class="bg-brown-600 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black"
              >
                Voir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Reservation',
  layout: 'admin',
  data(){
    return {
      allReservations: []
    }
  },
  mounted() {
    this.getInfos()
  },
  methods: {
    ...mapActions({ getRes: 'admin/reservation' }),
    async getInfos() {
      const ret = await this.getRes()
      this.allReservations = ret;
      return false
    },
    timeToDate(timestamp){
      return new Date(timestamp * 1000).toLocaleDateString();
    },
    formatStatus(value){
      switch (value) {
        case "unpaid":
          return "<font color='#7f1d1d'>Impayer - à contacter</font>"
          break;

        case "paid":
          return "<font color='#2d821e'>Payer</font>"
          break;

        default:
          return "<font color='#e7b52b'>Impayer</font>"
          break;
      }
    },
    userProfile(id) {
      this.$router.push({ path: '/admin/editReservation', query: { id: id } })
    }
  },
}
</script>

<style>
</style>