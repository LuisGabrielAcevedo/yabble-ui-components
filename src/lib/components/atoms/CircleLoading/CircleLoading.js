import React from 'react'

import './CircleLoading.scss'

export const CircleLoading = ({text, color}) => {
  const borderColorFormatted = {
    ...(color && {borderColor: color}),
    ...(color && {borderTopColor: color}),
    ...(color && {borderTopColor: color}),
  }

  return (
    <div className="circle-loading">
      <div className="circle-loading__loader-spinner" style={borderColorFormatted}></div>
      {text && (
        <span className="circle-loading__text" style={{color}}>{text}</span>
      )}
    </div>
  )
}
