<script setup>
import { inject } from 'vue';

const countFalseToDay = inject('countFalseToDay')
</script>

<template>
 <div class="btm-nav bg-white z-10 pb-10 mt-10">
  <router-link
  to="/main"
  custom
  v-slot="{ href, route, navigate, isActive, isExactActive }"
>
  <a :active="isActive" :href="href" @click="navigate">
    <button class="flex flex-col items-center justify-center" :class="[isActive && 'router-link-active flex flex-col items-center justify-center', isExactActive && 'router-link-exact-active flex flex-col items-center justify-center']">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
    <span class="btm-nav-label">Главаня</span>
    </button>
  
  </a>
</router-link>

<router-link
  to="/progress"
  custom
  v-slot="{ href, route, navigate, isActive, isExactActive }"
>
  <a :active="isActive" :href="href" @click="navigate">
    <button class="flex flex-col items-center justify-center" :class="[isActive && 'router-link-active flex flex-col items-center justify-center', isExactActive && 'router-link-exact-active flex flex-col items-center justify-center']">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
    <span class="btm-nav-label">Прогресс</span>
    </button>
    
  </a>
</router-link>

<router-link
  to="/today"
  custom
  v-slot="{ href, route, navigate, isActive, isExactActive }"
>
  <a :active="isActive" :href="href" @click="navigate">
    <button class="flex flex-col items-center justify-center" :class="[isActive && 'router-link-active flex flex-col items-center justify-center', isExactActive && 'router-link-exact-active flex flex-col items-center justify-center']">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span class="btm-nav-label relative">Сегодня<span :class="countFalseToDay != 0 ? `warnToDay` : 'hiddenBlock' ">{{ countFalseToDay }}</span></span>
  </button>
    
  </a>
</router-link>

</div>
</template>

<style scoped>
  .active{
    color: #6366f1
  }
  .router-link-active{
    color: #6366f1
  }
  .warnToDay{
    position: absolute;
    width: 20px;
    height: 20px;
    padding: 2px;
    border-radius: 50%;
    background-color: rgb(237, 38, 38);
    color: #fff;
    font-size: 12px;
    top: -28px;
    right: 7px;
  }
  .hiddenBlock{
    display: none;
  }
</style>

