import React from 'react'

import {FieldError as FieldErrorComponent} from './FieldError'

export default {
  title: 'Yabble/Atoms/FieldError',
  component: FieldErrorComponent,
  argTypes: {
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

const Template = args => <FieldErrorComponent {...args} />

export const DefaultFieldError = Template.bind({})

DefaultFieldError.args = {
  text: 'This is some error text that could be placed below an input component...',
  disabled: false,
}