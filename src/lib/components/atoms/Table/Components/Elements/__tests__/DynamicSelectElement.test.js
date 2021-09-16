import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '../../../../../../utils/testUtils'
import DynamicSelectElement from '../DynamicSelectElement/DynamicSelectElement'

const props = {
  item: {name: 'text'},
  header: {
    key: 'name',
    component: 'TextElement',
  },
}

describe('src/components/atoms/Table/Components/Elements/DynamicSelectElement/DynamicSelectElement', () => {
  it('the component should render the correct text', () => {
    render(<DynamicSelectElement {...props} />)
    screen.getByTestId('table-element-text')
  })
})
