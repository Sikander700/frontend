import React from 'react'

const home = () => {

  const sitetitle = 'Digipodium' ;
  const num1 = 10;
  const num2 = 20;

  const mystyles = {
    textalign: 'center'
  }

  const addNums = (a, b) => {
    return a+b;
  }

  return (
    
    <div>
      <h1 className= 'my-btn' style={mystyles}>
        {sitetitle}
      </h1>

      <h4>{num1 * num2}</h4>

      <p>{addNums(56, 29)}</p>

      <hr />

      <input type= "text"/>
      <h1 style={{color : 'red', fontsize : '2rem'}}>my next.js app</h1>
      <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg"/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ut, reiciendis velit fugit sapiente repellat facere iste consequuntur ab similique molestiae commodi, non vitae. Nostrum explicabo ut earum cupiditate ipsa?</p>
    </div>
  )
}

export default home