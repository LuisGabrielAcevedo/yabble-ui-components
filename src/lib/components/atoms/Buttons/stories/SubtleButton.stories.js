import React from 'react'

import {SubtleButton as SubtleButtonComponent} from '../Buttons'

export default {
  title: 'Yabble/Atoms/Button/SubtleButton',
  component: SubtleButtonComponent,
  argTypes: {
    isLoading: {
      table: {
        disable: true,
      },
    },
  },
}

const Template = args => <SubtleButtonComponent {...args} />

export const SubtleButton = Template.bind({})
SubtleButton.args = {
  label: 'Label',
  disabled: false,
}
