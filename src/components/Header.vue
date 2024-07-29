<template>
  <header class="bg-white shadow-lg z-10 sticky text-lg top-0 w-full p-6">
    <nav class="mx-auto flex items-center justify-between lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <span class="-m-1.5 p-1.5">
          <span class="sr-only">LeoMax | Sport</span>
          <div class="flex items-center justify-between gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12">
              <path fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clip-rule="evenodd" />
            </svg>
            <div class="flex flex-col">
              <span class="text-gray-900 ">{{ fullName[0] }} {{ fullName[1] }}</span>
              <span class="text-indigo-500 font-semibold">{{ userStageText }}</span>
            </div>

          </div>

        </span>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <i class='bx bxs-cog bx-sm'></i>
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <router-link to="/main" class="text-base font-semibold leading-6 text-gray-900">Главная</router-link>
        <!-- <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-400">
            Тренировка
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-gray-50">
                  <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div class="flex-auto">
                    <a :href="item.href" class="block font-semibold text-gray-900">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                  <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover> -->

        <router-link to="/progress" class="text-base font-semibold leading-6 text-gray-900">Прогресс</router-link>
        <router-link to="/profile" class="text-base font-semibold leading-6 text-gray-900">Профиль</router-link>
        <router-link to="/howwork" class="text-base font-semibold leading-6 text-indigo-500">Как это
          работает?</router-link>
      </PopoverGroup>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end flex items-center justify-between gap-4">
        <button @click="resetApp" class="bg-indigo-600 text-sm p-2 rounded text-white">Провести тренировку</button>

      </div>
    </nav>
    <Dialog class="lg:hidden transition" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">LeoMax | Sport</span>
            <span class="text-3xl font-bold"><span class="text-indigo-500">LeoMax</span> | Sport</span>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Закрыть</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <router-link to="/main" @click="mobileMenuOpen = false"
                class="-mx-3 block rounded-lg px-3 py-2 text-xl border font-semibold leading-7 text-gray-900 hover:bg-gray-50">Главная</router-link>
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl border font-semibold leading-7 text-gray-400 hover:bg-gray-50">
                  Тренировки
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton v-for="item in [...products]" :key="item.name" as="a" :href="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {{ item.name }}</DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
              <router-link to="/progress" @click="mobileMenuOpen = false"
                class="-mx-3 border block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">Прогресс</router-link>
              <router-link to="/profile" @click="mobileMenuOpen = false"
                class="-mx-3 block border rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">Профиль</router-link>
              <router-link to="/howwork" @click="mobileMenuOpen = false"
                class="-mx-3 block border rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-indigo-500 hover:bg-indigo-50">Как
                это работает?</router-link>
            </div>
            <div class="py-6">
              <button @click="resetApp" class="bg-indigo-600 text-base p-2 px-6 rounded text-white">Провести
                тренировку</button>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import 'boxicons'
import { inject, ref } from 'vue'

const fullName = inject('fullName')

defineProps({
  userStageText: String,
  resetApp: Function
})

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverGroup
} from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import {
  ChartBarIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

const products = [
  { name: 'Отжимания', description: 'Программа тренировки отжиманий', href: '#', icon: ChartBarIcon },
  { name: 'Подтягивания', description: 'Программа тренировки подтягиваний', href: '#', icon: ChartBarIcon },
  { name: 'Пресс', description: 'Программа тренировки пресса', href: '#', icon: ChartBarIcon },
  { name: 'Приседания', description: 'Программа тренировки приседаний', href: '#', icon: ChartBarIcon }

]

const mobileMenuOpen = ref(false)
</script>