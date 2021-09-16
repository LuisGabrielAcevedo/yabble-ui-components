import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '../../../../../../utils/testUtils'
import Date from '../Date/Date'

const props = {
  item: {date: 'text'},
  header: {
    key: 'date',
  },
}

describe('components/atoms/Table/Components/Elements/Date/Date', () => {
  it('the component should render the correct text', () => {
    render(<Date {...props} />)
    screen.getByText(props.item[props.header.key])
  })
})
