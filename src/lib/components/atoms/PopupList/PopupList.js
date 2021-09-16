import React from 'react'
import './PopupList.scss'

const PopupList = ({options = [], onSelect = () => {}}) => {
  return (
    <div className="popup-list__content">
      {options.map(op => (
        <button
          className="popup-list__content__option"
          key={op}
          onClick={() => onSelect(op)}
        >
          {op}
        </button>
      ))}
    </div>
  )
}

export {PopupList}
