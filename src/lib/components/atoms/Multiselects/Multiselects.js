import React from 'react'
import Select, {components} from 'react-select'

export const colourStyles = {
  control: styles => ({
    ...styles,
    menuPortal: provided => ({...provided, zIndex: 9999}),
    menu: provided => ({...provided, zIndex: 9999}),
    flexGrow: 1,
    fontFamily: "SuisseIntl Regular",
    fontSize: '16px',
    backgroundColor: '#F8F9FD',
    border: '1px solid ' + '#ECEFF3',
    borderRadius: '4px',
    minHeight: '40px',
    color: '#333B49',
  }),
  option: styles => {
    return {
      ...styles,
      fontFamily: "SuisseIntl Regular",
      fontSize: '16px',
      backgroundColor: 'white',
      color: '#333B49',
      cursor: 'pointer',
      ':active': {
        ...styles[':active'],
        backgroundColor: '#D6DAE1',
      },
      ':hover': {
        ...styles[':hover'],
        backgroundColor: '#ECEFF3',
      },
    }
  },
  multiValueRemove: styles => ({
    ...styles,
    ':hover': {
      backgroundColor: 'transparent',
    },
  }),
  noOptionsMessage: styles => ({
    ...styles,
    fontFamily: "SuisseIntl Regular",
  }),
}

const MultiValueRemove = props => {
  return (
    <components.MultiValueRemove {...props}>
      <button className="flag-icon-container" style={{padding: '4px'}}>
        <svg
          width="12"
          height="12"
          className="flag-icon"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.619758 11.2043C0.424318 11.3988 0.415609 11.7233 0.600307 11.9292C0.785005 12.135 1.09317 12.1442 1.28861 11.9497L6.48286 6.78009L11.6405 11.9262C11.8357 12.1209 12.1442 12.1124 12.3294 11.9072C12.5147 11.7019 12.5066 11.3776 12.3114 11.1828L7.1917 6.07463L12.3119 0.978712C12.5074 0.7842 12.5161 0.459662 12.3314 0.253837C12.1467 0.048011 11.8385 0.0388401 11.6431 0.233351L6.48371 5.36822L1.34015 0.236217C1.14493 0.0414305 0.836488 0.0499304 0.651236 0.255202C0.465983 0.460473 0.474067 0.784784 0.669292 0.97957L5.77487 6.07369L0.619758 11.2043Z"
          />
        </svg>
      </button>
    </components.MultiValueRemove>
  )
}

const ClearIndicator = props => {
  return (
    <components.ClearIndicator {...props}>
      <div className="flag-icon2-container">
        <svg
          width="10"
          height="10"
          className="flag-icon2"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.619758 11.2043C0.424318 11.3988 0.415609 11.7233 0.600307 11.9292C0.785005 12.135 1.09317 12.1442 1.28861 11.9497L6.48286 6.78009L11.6405 11.9262C11.8357 12.1209 12.1442 12.1124 12.3294 11.9072C12.5147 11.7019 12.5066 11.3776 12.3114 11.1828L7.1917 6.07463L12.3119 0.978712C12.5074 0.7842 12.5161 0.459662 12.3314 0.253837C12.1467 0.048011 11.8385 0.0388401 11.6431 0.233351L6.48371 5.36822L1.34015 0.236217C1.14493 0.0414305 0.836488 0.0499304 0.651236 0.255202C0.465983 0.460473 0.474067 0.784784 0.669292 0.97957L5.77487 6.07369L0.619758 11.2043Z"
          />
        </svg>
      </div>
    </components.ClearIndicator>
  )
}

export const Multiselect = ({
  name,
  options,
  value,
  onChange,
  placeholder,
  label,
  disabled,
  testId,
}) => {
  return (
    <Select
      noOptionsMessage={() => 'There are no more options'}
      isMulti
      className="basic-multi-select"
      classNamePrefix={'select_' + label}
      components={{MultiValueRemove, ClearIndicator}}
      styles={colourStyles}
      style={{flexGrow: 1}}
      {...{name, options, value, onChange, placeholder, testId}}
      isDisabled={disabled}
    />
  )
}
