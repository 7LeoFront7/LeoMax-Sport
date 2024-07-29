<script>

export default {
  data() {
    return {
      currentMonth: '',
      daysInMonth: [],
      highlightedDays: [],
    }
  },
  created() {
    this.showCurrentMonth()
  },
  methods: {
    showCurrentMonth() {
      const currentDate = new Date()
      const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

      this.currentMonth = monthNames[currentDate.getMonth()]

      const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
      this.daysInMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    },
    previousMonth() {
      const currentDate = new Date()
      currentDate.setMonth(currentDate.getMonth() - 1)
      const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

      this.currentMonth = monthNames[currentDate.getMonth()]

      const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
      this.daysInMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    },
    nextMonth() {
      const currentDate = new Date()
      currentDate.setMonth(currentDate.getMonth())
      const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

      this.currentMonth = monthNames[currentDate.getMonth()]

      const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
      this.daysInMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    },
    highlightDay(day) {
      if (this.highlightedDays.includes(day)) {
        this.highlightedDays = this.highlightedDays.filter(h => h !== day)
      } else {
        this.highlightedDays.push(day)
      }
    }
  }
}
</script>

<template>
  <h1 class="text-indigo-500 text-2xl font-semibold mb-4">Календарь: {{ currentMonth }}</h1>

  <div class="calendar">
    <div class="header">


    </div>
    <div class="days">
      <div v-for="(day, index) in daysInMonth" :key="index" :class="{ 'highlighted': highlightedDays.includes(day) }"
        @click="highlightDay(day)">
        {{ day }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar {
  max-width: 600px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.days div {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

.highlighted {
  background-color: rgb(114, 78, 243);
  color: #fff;
}
</style>