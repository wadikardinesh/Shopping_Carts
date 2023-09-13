import React, { useEffect, useState } from 'react'
// import '../index.css'
import Product from '../components/Product'
import Spinner from '../components/Spinner';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const[loading, setLoading] = useState(false)
    const[posts , setPosts] = useState([])

    async function fetchProductData(){
      setLoading(true)
      try {
        const result = await fetch(API_URL);
        const data = await result.json();
        console.log(data)
        setPosts(data)

      } catch (error) {
        console.log("No data found")
        setPosts([])
      }
      setLoading(false)
    }

    useEffect(()=>{
      fetchProductData();
    },[]);


  return (
    <div className='home'>
      
      {
        loading ? (<Spinner/>) : 
        posts.length > 0 ? 
        (<div className='home-grid'>
          {
               posts.map((post) =>{
                return  <Product key={post.id} post={post}/>
               })
          }
           
        </div>):

        (<div style={{display:"flex", justifyContent:"center", alignItems:"center", fontSize:"35px",fontWeight:"bold",marginTop:"5vw"}}>
          <p>No Data Found</p>
        </div>)
        

    }
    {/* <h1>this home page</h1> */}
    </div>
  )
}

export default Home
