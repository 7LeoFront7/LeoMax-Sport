<template>
  <h1 class="text-indigo-500 stat-value">Ваш профиль</h1>
  <br>
  <h1>Имя: {{ name[0] }}</h1>
  <h1>Фамилия: {{ name[1] }}</h1>

</template>

<script setup>
import { inject } from 'vue';
const name = inject('fullName')
window.scrollTo(0, 1);
</script>