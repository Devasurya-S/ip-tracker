import React from 'react'
import Result from '../components/Result'

const Output = () => {
  return (
    <div className='mt-5'>
      <div className="container">
        <div className="row bg-white rounded-4 p-4">
          <div className="col-3 border-end">
            <Result/>
          </div>
          <div className="col-3 border-end">
            <Result/>
          </div>
          <div className="col-3 border-end">
            <Result/>
          </div>
          <div className="col-3">
            <Result/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Output
