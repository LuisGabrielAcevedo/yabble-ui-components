import React from 'react'

import {DangerButtonRectangle as DangerButtonRectangleComponent} from '../Buttons'

export default {
  title: 'Yabble/Atoms/Button/DangerButtonRectangle',
  component: DangerButtonRectangleComponent,
  argTypes: {},
}

const Template = args => <DangerButtonRectangleComponent {...args} />

export const DangerButtonRectangle = Template.bind({})
DangerButtonRectangle.args = {
  label: 'Label',
  disabled: false,
  isLoading: false,
}
