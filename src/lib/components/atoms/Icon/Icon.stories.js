import React from 'react'

import {Icon as IconComponent} from './Icon'

export default {
  title: 'Yabble/Atoms/Icon',
  component: IconComponent,
  argTypes: {
    icon: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    style: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    }
  }
}

const Template = args => <IconComponent {...args} />

export const DefaultIcon = Template.bind({})

DefaultIcon.args = {
  size: 32,
  disabled: false,
  iconColor: '#1054dd'
}