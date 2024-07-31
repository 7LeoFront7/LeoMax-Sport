<script setup>
import { inject, onMounted, ref } from 'vue'
import { dataOfPowerPrograms } from '../../dataOfPrograms'

const currentProgramId = ref(0)
const isDone = ref(false)
isDone.value = JSON.parse(localStorage.getItem('isDone'))

const dateOfWeek = new Date().getDay()

const dayToday = new Date().getDate()

const saveDay = dayToday

const monthToday = new Date().getMonth()
const yearToday = new Date().getFullYear()

const isTraning = ref(false)

const arrCalendarTraning = inject('arrCalendarTraning')


isDone.value = JSON.parse(localStorage.getItem('isDone'))





function openPowerModal(e) {
  currentProgramId.value = e.target.id
}

function programConfirm() {
  const dayPowerTraningEnd = {
    day: dayToday,
    month: monthToday,
    year: yearToday,
    class: 'Силовая'
  }
  arrCalendarTraning.value.push(dayPowerTraningEnd)

  localStorage.setItem('arrCalendarTraning', JSON.stringify(arrCalendarTraning))
  isDone.value = true
  localStorage.setItem('isDone', true)
  localStorage.setItem('day', dayToday)
}

onMounted(() => {
  isTraning.value = false
})

</script>

<template>
  <h1 class="text-xl text-indigo-500 mb-4">Ваша программа на сегодня:</h1>

  <div v-if="!isDone">
    <div v-for="programItem in dataOfPowerPrograms" class="card bg-base-100 w-full mb-6 shadow-xl">
      <div class="card-body p-4">
        <h2 class="card-title text-2xl text-indigo-500 font-bold">{{ programItem.name }}</h2>
        <p class="">{{ programItem.descrip }}</p>
        <p class="text-xl"> Время: <span class="text-indigo-500">{{ programItem.time }} мин.</span></p>
        <p class="text-xl mb-4">Упражнений: <span class="text-indigo-500">{{ programItem.exemple.length }}</span></p>
        <div class="card-actions justify-end">
          <button @click="openPowerModal" onclick="my_modal_3.showModal()" :id="programItem.id"
            class="btn btn-primary">Начать
            тренировку</button>
        </div>
      </div>
    </div>

  </div>
  <div v-else>
    Вы сегодня уже тренироваолсиь
  </div>
  <dialog id="my_modal_3" class="modal">
    <div class="modal-box h-5/6 pt-10">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <div class="mb-4" v-for="prog in dataOfPowerPrograms">
        <div v-if="prog.id == currentProgramId">
          <h3 class="text-2xl mb-6 text-indigo-500 font-bold">{{ prog.name }} </h3>

          <div class="mb-4 p-4 border" v-for="exp in prog.exemple">
            <h1 class="text-xl text-indigo-500 font-semibold">{{ exp.nameExp }}</h1>
            <p>Подходов: {{ exp.podhods }}</p>
            <p>Повторений: {{ exp.repeatsExp }}</p>

          </div>

        </div>

      </div>
      <form method="dialog">
        <button @click="programConfirm" class='btn btn-primary'>Завершить</button>
      </form>

    </div>
  </dialog>
</template>
