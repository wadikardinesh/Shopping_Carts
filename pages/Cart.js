import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import CartItem from '../components/CartItem'
import '../index.css'


const Cart = () => {

    const {cart} = useSelector((state)=> state)
    const [totalAmount , setTotalAmount] = useState(0)

    useEffect(()=>{
      setTotalAmount(cart.reduce((acc , curr)=>acc + curr.price,0))
    },[cart])

  return (
    <div>
        {
          cart.length > 0 ?
          (<div  className='cart-box'>
            {
              cart.map((item,index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
            <div style={{display:'flex',flexDirection:'column'}}>
              <div className='output'>
                <div>YOUR CART</div>
                <div style={{fontSize:'30px'}}>SUMMARY</div>
                <p>
                  <span style={{color:"black",marginTop:"10px"}}>Total Itams : {cart.length}</span>
                </p>
              </div>
              <div>
                <p style={{fontWeight:"bold",fontSize:'20px'}}>
                  total Amount : ${totalAmount}
                </p>
              </div>
              <button style={{padding:"10px 0px",fontSize:"20px",border:'1px solid gray'}}>Checkout Now</button>
            </div>
         </div>)
           :
           (<div style={{marginTop:"5vw",display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
           <h1>Cart Empty</h1>
           <Link to="/">
             <button>
               Shop Now
             </button>
           </Link>
         </div>)
          
        }
    </div>
  )
}

export default Cart
