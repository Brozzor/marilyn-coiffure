<template>
  <div>

    <div class="lg:flex justify-between items-center mb-6">
      <p class="text-2xl font-semibold mb-2 lg:mb-0">
        Bienvenue sur le panel d'administration
      </p>
    </div>

    <div class="flex flex-wrap -mx-3 mb-20">
      <div class="w-1/2 xl:w-1/3 px-3">
        <div
          class="w-full bg-white border text-brown-600 rounded-lg flex items-center p-6 mb-6 xl:mb-0"
        >
          <svg class="w-16 h-16 mr-4 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>

          <div class="text-gray-700">
            <p class="font-semibold text-3xl">{{ allInfos.nbBookingLast30Days }}</p>
            <p>Réservation ce mois ci</p>
          </div>
        </div>
      </div>

      <div class="w-1/2 xl:w-1/3 px-3">
        <div
          class="w-full bg-white border text-brown-600 rounded-lg flex items-center p-6 mb-6 xl:mb-0"
        >

          
<svg class="w-16 h-16 mr-4 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          <div class="text-gray-700">
            <p class="font-semibold text-3xl">{{ allInfos.nbBookingLast30DaysPay }}</p>
            <p>Réservation payer ce mois ci</p>
          </div>
        </div>
      </div>

      <div class="w-1/2 xl:w-1/3 px-3">
        <div
          class="w-full bg-white border text-brown-600 rounded-lg flex items-center p-6"
        >


          <svg class="w-16 h-16 mr-4 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

          <div class="text-gray-700">
            <p class="font-semibold text-3xl">{{ allInfos.amountLast30Days }}€</p>
            <p>Argent reçu ce mois-ci</p>
          </div>
        </div>
      </div>

    </div>

    <div class="flex flex-wrap -mx-3">
      <div class="w-full px-3">
        <p class="text-xl font-semibold mb-4">Recent Transactions</p>
        <div class="w-full bg-white border rounded-lg p-4">
          <div
            class="w-full bg-gray-100 border rounded-lg flex justify-between items-center px-4 py-2 mb-4"
          >
            <div>
              <p class="font-semibold text-xl">Trent Murphy</p>
              <p>Product 1</p>
            </div>
            <span class="text-green-500 font-semibold text-lg">$25.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ListCard',
  props: ['allInfos'],
  data() {
    return {
    }
  },
}
</script>

<style>
</style>