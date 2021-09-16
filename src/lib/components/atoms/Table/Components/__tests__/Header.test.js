import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '../../../../../utils/testUtils'
import Header from '../Header'

const props = {
  sortData: {field: '', down: true},
  setSortData: jest.fn(),
  headers: [
    {
      label: 'Project',
      key: 'projectName',
      component: 'TextElement',
      flex: 1.9,
      sort: true,
      initSort: false,
      sortType: 'string',
    },
  ],
}

describe('src/components/atoms/Table/Components/Header/Header', () => {
  it('Header render', () => {
    render(<Header {...props} />)
    screen.getByText(props.headers[0].label)
  })
})
