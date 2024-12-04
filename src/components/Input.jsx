import React from 'react'

const Input = () => {
  return (
    <div className='d-flex flex-column'>
      <h2 className='text-center text-white mb-3 mb-md-4'>IP Address Tracker</h2>
      <form action="">
        <div className="row justify-content-center g-0">
          <div className="col-md-4">
            <div className='bg-white rounded-2 form-control d-flex justify-content-between'>
              <input className='bg-transparent border-0 flex-grow-1' type="text" placeholder='Search for any Ip address or domain' />
              <button className='btn btn-primary'>Serach</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Input
