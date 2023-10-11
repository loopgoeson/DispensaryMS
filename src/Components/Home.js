import React from 'react'
import img1 from '../Asset/dr1.png'

export const Home = () => {
  let gridstyle={
    display: "grid",
    margin: 150
  }
  let person={
     border:"2px solid black",
     height: "100px",
     
  }
  return (
<div className ="container text-center " style={gridstyle}>
  <div className ="row">
    <div className="col text-center" style={person}>
      <h1>Doctor</h1>
      <img src={img1} alt='Doctor_image' className='h-20 center'></img>
    </div>
    <div className="col text-center" style={person}>
     <h1> Patient/customer</h1> 
    </div>
    <div className="col text-center" style={person}>
      <h1>Admin</h1>
    </div>
  </div>
</div>
   
  )
}
export default Home;