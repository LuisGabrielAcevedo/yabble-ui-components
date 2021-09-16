import React from 'react'
import TextElement from '../Text/Text'
import DateElement from '../Date/Date'
import './DynamicSelectElement.scss'

const elements = {
  TextElement: TextElement,
  DateElement: DateElement,
}

function DynamicSelectElement(props) {
  const {item, header} = props
  // External component
  if (typeof header?.component === 'function') {
    return (
      <div className="table-element-dynamic-select__container">
        {header.component(item, header)}
      </div>
    )
  }

  const Element = elements[header.component]

  return (
    <div className="table-element-dynamic-select__container">
      <Element {...{header, item}} />
    </div>
  )
}

export default DynamicSelectElement
