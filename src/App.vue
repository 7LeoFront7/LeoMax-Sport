<script setup>
import { onMounted, ref } from 'vue'
import Header from './components/Header.vue';
import { infoALLStages } from './dopInfo';

const STATS_USER = ref([])
const userStageText = ref(null)
const isSTATS_USER = ref(true)
const indexStage = ref(0)

const isName = ref(true)


const fullName = ref([])
const firstName = ref(null)
const lastName = ref(null)

const MAX_PushUpsUser = ref(null)
const MAX_PushDownsUser = ref(null)
const MAX_Press = ref(null)
const MAX_Prised = ref(null)

function saveStartRes() {
  isSTATS_USER.value = false

  if (isName.value){
    isName.value = false
    localStorage.setItem('namesuser', JSON.stringify([firstName,lastName]))
  localStorage.setItem('isName', false)
  }

  
  localStorage.setItem('infoPerson', JSON.stringify([MAX_PushUpsUser, MAX_PushDownsUser, MAX_Press, MAX_Prised]))
  localStorage.setItem('isInfo', false)
  getLSInfo()
}

function resetApp(){
  isSTATS_USER.value = true

  localStorage.clear();

  getLSInfo()
}

function getLSInfo() {

  const dataStart = JSON.parse(localStorage.getItem('isInfo'))
  const dataPerson = JSON.parse(localStorage.getItem('infoPerson'))

  const dataName = JSON.parse(localStorage.getItem('isName'))
  const namesuserPerson = JSON.parse(localStorage.getItem('namesuser'))
  

  if (dataName != null) {
    isName.value = dataName
    namesuserPerson.map((item, index) => {
      fullName.value[index] = item._value
    })
  }


  if (dataStart != null) {
    isSTATS_USER.value = dataStart
    dataPerson.map((item, index) => {
      STATS_USER.value[index] = item._value
    })
    resYourStage(STATS_USER.value)
  }
}

function resYourStage(userStats) {

  let stageUser = 0
  dance:
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 4; j++) {
      
      if (userStats[j] == infoALLStages[i][j]) {
        stageUser++
      } 
      if (stageUser == 4){
        userStageText.value = infoALLStages[i + 1][4]
        indexStage.value = i
        break dance
      }
      if (userStats[j] < infoALLStages[i][j]) {
        userStageText.value = infoALLStages[i][4]
        indexStage.value = i - 1
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
  <div class="bg-white">
    <div v-if="isSTATS_USER" class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Введите ваш резльтат
      </h2>
    </div>

    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6">

        <div v-if="isName" class="mb-6 mt-6">
          <div>
          <label for="pushUps" class="block  text-sm font-medium leading-6 text-gray-900">Имя</label>
          <div class="mt-2">
            <input v-model="firstName"  type="text"
              autocomplete="firstname" required
              class="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <label for="pushUps" class="block  text-sm font-medium leading-6 text-gray-900">Фамилия</label>
          <div class="mt-2">
            <input v-model="lastName" type="text"
              autocomplete="name" required
              class="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        </div>

        <div>
          <label for="pushUps" class="block  text-sm font-medium leading-6 text-gray-900">Отжимания</label>
          <div class="mt-2">
            <input v-model="MAX_PushUpsUser" id="pushUps" name="pushUps" type="number"
              autocomplete="pushUps" required
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
            <input v-model="MAX_Press" id="pushUps3" name="pushUps3" type="number"
              autocomplete="pushUps3" required
              class="block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <label for="pushUps4" class="block text-sm font-medium leading-6 text-gray-900">Приседания</label>
          <div class="mt-2">
            <input v-model="MAX_Prised" id="pushUps4" name="pushUps4" type="number"
              autocomplete="pushUps4" required
              class="block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
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
  <div class="p-4" v-else>
    <Header :firstName="fullName[0]" :lastName="fullName[1]" class="mb-6" :resetApp="resetApp" :userStageText="userStageText"/>

    <section class=" flex flex-col gap-4">
      <h1 class="stat-value text-gray-900">Цель: <span class="text-indigo-500">{{ infoALLStages[indexStage + 2][4] }}</span></h1>
      <div class="stats bg-white stats-vertical lg:stats-horizontal shadow">
  <div class="stat">
    <div class="stat-title">Отжимания</div>
    <div class="stat-value text-gray-900">{{ infoALLStages[indexStage + 1][0] }}</div>
  </div>
  <div class="stat">
    <div class="stat-title">Подтягивания</div>
    <div class="stat-value text-gray-900">{{ infoALLStages[indexStage + 1][1] }}</div>
  </div>
  <div class="stat">
    <div class="stat-title">Пресс</div>
    <div class="stat-value text-gray-900">{{ infoALLStages[indexStage + 1][2] }}</div>
  </div>
  <div class="stat">
    <div class="stat-title">Приседания</div>
    <div class="stat-value text-gray-900">{{ infoALLStages[indexStage + 1][3] }}</div>
    
  </div>
</div>
<h2 class="stat-value text-gray-900">Мой максимум:</h2>
<div class="stats bg-white stats-vertical lg:stats-horizontal shadow">
  <div class="stat">
    <div class="stat-title">Отжимания</div>
    <div :class="infoALLStages[indexStage + 1][0] <= STATS_USER[0] ? `stat-value text-green-500` : `stat-value text-indigo-500`">{{ STATS_USER[0] }}</div>
  </div>
  <div class="stat">
    <div class="stat-title">Подтягивания</div>
    <div :class="infoALLStages[indexStage + 1][1] <= STATS_USER[1] ? `stat-value text-green-500` : `stat-value text-indigo-500`">{{ STATS_USER[1] }}</div>
  </div>
  <div class="stat">
    <div class="stat-title">Пресс</div>
    <div :class="infoALLStages[indexStage + 1][2] <= STATS_USER[2] ? `stat-value text-green-500` : `stat-value text-indigo-500`">{{ STATS_USER[2] }}</div>
  </div>
  <div class="stat">
    <div class="stat-title">Приседания</div>
    <div :class="infoALLStages[indexStage + 1][3] <= STATS_USER[3] ? `stat-value text-green-500` : `stat-value text-indigo-500`">{{ STATS_USER[3] }}</div>
  </div>
</div>
    </section>
    
  </div>
  </div>
  
</template>

