<template>
  <h1 class="text-2xl text-indigo-500 mb-4 font-semibold">Ваши задачи на день</h1>
  <div class="p-2 flex justify-between rounded items-center border mb-2" v-for="item in toDoEveryDayList">
    <div>
      {{ item[0] }}
    </div>
    <div class="form-control">
  <label class="label cursor-pointer">
    <input v-model="item[1]" :checked="item[1]" @click="hello" type="checkbox" class="checkbox checkbox-primary" />
  </label>
</div>
  </div>
</template>

<script setup>
import { ref, onMounted, provide, inject } from 'vue';

const toDoEveryDayList = inject('toDoEveryDayList')
const countFalseToDay = inject('countFalseToDay')


function hello(){
  setTimeout(()=>{
    localStorage.setItem('toDoEveryDayList', JSON.stringify(toDoEveryDayList.value))
    countFalseToDay.value = 0
  for (let i = 1; i < 7; i++){
  if (!toDoEveryDayList.value[i][1]){
    countFalseToDay.value = countFalseToDay.value + 1
  }
}
  },0)
  
}


onMounted(()=>{
  const toDoEveryDayList_data = JSON.parse(localStorage.getItem('toDoEveryDayList'))
  toDoEveryDayList.value = toDoEveryDayList_data
  countFalseToDay.value = 0
  for (let i = 1; i < 7; i++){
  if (!toDoEveryDayList.value[i][1]){
    countFalseToDay.value++
  }
}
})
</script>