import React from 'react'

import './Card.scss';

export const Card = ({children, ...props}) => {
  return (
    <div className="card u-flex-column" {...props}>
      {children}
    </div>
  )
}