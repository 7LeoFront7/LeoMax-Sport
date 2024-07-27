<script setup>
import { onMounted, ref, inject } from 'vue'
import { infoALLStages } from '../dopInfo';

const STATS_USER = inject('datesUser_STATS_USER')
const indexStage = inject('datesUser_indexStage')

window.scrollTo(0, 1);
</script>

<template>
  <section class=" flex flex-row-reverse flex-1 sm:flex-col gap-4">
    <div class="flex flex-1 flex-col">
      <div class="mb-4">
        <h1 class="text-2xl text-gray-900 sm:stat-value"><span class="text-indigo-500">{{ infoALLStages[indexStage][4] }}</span></h1>
      </div>
      <div class="stats bg-white stats-vertical lg:stats-horizontal shadow">
      <div class="stat">
        <div class="stat-title">Отжимания</div>
        <div class="stat-value text-gray-900">{{ infoALLStages[indexStage][0] }}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Подтягивания</div>
        <div class="stat-value text-gray-900">{{ infoALLStages[indexStage][1] }}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Пресс</div>
        <div class="stat-value text-gray-900">{{ infoALLStages[indexStage][2] }}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Приседания</div>
        <div class="stat-value text-gray-900">{{ infoALLStages[indexStage][3] }}</div>

      </div>
    </div>
    </div> 
    <div class="flex flex-1 flex-col">
      <div class="mb-4">
      <h2 class="text-2xl text-gray-900 sm:stat-value">Мой максимум:</h2>
    </div>
      <div class="stats bg-white stats-vertical lg:stats-horizontal shadow">
      <div class="stat">
        <div class="stat-title">Отжимания</div>
        <div
          :class="infoALLStages[indexStage][0] <= STATS_USER[0] ? `stat-value text-green-500` : `stat-value text-indigo-500`">
          {{ STATS_USER[0] }}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Подтягивания</div>
        <div
          :class="infoALLStages[indexStage][1] <= STATS_USER[1] ? `stat-value text-green-500` : `stat-value text-indigo-500`">
          {{ STATS_USER[1] }}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Пресс</div>
        <div
          :class="infoALLStages[indexStage][2] <= STATS_USER[2] ? `stat-value text-green-500` : `stat-value text-indigo-500`">
          {{ STATS_USER[2] }}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Приседания</div>
        <div
          :class="infoALLStages[indexStage][3] <= STATS_USER[3] ? `stat-value text-green-500` : `stat-value text-indigo-500`">
          {{ STATS_USER[3] }}</div>
      </div>
    </div>
    </div>
    
    
    
  </section>

</template>

<script setup>

</script>