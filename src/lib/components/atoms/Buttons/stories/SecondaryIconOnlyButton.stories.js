import React from 'react'

import {SecondaryIconOnlyButton as SecondaryIconOnlyButtonComponent} from '../Buttons'

export default {
  title: 'Yabble/Atoms/Button/SecondaryIconOnlyButton',
  component: SecondaryIconOnlyButtonComponent,
  argTypes: {},
}

const Template = args => <SecondaryIconOnlyButtonComponent {...args} />

export const SecondaryIconOnlyButton = Template.bind({})
SecondaryIconOnlyButton.args = {
  disabled: false,
}
