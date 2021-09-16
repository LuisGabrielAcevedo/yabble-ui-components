import React from 'react'

import {PrimaryLinkButton as PrimaryLinkButtonComponent} from '../Buttons'

export default {
  title: 'Yabble/Atoms/Button/PrimaryLinkButton',
  component: PrimaryLinkButtonComponent,
  argTypes: {},
}

const Template = args => <PrimaryLinkButtonComponent {...args} />

export const PrimaryLinkButton = Template.bind({})
PrimaryLinkButton.args = {
  label: 'Link',
  disabled: false,
}
