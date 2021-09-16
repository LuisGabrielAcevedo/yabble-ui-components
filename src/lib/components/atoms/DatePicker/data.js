import dayjs from 'dayjs'

export const getDate = (y, m, d) => `${y}-${formatValue(m)}-${formatValue(d)}`
export const dayjsDate = (y, m, d) => dayjs(getDate(y, m, d))

export const formatValue = value =>
  String(value).length <= 1 ? `0${value}` : value

export const getCalendar = (año, mes) => {
  const days = []
  const now = new Date(año, mes, 1)
  const last = new Date(año, mes + 1, 0)
  const fisrtWeek = now.getDay() === 0 ? 7 : now.getDay()
  const lastDatMonth = last.getDate()
  const lastCell = fisrtWeek + lastDatMonth
  let dia = 0
  for (let i = 0; i <= 41; i++) {
    if (i === fisrtWeek) {
      dia = 1
    }
    if (i < fisrtWeek || i >= lastCell) {
      days.push(0)
    } else {
      days.push(dia)
      dia++
    }
    if (i % 7 === 0 && dia > lastDatMonth) {
      break
    }
  }
  return formatDays(days)
}
const formatDays = days => {
  let formatedDays = []
  for (let i = 0; i < days.length; i += 7) {
    const part = days.slice(i, i + 7)
    formatedDays.push(part)
  }
  return formatedDays.filter(grupo => Math.max(...grupo))
}

export const compareDates = (start, end, date) => {
  const today = dayjs(date)
  const pastDate = dayjs(start)
  const futureDate = dayjs(end)
  return (
    (today.isAfter(pastDate) || today.isSame(pastDate)) &&
    (today.isBefore(futureDate) || today.isSame(futureDate))
  )
}

export const isStartDate = (start, date) => {
  const today = dayjs(date)
  const pastDate = dayjs(start)
  return today.isSame(pastDate)
}
export const isEndDate = (end, date) => {
  const today = dayjs(date)
  const futureDate = dayjs(end)
  return today.isSame(futureDate)
}

export const weekDays = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thurday',
    'Friday',
    'Saturday',
  ]
  return days.map((d, i) => ({
    value: i,
    label: d,
    shortLabel: d.substr(0, 2),
  }))
}

export const month = () => {
  return [
    {value: 1, label: 'January'},
    {value: 2, label: 'February'},
    {value: 3, label: 'March'},
    {value: 4, label: 'April'},
    {value: 5, label: 'May'},
    {value: 6, label: 'June'},
    {value: 7, label: 'July'},
    {value: 8, label: 'August'},
    {value: 9, label: 'September'},
    {value: 10, label: 'October'},
    {value: 11, label: 'November'},
    {value: 12, label: 'December'},
  ]
}

export const years = () => {
  const _years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
  return _years.map(y => ({
    value: y,
    label: y,
  }))
}

export const currentDate = () => {
  const date = dayjs(new Date())
  return {
    day: date.date(),
    month: date.month() + 1,
    year: date.year(),
  }
}

export const addMonth = _date => {
  const date = dayjs(_date).add(1, 'month')
  return `${date.year()}-${formatValue(date.month() + 1)}-${formatValue(1)}`
}

export const subtractMonth = _date => {
  const date = dayjs(_date).subtract(1, 'month')
  return `${date.year()}-${formatValue(date.month() + 1)}-${formatValue(1)}`
}

export const filterYears = (min, max) => {
  const _min = dayjs(min)
  const _max = dayjs(max)
  const _years = years().filter(y => {
    return y.value >= _min.year() && y.value <= _max.year()
  })
  return _years
}

export const isLessThanTheMinimum = (min, date) => {
  const _min = dayjs(min)
  const _date = dayjs(date)
  return _date.isBefore(_min)
}

export const isGreaterThanMaximun = (max, date) => {
  const _max = dayjs(max)
  const _date = dayjs(date)
  return _date.isAfter(_max)
}

export const startMonthsFilters = (min, max, date) => {
  let _min = dayjs(min)
  // Init the min month
  _min = dayjs(getDate(_min.year(), _min.month() + 1, 1))
  let _max = dayjs(max)
  // Init the max month
  _max = dayjs(getDate(_max.year(), _max.month() + 1, 1))
  const _date = dayjs(date)
  const _months = month().filter(m => {
    const _dateItem = dayjs(getDate(_date.year(), m.value, 1))
    return (
      (_dateItem.isAfter(_min) || _dateItem.isSame(_min)) &&
      (_dateItem.isBefore(_max) || _dateItem.isSame(_max))
    )
  })
  return _months
}

export const isTheSameMonth = (date1, date2) => {
  const _date1 = dayjs(date1)
  const _date2 = dayjs(date2)
  const _date1Month = _date1.month() + 1
  const _date1Year = _date1.year()
  const _date2Month = _date2.month() + 1
  const _date2Year = _date2.year()
  return _date1Month === _date2Month && _date1Year === _date2Year
}
