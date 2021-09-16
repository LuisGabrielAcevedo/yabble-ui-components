/* eslint-disable react/prop-types */
import React from 'react'

import './Badge.scss'

export const Badge = ({label = 'badge', className = '', style = {}}) => {
  return (
    <span className={`badge ${className}`} style={style}>
      {label}
    </span>
  )
}
