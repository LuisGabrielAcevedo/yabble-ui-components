import React from 'react'
import {Multiselect as MultiselectComponent} from './Multiselects'

export default {
  title: 'Yabble/Atoms/Multiselect',
  component: MultiselectComponent,
  argTypes: {},
}

const Template = args => <MultiselectComponent {...args} />

export const SimpleMultiselect = Template.bind({})
SimpleMultiselect.args = {
    placeholder: 'Choose a value',
    onChange: () => {},
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
    label:"Gender"
}
