<script setup>
import 'boxicons'
import { inject } from 'vue'

const countFalseToDay = inject('countFalseToDay')
</script>

<template>
  <div class="btm-nav bg-white z-10 h-30">
    <router-link to="/main" custom v-slot="{ href, route, navigate, isActive, isExactActive }">
      <a :active="isActive" :href="href" @click="navigate">
        <button class="flex  rounded-lg flex-col items-center justify-center"
          :class="[isActive && 'router-link-active flex flex-col items-center justify-center', isExactActive && 'router-link-exact-active flex flex-col items-center justify-center']">
          <i class='bx bx-home bx-sm'></i>
          <span class="btm-nav-label">Главаня</span>
        </button>

      </a>
    </router-link>
    <router-link to="/calendar" custom v-slot="{ href, route, navigate, isActive, isExactActive }">
      <a :active="isActive" :href="href" @click="navigate">
        <button class="flex  rounded-lg flex-col items-center justify-center"
          :class="[isActive && 'router-link-active flex flex-col items-center justify-center', isExactActive && 'router-link-exact-active flex flex-col items-center justify-center']">
          <i class='bx bx-calendar bx-sm'></i>
          <span class="btm-nav-label">Календарь</span>
        </button>

      </a>
    </router-link>

    <router-link to="/today" custom v-slot="{ href, route, navigate, isActive, isExactActive }">
      <a :active="isActive" :href="href" @click="navigate">
        <button class="flex  rounded-lg flex-col items-center justify-center"
          :class="[isActive && 'router-link-active flex flex-col items-center justify-center', isExactActive && 'router-link-exact-active flex flex-col items-center justify-center']">
          <i class='bx bx-info-circle bx-sm'></i>
          <span class="btm-nav-label relative">Сегодня<span
              :class="countFalseToDay != 0 ? `warnToDay` : 'hiddenBlock'">{{ countFalseToDay }}</span></span>
        </button>

      </a>
    </router-link>
    <router-link to="/formtraning" custom v-slot="{ href, route, navigate, isActive, isExactActive }">
      <a :active="isActive" :href="href" @click="navigate">
        <button class="flex rounded-lg flex-col items-center justify-center"
          :class="[isActive && 'router-link-active flex flex-col items-center justify-center', isExactActive && 'router-link-exact-active flex flex-col items-center justify-center']">
          <i class='bx bxs-calendar-plus bx-sm'></i>
          <span class="btm-nav-label">Начать</span>
        </button>

      </a>
    </router-link>

  </div>
</template>

<style scoped>
.active {
  color: #6366f1
}

.router-link-active {
  color: #6366f1
}

.warnToDay {
  position: absolute;
  width: 20px;
  height: 20px;
  padding: 2px;
  border-radius: 50%;
  background-color: rgb(237, 38, 38);
  color: #fff;
  font-size: 11px;
  top: -33px;
  right: 8px;
}

.hiddenBlock {
  display: none;
}
</style>
