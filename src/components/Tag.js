import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = 'UqmlrrPHUbi37kZmYlw5j4JTasXnlQhb';
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = ()=>{
    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(false);
    const [tag,setTag] = useState('');

    async function fetchData(){
        setLoading(true);
        const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        // const response = await fetch(url);
        // const {data}= await response.json();
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[])

    function changeHandler(event){
        setTag(event.target.value);
    }
    function clickHandler(){
        fetchData();
    }
    return(
        <div className='w-1/2 bg-blue-400 rounded-lg border border-black mt-4
        flex flex-col items-center gap-y-5'>

            <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} GIF</h1>

            {
                loading?(<Spinner/>):(<img src={gif} width="450"></img>)
            }

            <input className="w-10/12  bg-white opacity-70 text-lg py-2 rounded-lg mb-[3px] text-center"
             onChange={changeHandler} value={tag}>

            </input>
            <button onClick={clickHandler} 
            className="w-10/12 bg-white opacity-70 text-lg py-2 rounded-lg mb-[20px]">
                Generate
            </button>

        </div>
    );
}
export default Tag;