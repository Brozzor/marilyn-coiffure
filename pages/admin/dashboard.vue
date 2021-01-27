<template>
  <div><Breadcrumb></Breadcrumb></div>
</template>

<script>
import { mapState } from 'vuex'
import Sidenav from '~/components/admin/Sidenav.vue'
import FooterAdmin from '~/components/admin/FooterAdmin.vue'
import Breadcrumb from '~/components/admin/Breadcrumb.vue'
export default {
  components: { Sidenav, FooterAdmin, Breadcrumb },
  layout: 'admin',
}
</script>

<style>
</style>