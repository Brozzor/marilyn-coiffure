<template>
  <div>
    <div></div>

    <ListCard :allInfos="allInfos"></ListCard>
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
      allInfos: {}
    }
  },
  mounted() {
    this.getInfos()
  },
  methods: {
    ...mapActions({ getDash: 'admin/dashboard' }),
    async getInfos() {
      const ret = await this.getDash()
      console.log(ret)
      return false
    },
  },
}
</script>

<style>
</style>