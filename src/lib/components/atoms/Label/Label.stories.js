import React from 'react'

import {Label as LabelComponent} from './Label'

export default {
  title: 'Yabble/Atoms/Label',
  component: LabelComponent,
  argTypes: {
    htmlFor: {
      table: {
        disable: true,
      }
    },
    style: {
      table: {
        disable: true,
      }
    },
    className: {
      table: {
        disable: true,
      }
    }
  },
}

const Template = args => <LabelComponent {...args} />

export const DefaultLabel = Template.bind({})

DefaultLabel.args = {
  text: 'First name',
  disabled: false,
  showOptional: false,
}