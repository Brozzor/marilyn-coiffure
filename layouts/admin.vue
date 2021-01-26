<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/argon.css' },
        { rel: 'stylesheet', href: '/css/nucleo.css' },
      ],
    }
  },
}
</script>

<style>
</style>