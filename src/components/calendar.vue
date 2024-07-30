<script setup>
import { inject, ref } from 'vue'

const monthCurrent = ref(new Date().getMonth())
const dayCurrent = ref(new Date().getDate())
const yearCurrent = ref(new Date().getFullYear())

const arrCalendarTraning = inject('arrCalendarTraning')


const disabledDates = ref([{ start: new Date(yearCurrent.value, monthCurrent.value, dayCurrent.value + 1), end: null }])

const power = ref('orange')

const datesInCalendar = ref([])


if (JSON.parse(localStorage.getItem('datesInCalendar')) != null) {

  datesInCalendar.value = JSON.parse(localStorage.getItem('datesInCalendar'))
} else {

  localStorage.setItem('datesInCalendar', JSON.stringify(datesInCalendar.value))
}


if (arrCalendarTraning.value != 0) {
  for (let i = 0; i < arrCalendarTraning.value.length; i++) {

    const newDate = {
      start: new Date(arrCalendarTraning.value[i].year, arrCalendarTraning.value[i].month, arrCalendarTraning.value[i].day),
      end: new Date(arrCalendarTraning.value[i].year, arrCalendarTraning.value[i].month, arrCalendarTraning.value[i].day),
    }

    datesInCalendar.value.push(newDate)
    localStorage.setItem('datesInCalendar', JSON.stringify(datesInCalendar.value))
  }
}

const attrs = ref([
  {
    key: 'test',
    highlight: true,
    dates: [...datesInCalendar.value]
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
