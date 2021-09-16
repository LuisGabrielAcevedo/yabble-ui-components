import React from 'react'
import ReactDom from 'react-dom'
import {useBodyOverflow} from '../../../hooks'
import './Modal.scss'

export const Modal = ({
  opened,
  children,
  onClose,
  backDropClickDisabled = false,
}) => {
  useBodyOverflow(opened)

  const cardOnClick = e => {
    e.stopPropagation()
  }

  const backdropClick = () => {
    if (!backDropClickDisabled) onClose()
  }

  return opened
    ? ReactDom.createPortal(
        <div
          data-testid="modal-container"
          className="modal-container"
          onClick={backdropClick}
        >
          <div className="modal-container__content" onClick={cardOnClick}>
            {children}
          </div>
        </div>,
        document.getElementById('portal'),
      )
    : null
}
