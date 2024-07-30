<template>
  <h1 class="text-2xl text-indigo-500 mb-4 font-semibold">Ежедневные задачи</h1>
  <div :id="item.id" :class="item[1] ? 'bg-indigo-100' : 'bg-white'"
    class="p-2 transition flex justify-between rounded items-center border mb-2" v-for="item in toDoEveryDayList">
    <div class="pl-2">
      {{ item.name }}
    </div>
    <div class="flex items-center justify-center gap-4">
      <div>
        <!-- <button @click="deleteTodo" :id="item.id"><i class='bx bxs-trash text-indigo-400'></i></button> -->
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <input v-model="item.done" :checked="item.done" @click="hello" type="checkbox"
            class="checkbox checkbox-primary" />
        </label>
      </div>
    </div>

  </div>
  <div class="flex pl-4 justify-between rounded focus:border-none items-center border mb-2">
    <input v-model="inputTodo" type="text" placeholder="Запишите задачу ...">
    <button @click="addNewTask" class="btn btn-primary">Добавить</button>
  </div>

</template>

<script setup>
import 'boxicons'
import { inject, ref } from 'vue'

const toDoEveryDayList = inject('toDoEveryDayList')
const countFalseToDay = inject('countFalseToDay')

const inputTodo = ref('')

function deleteTodo(e) {
  const id = e.target.id
  console.log(id)

  toDoEveryDayList.value.map((todo, index) => {
    if (todo.id == id) {
      toDoEveryDayList.splice(index, 1)
    }
  })

  localStorage.setItem('toDoEveryDayList', JSON.stringify(toDoEveryDayList.value))
}

function addNewTask() {

  if (inputTodo.value == '') {
    return
  }

  const task = {
    name: inputTodo.value,
    id: Math.random().toFixed(6),
    done: false
  }
  toDoEveryDayList.value.push(task)
  localStorage.setItem('toDoEveryDayList', JSON.stringify(toDoEveryDayList.value))
  countFalseToDay.value = 0
  for (let i = 0; i < toDoEveryDayList.value.length; i++) {
    if (!toDoEveryDayList.value[i].done) {
      countFalseToDay.value = countFalseToDay.value + 1
    }
  }
  inputTodo.value = ''
}

function hello() {
  setTimeout(() => {
    localStorage.setItem('toDoEveryDayList', JSON.stringify(toDoEveryDayList.value))
    countFalseToDay.value = 0
    for (let i = 0; i < toDoEveryDayList.value.length; i++) {
      if (!toDoEveryDayList.value[i].done) {
        countFalseToDay.value = countFalseToDay.value + 1
      }
    }
  }, 0)

}







</script>