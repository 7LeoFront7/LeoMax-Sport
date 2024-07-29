<template>
  <div>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">


      <div class="flex flex-1 flex-col">
        <div class="mb-4">
          <h1 class="text-2xl text-gray-900 sm:stat-value"><span class="text-indigo-500 text-2xl
font-semibold">Какая у Вас
              тренировка?</span></h1>
        </div>
        <div class="stats bg-white lg:stats-horizontal shadow">
          <div class="stat">
            <div @click="() => mainForm = 'Силовая'" :class="mainForm == 'Силовая' ? 'text-indigo-500' : null"
              class="stat-title">Силовая</div>
          </div>
          <div class="stat">
            <div @click="() => mainForm = 'Кардио'" :class="mainForm == 'Кардио' ? 'text-indigo-500' : null"
              class="stat-title">Кардио</div>
          </div>
          <div class="stat">
            <div @click="() => mainForm = 'Отдых'" :class="mainForm == 'Отдых' ? 'text-indigo-500' : null"
              class="stat-title">Отдых</div>
          </div>
          <div class="stat">
            <div @click="() => mainForm = 'На Max'" :class="mainForm == 'На Max' ? 'text-indigo-500' : null"
              class="stat-title">Max</div>

          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6 mb-20">



        <div v-if="mainForm == 'Силовая'">
          <Power />
        </div>
        <div v-if="mainForm == 'Кардио'">
          <cardio />
        </div>
        <div v-if="mainForm == 'Отдых'">
          <relax />
        </div>

        <div v-if="mainForm == 'На Max'">
          <h1 class="text-xl text-indigo-500 mb-4">Запишите результат:</h1>
          <div>
            <label for="pushUps" class="block  text-sm font-medium leading-6 text-gray-900">Отжимания</label>
            <div class="mt-2">
              <input v-model="MAX_PushUpsUser" id="pushUps" name="pushUps" type="number" autocomplete="pushUps" required
                class="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div>
            <label for="pushUps2" class="block text-sm font-medium leading-6 text-gray-900">Подтягивания</label>
            <div class="mt-2">
              <input v-model="MAX_PushDownsUser" id="pushUps2" name="pushUps2" type="number" required
                class="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div>
            <label for="pushUps3" class="block text-sm font-medium leading-6 text-gray-900">Пресс</label>
            <div class="mt-2">
              <input v-model="MAX_Press" id="pushUps3" name="pushUps3" type="number" autocomplete="pushUps3" required
                class="block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div>
            <label for="pushUps4" class="block text-sm font-medium leading-6 text-gray-900">Приседания</label>
            <div class="mt-2">
              <input v-model="MAX_Prised" id="pushUps4" name="pushUps4" type="number" autocomplete="pushUps4" required
                class="block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div class="mt-6">
            <button @click="saveStartRes()" onclick="my_modal_3.showModal()"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Записать результат</button>
          </div>
          <dialog id="my_modal_3" class="modal">
            <div class="modal-box">
              <form method="dialog">
                <h1>Сохранено</h1>
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>



            </div>
          </dialog>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import cardio from './cardio.vue'
import Power from './Power.vue'
import relax from './relax.vue'
const mainForm = inject('mainForm')
const { MAX_PushUpsUser, MAX_PushDownsUser, MAX_Press, MAX_Prised } = inject('MaxPull')
const saveStartRes = inject('saveStartRes')
</script>