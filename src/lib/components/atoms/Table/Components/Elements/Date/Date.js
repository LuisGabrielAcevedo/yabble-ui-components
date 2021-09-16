import React from 'react'
import dayjs from 'dayjs'
import './Date.scss'

function DateElement(props) {
  const {
    item,
    header: {key},
  } = props
  const date = item[key]
  const isValid = dayjs(date).isValid()
  return (
    <div
      data-testid="table-element-date"
      className="table-element-date__container"
    >
      <div className="table-element-date__text">
        {date && isValid ? dayjs(date).format('DD-MM-YYYY') : date}
      </div>
    </div>
  )
}

export default DateElement
