/* eslint-disable react/prop-types */
import React, {useCallback} from 'react'
import {useNProgress} from '@tanem/react-nprogress'

import {formatClassName} from '../../../utils'
import './ProgressBar.scss'

export const ProgressBar = ({isAnimating}) => {
  const {isFinished, progress} = useNProgress({
    isAnimating,
    incrementDuration: 1,
  })

  const getContainerClassName = useCallback(() => {
    return formatClassName('', [
      [isFinished, 'progress-bar__container--finished'],
    ])
  }, [isFinished])

  const calculateBarMarginLeft = () => `${(-1 + progress) * 100}%`

  return (
    <div
      data-testid="progress-bar__container"
      className={`progress-bar__container ${getContainerClassName()}`}
    >
      <div
        className="progress-bar__bar"
        style={{marginLeft: calculateBarMarginLeft()}}
      >
        <div className="progress-bar__bar__shadow"></div>
      </div>
    </div>
  )
}
