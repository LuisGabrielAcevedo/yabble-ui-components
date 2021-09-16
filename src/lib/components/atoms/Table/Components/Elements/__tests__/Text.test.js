import React from 'react'
import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '../../../../../../utils/testUtils'
import Text from '../Text/Text'

const props = {
  item: {
    name: 'text',
  },
  header: {
    key: 'name',
  },
}

describe('components/atoms/Table/Components/Elements/Text/Text', () => {
  it('the component should render the correct text', () => {
    render(<Text {...props} />)
    screen.getByText(props.item[props.header.key])
  })

  // it('tooltip', () => {
  //   render(<Text {...props} />)
  //   expect(() => screen.getByTestId('table-element-text__tooltip')).toThrow(
  //     'Unable to find an element',
  //   )
  //   const text = screen.getByText(props.item[props.header.key])
  //   fireEvent.mouseOver(text)
  //   screen.getByTestId('table-element-text__tooltip')
  //   fireEvent.mouseOut(text)
  //   expect(() => screen.getByTestId('table-element-text__tooltip')).toThrow(
  //     'Unable to find an element',
  //   )
  // })
})
