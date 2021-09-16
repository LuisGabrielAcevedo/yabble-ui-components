import React from 'react'

import {DatePickerInput as DatePickerInputComponent} from './Inputs'

export default {
  title: 'Yabble/Atoms/Input/DatePickerInput',
  component: DatePickerInputComponent,
  argTypes: {},
}

const Template = args => <DatePickerInputComponent {...args} />

export const DatePickerInput = Template.bind({})
DatePickerInput.args = {
  placeholder: 'Write something',
}
