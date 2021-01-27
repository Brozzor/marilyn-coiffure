<template>
  <div>
    <div></div>

    <ListCard :allInfos="allInfos" :toto="allInfos.nbBookingLast30Days"></ListCard>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ListCard from '~/components/admin/ListCard.vue'
export default {
  components: { ListCard },
  layout: 'admin',
  data() {
    return {
      allInfos: {
        nbBookingLast30Days: 0
      }
    }
  },
  mounted() {
    this.getInfos()
  },
  methods: {
    ...mapActions({ getDash: 'admin/dashboard' }),
    async getInfos() {
      const ret = await this.getDash()
      this.allInfos = ret;
      return false
    },
  },
}
</script>

<style>
</style>