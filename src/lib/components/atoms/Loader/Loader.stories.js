import React from 'react';

import {Loader as LoaderComponent} from './Loader'

export default {
  title: 'Yabble/Atoms/Loader',
  component: LoaderComponent,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'regular', 'medium', 'large']
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
    }
  }
}

const Template = args => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: args.inverted ? '#181e26' : '#fff'
    }}>
      <LoaderComponent {...args} />
    </div>
  )
}

export const LoaderDefault = Template.bind({})

LoaderDefault.args = {
  size: 'regular',
  inverted: false
}