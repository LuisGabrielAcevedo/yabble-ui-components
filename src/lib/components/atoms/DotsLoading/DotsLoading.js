import React from 'react'

import './DotsLoading.scss'

export const DotsLoading = ({color}) => {
  const bgColorFormatted = {
    ...(color && {backgroundColor: color})
  }

  return (
    <div className="dots-loading">
      <div className="dots-loading__dot" style={bgColorFormatted}></div>
      <div className="dots-loading__dot" style={bgColorFormatted}></div>
      <div className="dots-loading__dot" style={bgColorFormatted}></div>
    </div>
  )
}
