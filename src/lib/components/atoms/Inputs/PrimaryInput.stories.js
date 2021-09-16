import React from 'react'

import {PrimaryInput as PrimaryInputComponent} from './Inputs'

export default {
  title: 'Yabble/Atoms/Input/PrimaryInput',
  component: PrimaryInputComponent,
  argTypes: {},
}

const Template = args => <PrimaryInputComponent {...args} />

export const PrimaryInput = Template.bind({})
PrimaryInput.args = {
  placeholder: 'Write something',
}
