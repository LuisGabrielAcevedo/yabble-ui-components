import React from 'react';

import {ProgressBar as ProgressBarComponent} from './ProgressBar'

export default {
  title: 'Yabble/Atoms/ProgressBar',
  component: ProgressBarComponent,
  argTypes: {}
}

const Template = args => <ProgressBarComponent {...args} />

export const ProgressBarDefault = Template.bind({})

ProgressBarDefault.args = {
  isAnimating: true
}