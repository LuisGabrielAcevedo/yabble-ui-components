import React from 'react'
import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '../../../../../utils/testUtils'
import Pagination from '../Pagination'

let props = {
  paginationData: {total: 20, from: 1, to: 10, page: 1, pages: 2},
  setPage: jest.fn(),
}

describe('src/components/atoms/Table/Components/Pagination/Pagination', () => {
  it('Pagination render', () => {
    render(<Pagination {...props} />)
    screen.getByText('Showing')
    screen.getByText(String(props.paginationData.from))
    screen.getByText('to')
    screen.getByText(String(props.paginationData.to))
    screen.getByText(`of ${props.paginationData.total} reports`)
  })

  it('next works', () => {
    props.paginationData = {total: 20, from: 1, to: 10, page: 1, pages: 2}
    render(<Pagination {...props} />)
    const chevronLeft = screen.getByTestId('chevronLeft')
    fireEvent.click(chevronLeft)
    expect(props.setPage).not.toHaveBeenCalled()
    const chevronRight = screen.getByTestId('chevronRight')
    fireEvent.click(chevronRight)
    expect(props.setPage).toHaveBeenCalledWith(2)
  })

  it('prev works', () => {
    props.paginationData = {total: 20, from: 11, to: 20, page: 2, pages: 2}
    render(<Pagination {...props} />)
    const chevronRight = screen.getByTestId('chevronRight')
    fireEvent.click(chevronRight)
    expect(props.setPage).not.toHaveBeenCalled()
    const chevronLeft = screen.getByTestId('chevronLeft')
    fireEvent.click(chevronLeft)
    expect(props.setPage).toHaveBeenCalledWith(1)
  })
})
