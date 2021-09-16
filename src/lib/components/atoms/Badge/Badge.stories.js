import React from 'react'

import {Badge as BadgeComponent} from './Badge'

export default {
  title: 'Yabble/Atoms/Badge',
  component: BadgeComponent,
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    style: {
      table: {
        disable: true,
      },
    },
  },
}

const Template = args => <BadgeComponent {...args} />

export const DefaultBadge = Template.bind({})
DefaultBadge.args = {
  label: 'Lorem ipsum',
}
