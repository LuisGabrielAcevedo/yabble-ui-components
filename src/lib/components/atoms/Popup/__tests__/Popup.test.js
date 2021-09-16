import React from 'react'
import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '../../../../utils/testUtils'
import {Popup} from '../Popup'

const props = {
  options: ['Delete'],
  onSelect: jest.fn(),
}

describe('components/atoms/Popup/Popup', () => {
  it('popup items', () => {
    render(<Popup {...props} />)
    expect(() => screen.getByText(props.options[0])).toThrow(
      'Unable to find an element',
    )
    const button = screen.getByTestId('popup-button')
    fireEvent.click(button)
    screen.getByText(props.options[0])
  })

  it('when a item is pressed, the component should call onSelect prop', () => {
    render(<Popup {...props} />)
    const button = screen.getByTestId('popup-button')
    fireEvent.click(button)
    const item = screen.getByText(props.options[0])
    fireEvent.click(item)
    expect(props.onSelect).toHaveBeenLastCalledWith(props.options[0])
  })
})
