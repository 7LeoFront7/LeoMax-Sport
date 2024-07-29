<script setup>
import { dataOfPowerPrograms } from '../../dataOfPrograms'
</script>

<template>
  <h1 class="text-xl text-indigo-500 mb-4">Выберете программу:</h1>
  <div>
    <div v-for="programItem in dataOfPowerPrograms" class="card bg-base-100 w-full mb-6 shadow-xl">
      <div class="card-body p-4">
        <h2 class="card-title text-2xl text-indigo-500 font-bold">{{ programItem.name }}</h2>
        <p class="">{{ programItem.descrip }}</p>
        <p class="text-xl"> Время: <span class="text-indigo-500">{{ programItem.time }}</span></p>
        <p class="text-xl mb-4">Упражнений: <span class="text-indigo-500">{{ programItem.exemple.length }}</span></p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Начать тренировку</button>
        </div>
      </div>
    </div>
  </div>
</template>
