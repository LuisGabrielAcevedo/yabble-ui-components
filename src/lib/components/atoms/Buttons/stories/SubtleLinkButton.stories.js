import React from 'react'

import {SubtleLinkButton as SubtleLinkButtonComponent} from '../Buttons'

export default {
  title: 'Yabble/Atoms/Button/SubtleLinkButton',
  component: SubtleLinkButtonComponent,
  argTypes: {},
}

const Template = args => <SubtleLinkButtonComponent {...args} />

export const SubtleLinkButton = Template.bind({})
SubtleLinkButton.args = {
  label: 'Primary Button Round',
}
