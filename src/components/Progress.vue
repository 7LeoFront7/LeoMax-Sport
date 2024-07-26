<script setup>
import { inject, onMounted } from 'vue';

const name = inject('fullName')
const arrProgress = inject('arrProgress')

onMounted(()=>{
  const progress = JSON.parse(localStorage.getItem('Progress'))
  
  if (progress){
    arrProgress.value = [...progress]
  }
})
</script>

<template>
  <h1 class="text-indigo-500 stat-value mb-4">Ваш прогресс</h1>
  <div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Пользователь</th>
        <th>Данные о результатах</th>
        <th>Повышение</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr class="hover" v-for='item in arrProgress'>
        <th>{{item.date}}</th>
        <td>{{ name[0] }} {{ name[1] }}</td>
        <td>{{item.stats}}</td>
        <td>{{item.rang}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

