import React from 'react'

import {PrimaryIconOnlyButton as PrimaryIconOnlyButtonComponent} from '../Buttons'

export default {
  title: 'Yabble/Atoms/Button/PrimaryIconOnlyButton',
  component: PrimaryIconOnlyButtonComponent,
  argTypes: {},
}

const Template = args => <PrimaryIconOnlyButtonComponent {...args} />

export const PrimaryIconOnlyButton = Template.bind({})
PrimaryIconOnlyButton.args = {
  disabled: false,
}
