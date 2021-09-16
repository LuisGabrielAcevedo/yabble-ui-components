import React from 'react'
import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '../../../../utils/testUtils'
import {Modal} from '../Modal'

let props = {
  opened: true,
  children: '',
  onClose: jest.fn(),
  backDropClickDisabled: false,
}

describe('components/atoms/Modal/Modal', () => {
  beforeAll(() => {
    const portalRoot = document.createElement('div')
    portalRoot.setAttribute('id', 'portal')
    document.body.appendChild(portalRoot)
  })

  it('Modal', () => {
    render(<Modal {...props} />)
    const backDrop = screen.getByTestId('modal-container')
    fireEvent.click(backDrop)
    expect(props.onClose).toHaveBeenCalled()
  })

  it('when backDropClickDisabled is true, should not call the onClose prop', () => {
    props.backDropClickDisabled = true
    render(<Modal {...props} />)
    const backDrop = screen.getByTestId('modal-container')
    fireEvent.click(backDrop)
    expect(props.onClose).not.toHaveBeenCalled()
  })
})
