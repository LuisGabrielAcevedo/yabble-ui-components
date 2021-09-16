import React from 'react'

import {TertiaryIconOnlyButton as TertiaryIconOnlyButtonComponent} from '../Buttons'

export default {
  title: 'Yabble/Atoms/Button/TertiaryIconOnlyButton',
  component: TertiaryIconOnlyButtonComponent,
  argTypes: {},
}

const Template = args => <TertiaryIconOnlyButtonComponent {...args} />

export const TertiaryIconOnlyButton = Template.bind({})
TertiaryIconOnlyButton.args = {
  selected: false,
}
