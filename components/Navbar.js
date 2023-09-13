import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
import {BsCartFill} from 'react-icons/bs'
import { useSelector } from 'react-redux'


const Navbar = () => {

  const {cart} = useSelector((state)=>state)
  return (
    <div className='nav-main'>
      <div  className='container'>
        <div className='navbar'>
          <NavLink to='/'>
            <div className='img-nav'>
               <img className='image' src=''></img>
           </div>
          </NavLink>

          <div className='icons'>
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div style={{position:"relative"}} >
                 <BsCartFill/>
                 {
                  cart.length > 0 &&
                 <span style={{position:"absolute" ,   borderRadius:"100px" , width:"25px",height:"0px", fontSize:"20px"}}>{cart.length}</span>
                 }
              </div>
            </NavLink>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
