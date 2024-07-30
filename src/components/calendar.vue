<script setup>
import { ref } from 'vue'

const monthCurrent = ref(new Date().getMonth())
const dayCurrent = ref(new Date().getDate())
const yearCurrent = ref(new Date().getFullYear())

const disabledDates = ref([{ start: new Date(2024, 6, 31), end: null }])

const power = ref('orange')
const attrs = ref([
  {
    key: 'test',
    highlight: true,
    dates: { start: new Date(2024, 6, 15), end: new Date(2024, 6, 19) },
  }
]);

</script>

<template>


  <div>
    <VCalendar expanded :disabled-dates="disabledDates" :rows="2" :initial-page="{ month: monthCurrent, year: 2024 }"
      :color="power" :attributes="attrs" />
  </div>
</template>

<style scoped></style>
