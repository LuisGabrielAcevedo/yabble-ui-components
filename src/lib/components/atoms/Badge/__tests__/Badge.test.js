import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '../../../../utils/testUtils'
import {Badge} from '../Badge'

describe('components/atoms/Badge/Badge', () => {
  it('the default label should be badge', () => {
    render(<Badge />)
    screen.getByText('badge')
  })
})
