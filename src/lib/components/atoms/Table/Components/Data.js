import React from 'react'

import DynamicSelectElement from './Elements/DynamicSelectElement/DynamicSelectElement'
import './Data.scss'

function Data(props) {
  const {data, headers} = props
  return (
    <div className="table-component-data__container">
      {data.map((item, i) => (
        <div className="table-component-data__row" key={i}>
          {headers.map((header, j) => {
            const style = header.width
              ? {width: header.width}
              : {flex: `${header.flex || 1} 1 0%`}
            return (
              <div className="table-component-data__row-item" key={j} {...{style}}>
                <DynamicSelectElement {...{item, header}} />
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Data
