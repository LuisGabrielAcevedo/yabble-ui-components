import React from 'react'

import arrowDown from './../../../../assets/icons/svg/arrow-down.svg'
import arrowUp from './../../../../assets/icons/svg/arrow-up.svg'
import {SecondaryIconOnlyButton} from '../../Buttons/Buttons'
import './Header.scss'

const iconButtonStyle = {height: '28px', width: '28px', margin: '4px'}
const iconStyles = {height: '16px', width: '16px'}

function Header(props) {
  const {
    headers,
    sortData: {field, down},
    setSortData,
  } = props
  const onClick = (_field, direction, sortType) => {
    setSortData({
      down: direction,
      field: _field,
      sortType,
    })
  }
  return (
    <div className="table-component-header__container">
      {headers.map((header, i) => {
        const {sort, sortType, width, flex, label, key, initSort} = header
        const style = width ? {width: width} : {flex: `${flex || 1} 1 0%`}
        const direction = key === field ? !down : initSort
        return (
          <div className="table-component-header__item" key={i} {...{style}}>
            <div className="table-component-header__text">{label}</div>
            {sort && (
              <SecondaryIconOnlyButton
                testId={`sort-${key}-icon`}
                onClick={() => onClick(key, direction, sortType)}
                icon={key === field && !down ? arrowUp : arrowDown}
                {...{iconStyles}}
                style={iconButtonStyle}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Header
