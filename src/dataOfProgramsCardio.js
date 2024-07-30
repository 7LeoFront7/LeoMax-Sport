export const dataOfCardioPrograms = []

const cardio1 = {
	name: 'Кардио "Легкий"',
	id: 1,
	done: false,
	dayOfWeek: 2,
	class: 'cardio',
	descrip: 'Программа на развития выносливости',
	time: 30,
	exemple: [{
		nameExp: 'Бег',
		podhods: 3,
		repeatsExp: 12
	},
	{
		nameExp: 'Прыжки',
		podhods: 3,
		repeatsExp: 12
	},
	{
		nameExp: 'Отжимания V',
		podhods: 3,
		repeatsExp: 12
	},
	{
		nameExp: 'Гантели на бицепц (6кг)',
		podhods: 3,
		repeatsExp: 12
	},
	{
		nameExp: 'Молотки (6кг)',
		podhods: 3,
		repeatsExp: 12
	},
	{
		nameExp: 'Гантели к груди (6кг)',
		podhods: 3,
		repeatsExp: 12
	}]
}

const cardio2 = {
	done: false,
	id: 2,
	dayOfWeek: 4,
	class: 'cardio',
	name: 'Среда (Спина + Пресс)',
	descrip: 'Программа на развития силы верхней и средней части тела',
	time: 32,
	exemple: [{
		nameExp: 'Подтягивания обыч.',
		podhods: 3,
		repeatsExp: 12
	},
	{
		nameExp: 'Подтягивания на бицепс',
		podhods: 3,
		repeatsExp: 12
	},
	{
		nameExp: 'Подтягивания широкие',
		podhods: 3,
		repeatsExp: 12
	},
	{
		nameExp: 'Подтягивания узким',
		podhods: 3,
		repeatsExp: 12
	},
	{
		nameExp: 'Пресс на турнике',
		podhods: 3,
		repeatsExp: 12
	},
	{
		nameExp: 'Велосипед',
		podhods: 3,
		repeatsExp: 12
	},
	{
		nameExp: 'Скручивания',
		podhods: 3,
		repeatsExp: 12
	}]
}






dataOfCardioPrograms.push(cardio1)
dataOfCardioPrograms.push(cardio2)

