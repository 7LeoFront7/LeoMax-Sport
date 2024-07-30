<script setup>
import { inject, ref } from 'vue'

const monthCurrent = ref(new Date().getMonth())
const dayCurrent = ref(new Date().getDate())
const yearCurrent = ref(new Date().getFullYear())

const arrCalendarTraning = inject('arrCalendarTraning')


const disabledDates = ref([{ start: new Date(yearCurrent.value, monthCurrent.value, dayCurrent.value + 1), end: null }])


const datesInPowerCalendar = ref([])
const datesInCardioCalendar = ref([])
const datesInRelaxCalendar = ref([])


if (JSON.parse(localStorage.getItem('datesInPowerCalendar')) != null) {

  datesInPowerCalendar.value = JSON.parse(localStorage.getItem('datesInPowerCalendar'))
} else {
  localStorage.setItem('datesInPowerCalendar', JSON.stringify(datesInPowerCalendar.value))
}


if (JSON.parse(localStorage.getItem('datesInCardioCalendar')) != null) {
  datesInCardioCalendar.value = JSON.parse(localStorage.getItem('datesInCardioCalendar'))
} else {
  localStorage.setItem('datesInCardioCalendar', JSON.stringify(datesInCardioCalendar.value))
}

if (JSON.parse(localStorage.getItem('datesInRelaxCalendar')) != null) {
  datesInRelaxCalendar.value = JSON.parse(localStorage.getItem('datesInRelaxCalendar'))
} else {
  localStorage.setItem('datesInRelaxCalendar', JSON.stringify(datesInRelaxCalendar.value))
}


if (arrCalendarTraning.value != 0) {
  localStorage.setItem('datesInPowerCalendar', [])
  for (let i = 0; i < arrCalendarTraning.value.length; i++) {

    if (arrCalendarTraning.value[i].class == 'Силовая') {
      const newDate = {
        start: new Date(arrCalendarTraning.value[i].year, arrCalendarTraning.value[i].month, arrCalendarTraning.value[i].day),
        end: new Date(arrCalendarTraning.value[i].year, arrCalendarTraning.value[i].month, arrCalendarTraning.value[i].day),
      }

      datesInPowerCalendar.value.push(newDate)
    } else if (arrCalendarTraning.value[i].class == 'Кардио') {
      const newDate = {
        start: new Date(arrCalendarTraning.value[i].year, arrCalendarTraning.value[i].month, arrCalendarTraning.value[i].day),
        end: new Date(arrCalendarTraning.value[i].year, arrCalendarTraning.value[i].month, arrCalendarTraning.value[i].day),
      }

      datesInCardioCalendar.value.push(newDate)
    } else {
      const newDate = {
        start: new Date(arrCalendarTraning.value[i].year, arrCalendarTraning.value[i].month, arrCalendarTraning.value[i].day),
        end: new Date(arrCalendarTraning.value[i].year, arrCalendarTraning.value[i].month, arrCalendarTraning.value[i].day),
      }

      datesInRelaxCalendar.value.push(newDate)
    }



  }
}
localStorage.setItem('datesInPowerCalendar', JSON.stringify(datesInPowerCalendar.value))
localStorage.setItem('datesInCardioCalendar', JSON.stringify(datesInCardioCalendar.value))
localStorage.setItem('datesInRelaxCalendar', JSON.stringify(datesInRelaxCalendar.value))


const attrs = ref([
  {
    key: 'power',
    highlight: 'red',
    dates: [...datesInPowerCalendar.value]
  },
  {
    key: 'cardio',
    highlight: 'yellow',
    dates: [...datesInCardioCalendar.value]
  },
  {
    key: 'relax',
    highlight: 'blue',
    dates: [...datesInRelaxCalendar.value]
  }
]);

</script>

<template>


  <div>
    <VCalendar expanded :disabled-dates="disabledDates" :rows="2" :initial-page="{ month: monthCurrent, year: 2024 }"
      :attributes="attrs" />
  </div>
</template>

<style scoped></style>
