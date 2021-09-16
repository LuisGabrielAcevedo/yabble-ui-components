/* eslint-disable react/prop-types */
import React from 'react';

import {applyClassNameIf} from '../../../utils'
import './Loader.scss'

export const Loader = ({size = 'regular', inverted, className = '', style = {}}) => {
  const sizeModifierClassName = {
    small: 'loader-main--small',
    regular: 'loader-main--regular',
    medium: 'loader-main--medium',
    large: 'loader-main--large'
  }[size] || 'loader-main--regular'

  return (
    <div className={`loader-main ${sizeModifierClassName} ${className}`} style={style}>
      <svg className="loader-main__svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={`loader-main__rectangle ${applyClassNameIf(inverted, 'loader-main__rectangle--inverted')}`} d="M118.652 0.00362863L0 118.656L8.40668 127.062L127.059 8.4103L118.652 0.00362863Z" />
        <g className="loader-main__circle-wrapper">
          <path className={`loader-main__circle ${applyClassNameIf(inverted, 'loader-main__circle--inverted')}`} d="M39.749 19.8149C39.749 30.7653 30.8844 39.6298 19.9341 39.6298C8.98371 39.6298 0.119141 30.7653 0.119141 19.8149C0.119141 8.86457 8.98371 0 19.9341 0C30.8844 0 39.749 8.86457 39.749 19.8149Z" />
        </g>
      </svg>
    </div>
  );
};
