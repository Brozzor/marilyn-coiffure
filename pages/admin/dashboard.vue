<template>
  <div>
    <Sidenav></Sidenav>

    <Footer></Footer>
  </div>
</template>

<script>
import Sidenav from '~/components/admin/Sidenav.vue'
import FooterAdmin from '~/components/admin/FooterAdmin.vue'
export default {
  components: { Sidenav, FooterAdmin },
  layout: 'admin',
}
</script>

<style>
</style>