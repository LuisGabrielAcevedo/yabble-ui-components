import React from 'react'

import {CircleLoading} from './CircleLoading'

export default {
  title: 'Yabble/Atoms/CircleLoading',
  component: CircleLoading,
  argTypes: {},
}

const Template = args => <CircleLoading {...args} />

export const Circle = Template.bind({})
Circle.args = {
  color: '#2c6ced',
  text: 'loading...'
}
