import dayjs from 'dayjs'
import {
  isEndDate,
  isLessThanTheMinimum,
  isStartDate,
  isTheSameMonth,
  isGreaterThanMaximun,
  currentDate,
  subtractMonth,
} from '../data'

describe('data of DatePicker', () => {
  it('isTheSameMonth', () => {
    let resuslt = isTheSameMonth('2020-05-03', '2020-05-03')
    expect(resuslt).toBeTruthy()
    resuslt = isTheSameMonth('2020-06-03', '2020-05-03')
    expect(resuslt).toBeFalsy()
  })

  it('isStartDate', () => {
    let resuslt = isStartDate('2020-05-03', '2020-05-03')
    expect(resuslt).toBeTruthy()
    resuslt = isStartDate('2020-06-03', '2020-05-03')
    expect(resuslt).toBeFalsy()
  })

  it('isEndDate', () => {
    let resuslt = isEndDate('2020-05-03', '2020-05-03')
    expect(resuslt).toBeTruthy()
    resuslt = isEndDate('2020-06-03', '2020-05-03')
    expect(resuslt).toBeFalsy()
  })

  it('isLessThanTheMinimum', () => {
    let resuslt = isLessThanTheMinimum('2020-05-03', '2020-04-03')
    expect(resuslt).toBeTruthy()
    resuslt = isLessThanTheMinimum('2020-04-03', '2020-05-03')
    expect(resuslt).toBeFalsy()
  })

  it('isGreaterThanMaximun', () => {
    let resuslt = isGreaterThanMaximun('2020-04-03', '2020-05-03')
    expect(resuslt).toBeTruthy()
    resuslt = isGreaterThanMaximun('2020-05-03', '2020-04-03')
    expect(resuslt).toBeFalsy()
  })

  it('isGreaterThanMaximun', () => {
    let resuslt = isGreaterThanMaximun('2020-04-03', '2020-05-03')
    expect(resuslt).toBeTruthy()
    resuslt = isGreaterThanMaximun('2020-05-03', '2020-04-03')
    expect(resuslt).toBeFalsy()
  })

  it('currentDate', () => {
    let resuslt = currentDate()
    const date = dayjs(new Date())
    expect(resuslt).toMatchObject({
      day: date.date(),
      month: date.month() + 1,
      year: date.year(),
    })
  })

  it('subtractMonth', () => {
    let resuslt = subtractMonth('2020-04-03')
    expect(resuslt).toBe('2020-03-01')
  })
})
