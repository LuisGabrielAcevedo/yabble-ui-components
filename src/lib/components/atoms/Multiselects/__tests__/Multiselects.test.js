import React from 'react'
import '@testing-library/jest-dom'
import {render} from '../../../../utils/testUtils'
import {Multiselect, colourStyles} from '../Multiselects'

const props = {
  name: 'test-multiselect',
  options: [],
  value: '',
  onChange: jest.fn(),
  placeholder: '',
  label: '',
  disabled: false,
  testId: 'select',
}

describe('components/atoms/Multiselects/Multiselects', () => {
  it('Multiselects', () => {
    render(<Multiselect {...props} />)
  })

  it('styles', () => {
    colourStyles.option({})
    colourStyles.multiValueRemove({})
    colourStyles.noOptionsMessage({})
    const controlStyles = colourStyles.control({})
    const menuPortal = controlStyles.menuPortal({})
    const menu = controlStyles.menu({})
    expect(menuPortal).toMatchObject({zIndex: 9999})
    expect(menu).toMatchObject({zIndex: 9999})
  })
})
