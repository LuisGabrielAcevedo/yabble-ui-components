import React from 'react'

import {DotsLoading} from './DotsLoading'

export default {
  title: 'Yabble/Atoms/DotsLoading',
  component: DotsLoading,
  argTypes: {},
}

const Template = args => <DotsLoading {...args} />

export const Dots = Template.bind({})
Dots.args = {
  color: '#2c6ced',
}
