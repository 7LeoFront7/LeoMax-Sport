<script setup>


</script>

<template>

  <section class=" flex flex-row-reverse flex-1 sm:flex-col gap-4 mb-10">
    <div class="flex flex-1 flex-col">
      <div class="mb-4">
        <h1 class="text-2xl text-gray-900 sm:stat-value"><span>Было:</span></h1>
      </div>
      <div class="stats bg-white stats-vertical lg:stats-horizontal shadow">
        <div class="stat p-1">
          <div class="stat-title">Грудь</div>
          <div class='text-xl'>
            60 см </div>
        </div>
        <div class="stat p-1">
          <div class="stat-title">Талия</div>
          <div class='text-xl'>
            60 см </div>
        </div>
        <div class="stat p-1">
          <div class="stat-title">Нога</div>
          <div class='text-xl'>
            60 см </div>
        </div>
        <div class="stat p-1">
          <div class="stat-title">Бёдра</div>
          <div class='text-xl'>
            60 см </div>
        </div>
        <div class="stat p-1">
          <div class="stat-title">Рука</div>
          <div class='text-xl'>
            60 см </div>
        </div>
        <div class="stat p-1">
          <div class="stat-title">Вес</div>
          <div class='text-xl'>
            61 кг </div>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col">
      <div class="mb-4">
        <h2 class="text-2xl text-indigo-500 sm:stat-value">Сейчас:</h2>
      </div>
      <div class="stats bg-white stats-vertical lg:stats-horizontal shadow">
        <div class="stat p-1">
          <div class="stat-title">Грудь</div>
          <div class='text-xl font-medium' :class="1 <= 2 ? `stat-value text-green-500` : `stat-value text-indigo-500`">
            60 см </div>
        </div>
        <div class="stat p-1">
          <div class="stat-title">Талия</div>
          <div class='text-xl font-medium' :class="1 <= 2 ? `stat-value text-green-500` : `stat-value text-indigo-500`">
            60 см </div>
        </div>
        <div class="stat p-1">
          <div class="stat-title">Нога</div>
          <div class='text-xl font-medium' :class="1 <= 2 ? `stat-value text-green-500` : `stat-value text-indigo-500`">
            60 см </div>
        </div>
        <div class="stat p-1">
          <div class="stat-title">Бёдра</div>
          <div class='text-xl font-medium' :class="1 <= 2 ? `stat-value text-green-500` : `stat-value text-indigo-500`">
            60 см </div>
        </div>
        <div class="stat p-1">
          <div class="stat-title">Рука</div>
          <div class='text-xl font-medium' :class="1 <= 2 ? `stat-value text-green-500` : `stat-value text-indigo-500`">
            60 см </div>
        </div>
        <div class="stat p-1">
          <div class="stat-title">Вес</div>
          <div class='text-xl font-medium' :class="1 <= 2 ? `stat-value text-green-500` : `stat-value text-indigo-500`">
            60.2 кг </div>
        </div>
      </div>

    </div>



  </section>
  <button class='btn btn-primary w-full text-base'>Записать замер</button>

</template>

<script setup>

</script>