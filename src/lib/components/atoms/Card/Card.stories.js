import React from 'react'

import {Card as CardComponent} from './Card'

export default {
  title: 'Yabble/Atoms/Card',
  component: CardComponent,
  argTypes: {},
}

const Template = args => <CardComponent {...args} />

export const DefaultCard = Template.bind({})
DefaultCard.args = {
    children: <h3 style={{
      fontFamily: 'SuisseIntl Regular',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '28px',
      marginTop: '10px',
      color: '#5a616b',
      margin: 0,
    }}>This is a card component.</h3>
}
