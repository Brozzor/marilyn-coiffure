<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">
      <Sidenav></Sidenav>
      <div
        class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen"
        id="main-content"
      >
        <div class="p-6 bg-gray-100 mb-20">
          <div class="sticky top-0 z-40">
            <div
              class="w-full h-20 px-6 bg-gray-100 border-b flex items-center justify-between"
            ></div>
          </div>
          <arianne></arianne>
          <Nuxt />
        </div>
        <FooterAdmin></FooterAdmin>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
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
}
</script>

<style>
.text-brown-600 {
  color: #917758;
}
.bg-brown-600 {
  background-color: #917758;
}
</style>