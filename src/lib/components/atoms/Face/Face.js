import React from 'react'

export const Face = ({sentiment}) => {
  return {
    negative: (<svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{marginRight: '1em'}}
    >
      <circle cx="16" cy="16" r="15.5" stroke="#333B49" />
      <path
        d="M9.85651 23C10.6341 20.3417 13.0903 18.4 15.9999 18.4C18.9096 18.4 21.3657 20.3417 22.1433 23"
        stroke="#333B49"
        strokeLinecap="round"
      />
      <circle cx="11.9999" cy="12" r="1.1" fill="#333B49" stroke="#333B49" />
      <circle
        cx="19.9994"
        cy="12.0001"
        r="1.1"
        fill="#333B49"
        stroke="#333B49"
      />
    </svg>),
    positive: (<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{marginRight: '1em'}}
    >
      <circle cx="12" cy="12" r="11.5" stroke="#5A616B" />
      <path
        d="M16.7992 13.7969C16.7992 16.4478 14.6502 18.5969 11.9992 18.5969C9.34825 18.5969 7.19922 16.4478 7.19922 13.7969"
        stroke="#5A616B"
      />
      <circle
        cx="9.00078"
        cy="9.00078"
        r="0.7"
        fill="#5A616B"
        stroke="#5A616B"
      />
      <circle
        cx="15.0008"
        cy="9.00078"
        r="0.7"
        fill="#5A616B"
        stroke="#5A616B"
      />
    </svg>),
    neutral: (<svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{marginRight: '1em'}}
    >
      <circle cx="16" cy="16" r="15.5" stroke="#333B49" />
      <circle cx="11.9999" cy="12" r="1.1" fill="#333B49" stroke="#333B49" />
      <circle
        cx="19.9994"
        cy="12.0001"
        r="1.1"
        fill="#333B49"
        stroke="#333B49"
      />
      <line
        x1="10.8999"
        y1="20.9"
        x2="21.0999"
        y2="20.9"
        stroke="#333B49"
        strokeLinecap="round"
      />
    </svg>)
  }[sentiment] || (<span></span>)
}