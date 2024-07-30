<script setup>
import { inject, onMounted, ref } from 'vue'

const isDone = ref(false)
isDone.value = JSON.parse(localStorage.getItem('isDone'))


const dayToday = new Date().getDate()

const saveDay = dayToday

const monthToday = new Date().getMonth()
const yearToday = new Date().getFullYear()

const isTraning = ref(false)

const arrCalendarTraning = inject('arrCalendarTraning')

if (saveDay != dayToday) {
  isDone.value = false
  localStorage.setItem('isDone', false)
}

function programConfirm() {
  const dayRelaxTraningEnd = {
    day: dayToday,
    month: monthToday,
    year: yearToday,
    class: 'Отдых'
  }
  arrCalendarTraning.value.push(dayRelaxTraningEnd)

  localStorage.setItem('arrCalendarTraning', JSON.stringify(arrCalendarTraning))
  isDone.value = true
  localStorage.setItem('isDone', true)
}

onMounted(() => {
  isTraning.value = false
})

</script>

<template>
  <h1 class="text-xl text-indigo-500 mb-4">День восстановления</h1>

  <div v-if="!isDone">


    <div v-if="!isTraning">

      <div class="card bg-base-100 w-full mb-6 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl text-indigo-500 font-bold">День отдыха</h2>
          <p>Вы явно заслужили отдых ...</p>
          <div class="card-actions justify-end">
            <button @click="programConfirm" class="btn btn-primary">Восстановиться</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    Сегодня вы отдыхаете, ура :)
  </div>
</template>
