import React from 'react'

import {TextArea as TextAreaComponent} from './TextArea'

export default {
  title: 'Yabble/Atoms/Texarea',
  component: TextAreaComponent,
  argTypes: {},
}

const Template = args => <TextAreaComponent {...args} />

export const TextArea = Template.bind({})
TextArea.args = {
    placeholder: 'Write something'
}
