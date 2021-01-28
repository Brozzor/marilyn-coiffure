<template>
  <div class="text-center section">
    <h2 class="font-bold">Custom Calendars</h2>
    <p class="text-lg font-medium text-gray-600 mb-6">
      Roll your own calendars using scoped slots
    </p>
    <v-calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="formatDataCal"
      disable-page-swipe
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
              v-for="(attr, id) in attributes"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              :class="attr.customData.class"
              :key="id"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  layout: 'admin',
  data() {
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    return {
      booking: [],
      masks: {
        weekdays: 'WWW',
      },
    }
  },
  mounted() {
    this.getInfos()
  },
  computed: {
    formatDataCal() {
      let attributes = []
      this.booking.forEach((element) => {
        attributes.push({
          key: element._id,
          customData: {
            title: element.name,
            class: this.renderStatus(element.status),
          },
          dates: new Date(
            /*  this.timeToDate(element.dateReservation).split('/')[0],
            this.timeToDate(element.dateReservation).split('/')[1],
            this.timeToDate(element.dateReservation).split('/')[2] */
            new Date(element.dateReservation * 1000)
          ),
        })
        console.log(`année ${new Date(
          element.dateReservation * 1000
        ).getYear()},
            mois ${new Date(element.dateReservation * 1000).getMonth()},
            jour${new Date(element.dateReservation * 1000).getDay()}`)
      })
      return attributes
    },
  },
  methods: {
    ...mapActions({ getRes: 'admin/reservation' }),
    async getInfos() {
      const ret = await this.getRes()
      console.log(ret)
      this.booking = ret
      return true
    },
    renderStatus(status) {
      if (status == 'cancel') {
        return 'bg-red-600 text-white'
      }
      return status == 'unpaid'
        ? 'bg-yellow-400 text-white'
        : 'bg-green-400 text-white'
    },
    timeToDate(timestamp) {
      return new Date(timestamp * 1000).toLocaleDateString()
    },
  },
}
</script>
<style lang="postcss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;
  & .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;
    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>