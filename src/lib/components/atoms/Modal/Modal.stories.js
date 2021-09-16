import React from 'react'
import {action} from '@storybook/addon-actions'

import {Modal as ModalComponent} from './Modal'

export default {
  title: 'Yabble/Atoms/Modal',
  component: ModalComponent,
  argTypes: {},
}

const Template = args => {
  const node = document.createElement('div')
  let rootNode = document.querySelector('#root')
  if (!rootNode) {
    rootNode = document.createElement('div')
    rootNode.setAttribute('id', 'root')
  }
  node.setAttribute('id', 'portal')
  rootNode.after(node)

  return <ModalComponent {...args} />
}

export const DefaultModal = Template.bind({})
DefaultModal.args = {
    onClose: () => action('Close handler was fired!'),
    opened: true,
    backDropClickDisabled: false,
    children: <h3 style={{
      fontFamily: 'SuisseIntl Regular',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '28px',
      marginTop: '10px',
      color: '#5a616b',
      textAlign: 'center',
      margin: 0,
      padding: 40,
    }}>This is a modal component.</h3>
}
