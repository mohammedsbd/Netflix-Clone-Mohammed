import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios"
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
import "./row.css";
// import { width } from "@mui/system";

const Row = ({title,fetchUrl,isLargeRow}) => {
   
   
    const [movies,setMovie]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    const base_url="https://image.tmdb.org/t/p/original"  

    
    
    
    
    useEffect(()=>{
        (async()=>{
            try{
                console.log(fetchUrl);
                const request=await axios.get(fetchUrl)
                console.log(request);
                setMovie(request.data.results);
            }catch (error){
                console.log("error",error);
            }
        })()
    },[fetchUrl]);// depndecncy array each time it get a url it renders based on fetchurl 


   
   
    const handleClick = (movie) => {
     if (trailerUrl) {
       setTrailerUrl("");
     } else {
       
        movieTrailer(movie?.title || movie?.name || movie?.original_name)    
    //    ? optional chaning operator used to deal with errors if there is an error it return it says undefined it helps the code not to break when there is an
       
        .then((url) => {
        //    console.log(url);
           const urlParams = new URLSearchParams(new URL(url).search);
           console.log(urlParams);
           console.log(urlParams.get("v")); // means get video id
           setTrailerUrl(urlParams.get("v"));
         })
         .catch((error) => console.error(error.message));
         
     }
   };
    
   
   
   
   const opts={
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1 
        },    

    }  

// autoplay 1 is used to display the video automatically

 
 
   return (
    <div className="row">
    <h1>{title}</h1>
    
    
    <div className="row_posters">
        {movies?.map((movie, index) => (
            <img
                onClick={() => handleClick(movie)}
                key={index} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            />
        ))}
    </div>

    
     <div style={{ padding:'40px'}}>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
            </div>
        
     </div>
     
   )
 }
 
 export default Row
 