// import  {remove } from './dom/lib/mutation';
import {add,remove} from '../redux/slices/CartSlice'
import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const Product = ({post}) => {
  const {cart} = useSelector((state)=> state)
  const dispatch = useDispatch();

  const addToCart = () => {
      dispatch(add(post));
      toast.success("Item added to Cart")   
  }

  const removeFromCart= () =>{
    dispatch(remove(post.id));
    toast.error("Item removed to Cart")
  }

  return (
    <div className='product' >
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
      <div>
        <p style={{fontSize:"1.2vw",fontWeight:"bold",textAlign:"center"}}>{post.title.split(" ").slice(0,3).join(" ") + "..."}</p>
      </div>
      <div>
        <p style={{fontSize:"0.9vw",margin:"15px 10px",textAlign:"center"}}>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div >
       <img src={post.image} style={{width:"10vw"}}></img>
      </div>

    <div style={{display:"flex",alignItems:"center" , justifyContent:"space-between",gap:"3vw"}}>      
      <div className='price'>
        <p>$ {post.price}</p>
      </div>
      {
        cart.some((p)=> p.id == post.id)?
        (<button onClick={removeFromCart} style={{cursor:"pointer", marginTop:"2.5vw",fontSize:"15px"}}>
          Remove Item
        </button>):
        (<button onClick={addToCart} style={{cursor:"pointer",marginTop:"2.5vw"}}>
          Add Cart
        </button>)
      }
      </div>

     </div>
    </div>

  )
}

export default Product
