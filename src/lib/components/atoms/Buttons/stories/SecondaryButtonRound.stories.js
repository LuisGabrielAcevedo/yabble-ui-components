import React from 'react'

import {SecondaryButtonRound as SecondaryButtonRoundComponent} from '../Buttons'

export default {
  title: 'Yabble/Atoms/Button/SecondaryButtonRound',
  component: SecondaryButtonRoundComponent,
  argTypes: {},
}

const Template = args => <SecondaryButtonRoundComponent {...args} />

export const SecondaryButtonRound = Template.bind({})
SecondaryButtonRound.args = {
  label: 'Check',
  disabled: false,
}
