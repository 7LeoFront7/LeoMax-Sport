<script setup>
import { inject, ref } from 'vue'
import { dataOfPowerPrograms } from '../../dataOfPrograms'
const ALlDaysTraning = inject('ALlDaysTraning')
let currentProgramId = ref(0)

function openPowerModal(e) {
  currentProgramId.value = e.target.id
}

function programConfirm() {
  const dateToday = new Date().getDate()

  // ALlDaysTraning.value.map((x) => {
  //   if (x == dateToday) {
  //     alert('Вы уже сегодня тренировались')
  //     return
  //   } 
  // })

  ALlDaysTraning.value.push(dateToday)



}
</script>

<template>
  <h1 class="text-xl text-indigo-500 mb-4">Выберете программу:</h1>

  <div>
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
  <dialog id="my_modal_3" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <div class="mb-4" v-for="prog in dataOfPowerPrograms">
        <div v-if="prog.id == currentProgramId">
          <h3 class="text-2xl mb-6 text-indigo-500 font-bold">{{ prog.name }} <span class='stat-title text-base'>{{
      prog.time }}
              мин.</span> </h3>

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
