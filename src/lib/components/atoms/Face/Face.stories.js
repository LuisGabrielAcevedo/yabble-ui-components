import React from 'react'

import {Face as FaceComponent} from './Face'

export default {
  title: 'Yabble/Atoms/Face',
  component: FaceComponent,
  argTypes: {
    sentiment: {
      control: {
        type: "select",
        options: ["positive", "negative", "neutral"]
      }
    }
  },
}

const Template = args => <FaceComponent {...args} />

export const FaceDefault = Template.bind({})

FaceDefault.args = {
  sentiment: 'positive'
}