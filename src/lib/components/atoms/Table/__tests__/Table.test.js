import React from 'react'
import '@testing-library/jest-dom'
import {fireEvent, render, screen} from '../../../../utils/testUtils'
import {Table} from '../Table'

const props = {
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
  data: [],
  pagination: {page: 1, perPage: 10, total: 100},
  onChangePagination: jest.fn(),
  blocking: false,
  sortEvent: jest.fn(),
}

describe('components/atoms/Table/Table', () => {
  it('Table', () => {
    render(<Table {...props} />)
  })

  it('when the user cliked the pagination, should call onChangePagination prop', () => {
    render(<Table {...props} />)
    const paginationButton = screen.getByTestId('chevronRight')
    fireEvent.click(paginationButton)
    expect(props.onChangePagination).toHaveBeenCalled()
  })

  it('Table sort', () => {
    render(<Table {...props} />)
    const sortButton = screen.getByTestId(`sort-projectName-icon`)
    fireEvent.click(sortButton)
    expect(props.sortEvent).toHaveBeenCalledWith({
      field: props.headers[0].key,
      direction: 'ASC',
    })
    fireEvent.click(sortButton)
    expect(props.sortEvent).toHaveBeenCalledWith({
      field: props.headers[0].key,
      direction: 'DES',
    })
    expect(props.sortEvent).toHaveBeenCalled()
  })

  it('Table blocking false', () => {
    render(<Table {...props} />)
    expect(() => screen.getByTestId('table-overlay-block')).toThrow(
      'Unable to find an element',
    )
  })

  it('Table blocking true', () => {
    props.blocking = true
    render(<Table {...props} />)
    screen.getByTestId('table-overlay-block')
  })
})
