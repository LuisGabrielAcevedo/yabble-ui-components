import React from 'react'

import {Popup as PopupComponent} from './Popup'

export default {
  title: 'Yabble/Atoms/Popup',
  component: PopupComponent,
  argTypes: {},
}

const Template = args => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <PopupComponent {...args} />
    </div>
  )
}

export const DefaultPopup = Template.bind({})
DefaultPopup.args = {
  onSelect: () => {},
  options: ['Delete'],
}
