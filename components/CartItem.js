import React from 'react'
import toast from 'react-hot-toast';
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import {remove} from  '../redux/slices/CartSlice'

const CartItem = ({item , itemIndex}) => {
  const dispatch = useDispatch();

    const removeFromCart =() =>{
      dispatch(remove(item.id));
      toast.error("Item Removed");
    }

  return (
    <div style={{display:'flex'}}>
          <div >
        <div style={{display:'flex',borderBottom:"1px solid black",width:'25vw'}}>
          <div >
            <img style={{width:"10vw"}} src={item.image}></img>
          </div>
          <div>
            <h1>{item.title.split(" ").slice(0,4).join(" ")+ "..."}</h1>
            <p style={{marginTop:"0.2vw"}}>{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            <div style={{display:'flex', justifyContent:'space-between',gap:'vw',marginTop:"2vw"}}>
              <p style={{color:"green",fontWeight:"bold"}}>${item.price}</p>
              <div onClick={removeFromCart} style={{cursor:'pointer',fontSize:'1.6vw',color:'red'}}>
                 <MdDelete/>
              </div>
            </div>
          </div>
          
        </div>
        
    </div>
    </div>

  )
}

export default CartItem
