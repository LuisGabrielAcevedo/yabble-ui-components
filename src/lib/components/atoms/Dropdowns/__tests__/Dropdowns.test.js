import React from 'react'
import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '../../../../utils/testUtils'
import {NestedMenu, NestedMenuItemComp, Menu} from '../Dropdowns'
import {filtersMock} from '../__mocks__/filters'

const nestedMenuItemCompProps = {
  sid: 'demographics',
  hic: jest.fn(),
  filters: filtersMock,
}

let menuProps = {
  filters: filtersMock,
  handleItemClick: jest.fn(),
  item: filtersMock[0],
  setItem: jest.fn(),
}

let nestedMenuProps = {
  addFilter: jest.fn(),
  filters: filtersMock,
  disabled: false,
}

describe('components/atoms/Dropdowns/Dropdowns', () => {
  describe('NestedMenuItemComp', () => {
    it('when this component is rendered, Should have the same amount of elements as demographics filters', () => {
      render(<NestedMenuItemComp {...nestedMenuItemCompProps} />)
      const subjects = filtersMock.filter(
        data => data.subject_type_id === nestedMenuItemCompProps.sid,
      )[0].subjects
      const subjectsRendered = screen.getAllByTestId('dropdown__menu-subitem')
      expect(subjects.length).toBe(subjectsRendered.length)
    })

    it('when one of the elements is clicked, should call the hic function with the correct values', () => {
      render(<NestedMenuItemComp {...nestedMenuItemCompProps} />)
      const subjects = filtersMock.filter(
        data => data.subject_type_id === nestedMenuItemCompProps.sid,
      )[0].subjects
      const subjectsRendered = screen.getAllByTestId('dropdown__menu-subitem')
      fireEvent.click(subjectsRendered[0])
      expect(nestedMenuItemCompProps.hic).toHaveBeenCalledWith({
        subject_id: subjects[0].subject_id,
        subject_type_id: nestedMenuItemCompProps.sid,
      })
    })
  })

  describe('Menu', () => {
    it('when the item is demographics, the Menu component should show the NestedMenuItemComp component', () => {
      menuProps.item = filtersMock[0]
      render(<Menu {...menuProps} />)
      const subjectsRendered = screen.getAllByTestId('dropdown__menu-subitem')
      expect(subjectsRendered.length).toBe(5)
    })

    it('when the item is different to demographics, the Menu component should not show the NestedMenuItemComp component', () => {
      menuProps.item = filtersMock[1]
      render(<Menu {...menuProps} />)
      expect(() => screen.getAllByTestId('dropdown__menu-subitem')).toThrow(
        'Unable to find an element',
      )
    })

    it('when the item is demographics and some item is pressed, the Menu component should not call the handleItemClick prop', () => {
      menuProps.item = filtersMock[0]
      render(<Menu {...menuProps} />)
      const itemsRendered = screen.getAllByTestId('dropdown__menu-item')
      fireEvent.click(itemsRendered[0])
      expect(menuProps.handleItemClick).not.toHaveBeenCalledWith({
        subject_type_id: filtersMock[0].subject_type_id,
        subject_id: '',
      })
    })

    it('when the item is different to demographics and some item is pressed, the Menu component should call the handleItemClick prop', () => {
      menuProps.item = filtersMock[1]
      render(<Menu {...menuProps} />)
      const itemsRendered = screen.getAllByTestId('dropdown__menu-item')
      fireEvent.click(itemsRendered[1])
      expect(menuProps.handleItemClick).toHaveBeenCalledWith({
        subject_type_id: filtersMock[1].subject_type_id,
        subject_id: '',
      })
      fireEvent.mouseOver(itemsRendered[1])
      expect(menuProps.setItem).toHaveBeenCalledWith(filtersMock[1])
    })

    it('when mouseLeave event is dispatched on the container, the componente should call the setItem prop', () => {
      render(<Menu {...menuProps} />)
      const container = screen.getByTestId('dropdown__menu-item-container')
      fireEvent.mouseLeave(container)
      expect(menuProps.setItem).toHaveBeenCalledWith(null)
    })
  })

  describe('NestedMenu', () => {
    it('when add filters button is pressed, the Menu component should exsit', () => {
      render(<NestedMenu {...nestedMenuProps} />)
      expect(() => screen.getAllByTestId('dropdown__menu-item')).toThrow(
        'Unable to find an element',
      )
      const button = screen.getByTestId('add-filters')
      fireEvent.click(button)
      screen.getAllByTestId('dropdown__menu-item')
    })

    it('when a item is pressed, should call the addFilter prop', () => {
      render(<NestedMenu {...nestedMenuProps} />)
      const button = screen.getByTestId('add-filters')
      fireEvent.click(button)
      const itemsRendered = screen.getAllByTestId('dropdown__menu-item')
      fireEvent.click(itemsRendered[1])
      expect(nestedMenuProps.addFilter).toHaveBeenCalledWith({
        subject_type_id: filtersMock[1].subject_type_id,
        subject_id: '',
      })
    })
  })
})
