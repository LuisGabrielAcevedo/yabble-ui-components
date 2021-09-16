import React from 'react'
import './PrimaryLayoutContainer.scss'

const PrimaryLayoutContainer = ({children}) => {
  return (
    <div className="primary-layout-container">
      <div className="primary-layout-container__background">
        <div className="primary-layout-container__rotate">
          <div className="primary-layout-container__row">
            <div className="primary-layout-container__section1"></div>
            <div className="primary-layout-container__section2"></div>
          </div>
        </div>
      </div>
      <div className="primary-layout-container__content">{children}</div>
    </div>
  )
}

export {PrimaryLayoutContainer}
