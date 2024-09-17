import React, { useEffect, useState } from 'react'
import axios from "../../utils/axios"
import requests from "../../utils/requests"
import "./banner.css"


const Banner = () => {
  const [movie, setMovie]=useState({}); 
  // this is gonna accept data so its an object

  useEffect(()=> {
    (async ()=> {
      try{
        const request = await axios.get(requests.fetchComedyMovies);
        console.log(request);
       
        setMovie(request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]);
      }catch (error){ 
      console.log("error", error);
      }
  })()
    },[])  
console.log(movie);
    



function strngcalc(str,n) {
      return str?.length >n ? str.substr(0,n-1)+ '...' : str;
    }
  
  
    return (
    <div className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPostition:"center",
        backgroundRepeat:"no-repeat"
    }}>
      <div className='banner-contents'>
        <h1 className='banner-title'>{movie?.title || movie?.name ||movie?.original_name}</h1>   
        <div className='banner_buttons'>
          <button className="banner_button play">Play</button>
          <button className="banner_button"> My List</button>
          
        </div>
        <h1 className='banner_discription'>{strngcalc(movie?.overview, 150)}</h1>
        
      </div>
      <div className='banner_fadeBottom'/></div>
  
  )
}

export default Banner
