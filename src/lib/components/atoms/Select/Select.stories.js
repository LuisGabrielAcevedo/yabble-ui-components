import React from 'react'

import {Select as SelectComponent} from './Select'

export default {
  title: 'Yabble/Atoms/Select',
  component: SelectComponent,
  argTypes: {},
}

const Template = args => <SelectComponent {...args} />

export const SimpleSelect = Template.bind({})
SimpleSelect.args = {
    placeholder: 'Select a option',
    options: [
        {
            value: 'Option 1',
            label: 'Option 1'
        },
        {
            value: 'Option 2',
            label: 'Option 2'
        },
        {
            value: 'Option 3',
            label: 'Option 3'
        }
    ],
    value: ''
}
