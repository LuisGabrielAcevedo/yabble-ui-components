import React from 'react'
import './Divider.scss'

export const Divider = ({marginTop = '32px', marginBottom = '32px'}) => {
  return <div className="divider" style={{marginBottom, marginTop}}></div>
}
