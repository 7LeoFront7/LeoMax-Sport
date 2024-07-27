<script setup>
import { onMounted, provide, ref } from 'vue'
import Header from './components/Header.vue';
import { infoALLStages } from './dopInfo';

const STATS_USER = ref([])
const userStageText = ref(null)
const indexStage = ref(0)
const isName = ref(true)
const fullName = ref([])
const firstName = ref(null)
const lastName = ref(null)
const MAX_PushUpsUser = ref(0)
const MAX_PushDownsUser = ref(0)
const MAX_Press = ref(0)
const MAX_Prised = ref(0)

const arrProgress = ref([])

const isSTATS_USER = ref(true)

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

  
  const progressRow = {
    date: `${new Date().toDateString()}`,
    PushUpsUser: MAX_PushUpsUser.value,
    PushDownsUser: MAX_PushDownsUser.value,
    Press: MAX_Press.value ,
    Prised: MAX_Prised.value,
    rang: userStageText.value
  }

  
  const progress = JSON.parse(localStorage.getItem('Progress'))
  
  if (progress){
    arrProgress.value = [...progress]
  }

  
  arrProgress.value.push(progressRow)
  localStorage.setItem('Progress', JSON.stringify(arrProgress.value))


}


function resetApp(){
  isSTATS_USER.value = true

  localStorage.removeItem('isInfo');
  localStorage.removeItem('infoPerson');

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
  let stageUserUp = 0

  if (userStats[0] > 100 & userStats[1] > 31 & userStats[2] > 37 & userStats[3] > 100 ){
    userStageText.value = "Высшая элита"
  }

  dance:
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 4; j++) {

      if (i == 0){
        if (userStats[j] < infoALLStages[i][j]){
        userStageText.value = 'Новичок'
        indexStage.value = i
        
        break dance
        
      }
      }
      
      if (userStats[j] == infoALLStages[i][j]){
        ++stageUser
        if (stageUser == 4){ // Если все равны 
        userStageText.value = infoALLStages[i][4]
        indexStage.value = i + 1
        
        break dance
      }
        continue
      }

      if (userStats[j] < infoALLStages[i][j]) {
        userStageText.value = infoALLStages[i - 1][4]
        indexStage.value = i 
        
        break dance
      }
  
      } 
    }

    
  }


onMounted(() =>{
  getLSInfo()
})

provide('datesUser_STATS_USER', STATS_USER)
provide('datesUser_indexStage', indexStage)
provide('fullName', fullName)
provide('arrProgress', arrProgress)

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
    <router-view></router-view>
  
    
  </div>
  </div>
  
</template>

