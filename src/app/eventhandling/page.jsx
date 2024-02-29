'use client'
import React from 'react'

const Eventhandling = () => {
  return (
    <div className='container'> 
        <h1 className='text-center'>Event Handling</h1>
        <hr />
        <button ClassnName='btn btn-primary'
        onClick={ () => { alert ('button was clicked')} } 
        >click Me </button>
         
         <input type="color" onChange={ (e) => { document.body.style.background=e.target.value} } />


    </div>
  )
}

export default Eventhandling;