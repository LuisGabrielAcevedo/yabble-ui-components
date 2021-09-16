import React from 'react'

import {PrimaryButtonRound as PrimaryButtonRoundComponent} from '../Buttons'

export default {
  title: 'Yabble/Atoms/Button/PrimaryButtonRound',
  component: PrimaryButtonRoundComponent,
  argTypes: {},
}

const Template = args => <PrimaryButtonRoundComponent {...args} />

export const PrimaryButtonRound = Template.bind({})
PrimaryButtonRound.args = {
  label: 'Primary Button Round',
  disabled: false,
}
