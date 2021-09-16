import React from 'react'
import lightCopyIcon from './../../../assets/icons/svg/copy-light.svg'
import {formatClassName, applyVendorPrefix} from '../../../utils'
import './Icon.scss'

export const Icon = ({
  size = 24,
  disabled,
  icon = lightCopyIcon,
  iconColor,
  className = '',
  style = {},
}) => {
  const getClassName = () =>
    formatClassName(className, [[disabled, 'icon--disabled']])

  const stylesFormatted = {
    ...(iconColor && {background: iconColor}),
  }

  return (
    <span
      style={{
        height: `${size}px`,
        width: `${size}px`,
        ...applyVendorPrefix(
          'mask',
          `url(${icon}) center center / contain no-repeat`,
        ),
        ...stylesFormatted,
        ...style,
      }}
      className={`icon ${getClassName()}`}
    ></span>
  )
}
