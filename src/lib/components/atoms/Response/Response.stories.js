import React from 'react'

import {Response as ResponseComponent} from './Response'

export default {
  title: 'Yabble/Atoms/Response',
  component: ResponseComponent,
  argTypes: {},
}

const Template = args => (
  <div style={{
    maxWidth: '640px',
    padding: '24px',
  }}>
    <ResponseComponent {...args} id="some-id" />
  </div>
)

export const ReponseDefault = Template.bind({})

ReponseDefault.args = {
  text: 'This is the response text...',
  tags: ['Lorem', 'ipsum', 'dolor', 'sit'],
  sentiment: 'positive',
}