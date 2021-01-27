<template>
  <div class="container mx-auto py-5">
    <div class="text-center my-8">
      <h1
        v-if="error.statusCode === 404"
        class="font-bold text-4xl text-yellow-200"
      >
        404 Page not found
      </h1>
      <h1 v-else class="font-bold text-8xl text-yellow-500">
        An error occurred
      </h1>
      <NuxtLink to="/" class="font-semibold text-4xl hover:text-yellow-700"
        >Home page</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
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