import React, {useRef, useState} from 'react'

import './Text.scss'

function TextElement(props) {
  const textContainer = useRef(null)
  let timer = null
  const [tooltip, setTooltip] = useState(false)
  const text = useRef(null)
  const {
    item,
    header: {key},
  } = props

  const onMouseOver = () => {
    const containerWidth = textContainer.current.offsetWidth
    const textWidth = text.current.offsetWidth
    if (textWidth >= containerWidth) {
      timer = setTimeout(() => {
        setTooltip(true)
      }, 400)
    }
  }

  const onMouseOut = () => {
    clearTimeout(timer)
    setTooltip(false)
  }

  return (
    <div
      data-testid="table-element-text"
      className="table-element-text__container"
      ref={textContainer}
    >
      <div
        className="table-element-text__text"
        data-testid="table-element-text__text"
        ref={text}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {item[key]}
      </div>
      {tooltip && (
        <div
          data-testid="table-element-text__tooltip"
          className="table-element-text__tooltip"
        >
          <div className="table-element-text__tooltip-content">
            <span>{item[key]}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default TextElement
