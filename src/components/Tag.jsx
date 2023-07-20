import React, { useEffect, useState } from "react";
import axios  from "axios";
import Spinner from "./Spinner";

const API_KEY ="MW9aeMJu1W4x0co28rMVHR2PJrnlahi8"; 

const Tag =()=>{
    const[tag, setTag]= useState("");
 const [gif, setGif] = useState("");
  const [loading, setLoading] = useState('false');
   

  function changeHandler(event){
    setTag(event.target.value);

  }


 async function fetchData(){
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;  
    const {data} = await axios.get(url);
    //console.log(output);
    const imagesource = data.data.images.downsized_large.url;
   // console.log(imagesource);
    setGif(imagesource);

setLoading(false);
 }

 useEffect( () =>{
    fetchData();
}, [] )

 function clickHandler(){
  fetchData();  
 }

    return(
        <div className="flex flex-col items-center bg-blue-500 md:w-1/2 w-11/12 rounded-lg border-2 border-gray-600 gap-y-5 mt-[15px] mx-auto py-5">
        <h1 className="font-bold text-2xl underline uppercase   ">Random Gif</h1>
        {
            loading ? (<Spinner/>): (<img src={gif} width="450"/>)
        }

        <input
         className="w-10/12 text-lg py-1 rounded-lg mb-[3px] text-center  "
         onChange={changeHandler}
        />
        
        <button onClick={clickHandler}
         className= " w-10/12 bg-white rounded-lg text-lg py-1 opacity-90s">
             Generate</button>
        </div>
    );
}

export default Tag;