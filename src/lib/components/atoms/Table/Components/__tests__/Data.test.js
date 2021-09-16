import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '../../../../../utils/testUtils'
import Data from '../Data'

const props = {
  data: [{name: 'text'}],
  headers: [
    {
      key: 'name',
      component: 'TextElement',
    },
  ],
}

describe('src/components/atoms/Table/Components/Data/Data', () => {
  it('Data render', () => {
    render(<Data {...props} />)
    screen.getByTestId('table-element-text')
  })
})
