<template>
  <div>
    <div></div>
    <arianne></arianne>
    <list-card></list-card>
  </div>
</template>

<script>
import Arianne from '~/components/admin/Arianne.vue'

import ListCard from '~/components/admin/ListCard.vue'
export default {
  components: { ListCard, Arianne },
  layout: 'admin',
  data() {
    return {}
  },
}
</script>

<style>
</style>