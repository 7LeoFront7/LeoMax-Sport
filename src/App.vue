<script setup>
import { onMounted, ref } from 'vue'
import Header from './components/Header.vue';
import { infoALLStages } from './dopInfo';

const STATS_USER = ref([])
const userStageText = ref(null)
const isSTATS_USER = ref(true)

const MAX_PushUpsUser = ref(0)
const MAX_PushDownsUser = ref(0)
const MAX_Press = ref(0)
const MAX_Prised = ref(0)

function saveStartRes() {
  isSTATS_USER.value = false
  localStorage.setItem('infoPerson', JSON.stringify([MAX_PushUpsUser, MAX_PushDownsUser, MAX_Press, MAX_Prised]))
  localStorage.setItem('isInfo', false)
  getLSInfo()
}

function resetApp(){
  isSTATS_USER.value = true

  localStorage.setItem('infoPerson', '')
  localStorage.setItem('isInfo', '')

  getLSInfo()
}

function getLSInfo() {

  const dataStart = JSON.parse(localStorage.getItem('isInfo'))
  const dataPerson = JSON.parse(localStorage.getItem('infoPerson'))

  if (dataStart != null) {
    isSTATS_USER.value = dataStart
    dataPerson.map((item, index) => {
      STATS_USER.value[index] = item._value
    })
    resYourStage(STATS_USER.value)
  }
}

function resYourStage(arr) {
  dance:
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 3; j++) {
      if (arr[j] <= infoALLStages[i][j]) {
        userStageText.value = infoALLStages[i][4]
        break dance
      }

    }
  }

  if (userStageText.value == null ){
    userStageText.value = infoALLStages[12][4]
  }
}

onMounted(() =>{
  getLSInfo()
})

</script>

<template>
  <div v-if="isSTATS_USER" class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Введите ваш резльтат
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6">
        <div>
          <label for="pushUps" class="block text-sm font-medium leading-6 text-gray-900">Отжимания</label>
          <div class="mt-2">
            <input v-model="MAX_PushUpsUser" id="pushUps" name="pushUps" type="number"
              autocomplete="pushUps" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <label for="pushUps2" class="block text-sm font-medium leading-6 text-gray-900">Подтягивания</label>
          <div class="mt-2">
            <input v-model="MAX_PushDownsUser" id="pushUps2" name="pushUps2" type="number" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <label for="pushUps3" class="block text-sm font-medium leading-6 text-gray-900">Пресс</label>
          <div class="mt-2">
            <input v-model="MAX_Press" id="pushUps3" name="pushUps3" type="number"
              autocomplete="pushUps3" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <label for="pushUps4" class="block text-sm font-medium leading-6 text-gray-900">Приседания</label>
          <div class="mt-2">
            <input v-model="MAX_Prised" id="pushUps4" name="pushUps4" type="number"
              autocomplete="pushUps4" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <button @click="saveStartRes" 
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Записать результат</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <Header :resetApp="resetApp" :userStageText="userStageText"/>
  </div>
</template>

