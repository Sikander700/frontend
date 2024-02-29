import React from 'react' ;
import classes from './login.module.css'
const login = () => {
  return (
    <div>
        login

        <button className={classes.mybtn}>submit</button>
        <button className='my-btn'>login Now</button>
    </div>
  )
}

export default login;