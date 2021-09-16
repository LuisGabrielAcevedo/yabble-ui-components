import React from 'react'

import {DatePicker as DatePickerComponent} from './DatePicker'

export default {
  title: 'Yabble/Atoms/Datepicker',
  component: DatePickerComponent,
  argTypes: {},
}

const Template = args => <DatePickerComponent {...args} />

export const DatePicker = Template.bind({})
DatePicker.args = {
  setDisabled: () => {},
  min: '2021-04-23T09:43:39.000Z',
  max: new Date(),
  filters: [],
  handleChangeDate: () => {},
}
