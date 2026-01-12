import React from 'react'
const ChevronsRight = ({ size = 37, color = '#595757', className, onClick }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    onClick={onClick}
    style={{ cursor: onClick ? 'pointer' : 'default' }}
  >
    <path d='M13 17l5-5-5-5M6 17l5-5-5-5' />
  </svg>
)
export default ChevronsRight
