<script setup>
import { onMounted, provide, ref } from 'vue'
import Header from './components/Header.vue'
import NavBottom from './components/NavBottom.vue'
import { infoALLStages } from './dopInfo'

// Name 
const fullName = ref([])
const firstName = ref(null)
const lastName = ref(null)
const isName = ref(false)
//--

// Add Traning
const isFormTraning = ref(false)
const arrCalendarTraning = ref([])
if (JSON.parse(localStorage.getItem('arrCalendarTraning')) != null) {
  arrCalendarTraning.value = JSON.parse(localStorage.getItem('arrCalendarTraning'))
} else {
  localStorage.setItem('arrCalendarTraning', JSON.stringify(arrCalendarTraning.value))
}
//--

// Max results user
const MAX_PushUpsUser = ref(0)
const MAX_PushDownsUser = ref(0)
const MAX_Press = ref(0)
const MAX_Prised = ref(0)
//--

// Form
const mainForm = ref('Силовая')
//--

// Progress Max Results
const STATS_USER = ref([])
const arrProgress = ref([])
const isSTATS_USER = ref(false)
const userStageText = ref(null)
const indexStage = ref(0)
//--

// ToDoEveryDayList
const toDoEveryDayList = ref([])

if (JSON.parse(localStorage.getItem('toDoEveryDayList')) != null) {
  toDoEveryDayList.value = JSON.parse(localStorage.getItem('toDoEveryDayList'))
} else {
  localStorage.setItem('toDoEveryDayList', JSON.stringify(toDoEveryDayList.value))
}


const countFalseToDay = ref(0)
//--

// ALlDaysTraning
const ALlDaysTraning = ref([])
// ALlDaysTraning.value = JSON.parse(localStorage.getItem('ALlDaysTraning'))
//--


function saveName() {

  isName.value = true
  fullName.value = [firstName, lastName]

  localStorage.setItem('namesuser', JSON.stringify(fullName.value))
  localStorage.setItem('isName', true)

}




function saveStartRes() {
  isSTATS_USER.value = false


  localStorage.setItem('infoPerson', JSON.stringify([MAX_PushUpsUser, MAX_PushDownsUser, MAX_Press, MAX_Prised]))
  localStorage.setItem('isInfo', false)
  getLSInfo()


  const progressRow = {
    date: `${new Date().toDateString()}`,
    PushUpsUser: MAX_PushUpsUser.value,
    PushDownsUser: MAX_PushDownsUser.value,
    Press: MAX_Press.value,
    Prised: MAX_Prised.value,
    rang: userStageText.value
  }


  const progress = JSON.parse(localStorage.getItem('Progress'))

  if (progress) {
    arrProgress.value = [...progress]
  }


  arrProgress.value.push(progressRow)
  localStorage.setItem('Progress', JSON.stringify(arrProgress.value))


}
function resetApp() {
  isSTATS_USER.value = true

  localStorage.removeItem('isInfo')
  localStorage.removeItem('infoPerson')

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

  if (userStats[0] > 100 & userStats[1] > 31 & userStats[2] > 37 & userStats[3] > 100) {
    userStageText.value = "Высшая элита"
  }

  dance:
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 4; j++) {

      if (i == 0) {
        if (userStats[j] < infoALLStages[i][j]) {
          userStageText.value = 'Новичок'
          indexStage.value = i

          break dance

        }
      }

      if (userStats[j] == infoALLStages[i][j]) {
        ++stageUser
        if (stageUser == 4) { // Если все равны 
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

function createCountToDay() {
  toDoEveryDayList.value = JSON.parse(localStorage.getItem('toDoEveryDayList'))
  countFalseToDay.value = 0
  if (toDoEveryDayList.value != []) {
    for (let i = 0; i < toDoEveryDayList.value.length; i++) {
      if (!toDoEveryDayList.value[i].done) {
        countFalseToDay.value = countFalseToDay.value + 1
      }
    }
  }

}

const dayToday = new Date().getDate()
if (dayToday !== parseInt(localStorage.getItem('day'))) {
  localStorage.setItem('isDone', false)
  localStorage.setItem('day', dayToday)
}

onMounted(() => {

  getLSInfo()
  createCountToDay()
})

provide('datesUser_STATS_USER', STATS_USER)
provide('datesUser_indexStage', indexStage)
provide('fullName', fullName)
provide('arrProgress', arrProgress)
provide('countFalseToDay', countFalseToDay)
provide('toDoEveryDayList', toDoEveryDayList)
provide('mainForm', mainForm)
provide('MaxPull', [MAX_PushUpsUser, MAX_PushDownsUser, MAX_Press, MAX_Prised])
provide('ALlDaysTraning', ALlDaysTraning)
provide('saveStartRes', saveStartRes)
provide('arrCalendarTraning', arrCalendarTraning)




</script>

<template>
  <div class="bg-white">

    <div v-if="!isName || isFormTraning" class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div v-if="!isName" class="mb-6 mt-6">
        <h1 class="text-2xl font-semibold text-indigo-500 mb-4">Давайте знакомиться</h1>
        <div>
          <label for="pushUps" class="block  text-sm font-medium leading-6 text-gray-900">Имя</label>
          <div class="mt-2">
            <input v-model="firstName" type="text" required
              class="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <label for="pushUps" class="block  text-sm font-medium leading-6 text-gray-900">Фамилия</label>
          <div class="mt-2">
            <input v-model="lastName" type="text" required
              class="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <button @click="saveName"
          class="flex w-full mt-6 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Сохранить</button>
      </div>
      <div v-if="isFormTraning" class="FullStartForm">


      </div>
    </div>
    <div v-else class="p-4">
      <Header class="mb-6" :resetApp="resetApp" :userStageText="userStageText" />
      <router-view></router-view>
      <NavBottom />
    </div>
  </div>

</template>
