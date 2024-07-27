<script setup>
import { inject, onMounted } from 'vue';
window.scrollTo(0, 1);
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
        <th>Дата</th>
        <th>Данные о результатах</th>
        <th>Повышение</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr class="hover" v-for='item in arrProgress'>
        <th>{{item.date.slice(3)}}</th>
        <td>
          <div class="flex flex-col">
            <div>
              Отжимания: {{ item.PushUpsUser }}
            </div>
            <div>
              Подтягивания: {{ item.PushDownsUser }}
            </div>
            <div>
              Пресс: {{ item.Press }}
            </div>
            <div>
              Приседания: {{ item.Prised }}
            </div>
        </div>
      </td>
        <td class="text-indigo-500">{{item.rang}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

