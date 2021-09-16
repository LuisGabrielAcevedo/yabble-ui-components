import React from 'react'

import {PrimaryButtonRectangle as PrimaryButtonRectangleComponent} from '../Buttons'

export default {
  title: 'Yabble/Atoms/Button/PrimaryButtonRectangle',
  component: PrimaryButtonRectangleComponent,
  argTypes: {},
}

const Template = args => <PrimaryButtonRectangleComponent {...args} />

export const PrimaryButtonRectangle = Template.bind({})
PrimaryButtonRectangle.args = {
  label: 'Label',
  disabled: false,
  isLoading: false,
}
