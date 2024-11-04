import React from 'react'

const App = () => {
  return (
    <div className=' bg-blue-500'>
      <p className='text-white font-xl '>Verify Your Age.</p>
      <p className='text-gray-100 font-medium'> Please confirm your birth year.This data will not be stored.</p>
      <input type="text" placeholder='Your birth year ' className='bg-gray-300 border rounded-lg'/>
      <button className='text-white bg-grey-100 p-6 font-semibold border rounded-lg' >Continue</button>
    </div>
  )
}

export default App
