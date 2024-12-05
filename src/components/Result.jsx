import React from 'react'

const Result = ({label,dataItem,type}) => {
  return (
    <>
      <p className='text-secondary-size text-control fw-bold text-uppercase mb-0 text-secondary'>{label}</p>
      <p className='text-primary-size text-control fw-semibold mb-0'>{type} {dataItem}</p>
    </>
  )
}

export default Result
