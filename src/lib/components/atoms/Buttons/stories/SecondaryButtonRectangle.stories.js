import React from 'react'

import {SecondaryButtonRectangle as SecondaryButtonRectangleComponent} from '../Buttons'

export default {
  title: 'Yabble/Atoms/Button/SecondaryButtonRectangle',
  component: SecondaryButtonRectangleComponent,
  argTypes: {},
}

const Template = args => <SecondaryButtonRectangleComponent {...args} />

export const SecondaryButtonRectangle = Template.bind({})
SecondaryButtonRectangle.args = {
  label: 'Check',
  disabled: false,
  isLoading: false,
}
