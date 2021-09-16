import React from 'react'
import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '../../../../utils/testUtils/index'
import {DatePicker, Calendar} from '../DatePicker'

const props = {
  handleChangeDate: jest.fn(),
  startValue: '',
  endValue: '',
  max: '2021-08-29T22:20:13',
  min: '2021-04-19T09:44:11',
  disabled: false,
  filters: [],
  id: 'id',
  setDisabled: jest.fn(),
}

const calendarProps = {
  intervalDate: '2021-05-01',
  setIntervalDate: jest.fn(),
  monthList: [{value: 5, label: 'May'}],
  yearList: [{value: 2021, label: 2021}],
  startDateSelected: '2021-04-26',
  endDateSelected: '2021-04-26',
  setDateSelectedAction: jest.fn(),
  isValid: jest.fn(),
  hoverDate: '2021-04-26',
  setHoverDate: jest.fn(),
  max: '2021-04-26',
  disabled: false,
  type: 'to',
}

describe('components/atoms/DatePicker', () => {
  it('Should open modal when input is clicked', () => {
    render(<DatePicker {...props} />)
    expect(() => screen.getByText('Apply')).toThrow('Unable to find an element')
    const input = screen.getAllByPlaceholderText('dd/mm/yyyy')[0]
    fireEvent.click(input)
    screen.getByText('Apply')
  })

  it('Should close modal when cancel button is clicked', () => {
    render(<DatePicker {...props} />)
    expect(() => screen.getByText('Cancel')).toThrow(
      'Unable to find an element',
    )
    const input = screen.getAllByPlaceholderText('dd/mm/yyyy')[0]
    fireEvent.click(input)
    const cancelButton = screen.getByText('Cancel')
    fireEvent.click(cancelButton)
    expect(() => screen.getByText('Cancel')).toThrow(
      'Unable to find an element',
    )
  })

  it('when already exists a selected date, should show the correct format', () => {
    props.startValue = '2021-05-03'
    props.endValue = '2021-05-14'
    render(<DatePicker {...props} />)
    screen.getByDisplayValue('03/05/2021')
    screen.getByDisplayValue('14/05/2021')
  })

  it('when already exists a selected date, should show the correct format', () => {
    props.startValue = '2020-05-03'
    props.endValue = '2021-05-14'
    render(<DatePicker {...props} />)
    screen.getByDisplayValue('03/05/2020')
    screen.getByDisplayValue('14/05/2021')
  })

  it('select a range', () => {
    props.startValue = '2020-05-03'
    props.endValue = '2021-05-14'
    render(<DatePicker {...props} />)
    const input = screen.getAllByPlaceholderText('dd/mm/yyyy')[0]
    fireEvent.click(input)
    const startButton = screen.getByTestId('calendar-day-from-1')
    fireEvent.click(startButton)
    const endButton = screen.getByTestId('calendar-day-to-1')
    fireEvent.click(endButton)
  })

  it('Calendar events', () => {
    render(<Calendar {...calendarProps} />)
    const startButton = screen.getByTestId('day-to-1')
    fireEvent.mouseOver(startButton)
    expect(calendarProps.setHoverDate).toHaveBeenCalled()
  })
})
