import React from 'react'
import {getNameInitials} from '../../../utils'
import './Avatar.scss'

const Avatar = ({name}) => {
  return (
    <div className="avatar">
      <span className="avatar__text">{getNameInitials(name)}</span>
    </div>
  )
}

export {Avatar}
