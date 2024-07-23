
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Jokes = () => {
  const [jokes, setJoke] = useState({})
  const [loading, setLoading] = useState(false)
  const [reload, setReload] = useState(false)
  useEffect (
    () => {
        setLoading(true)
      axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0cef49dce8d89376c3e98a86a6b88018&page=1')
      .then((resp) => {
        setJoke(resp.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
        })
  
    }, [reload]
  )
   if(loading) {return(
    <div className='jokes'>
        <h1>Loading...</h1>
     </div>
   )
     
   }
  return (
   <div class="movie-cards" data-id="${result.id}">
            <img src="${imagePath}" alt="" />
            <div class="rating-releaseDate">
                <span>${result.vote_average}</span>
                <span>${result.release_date}</span>
            </div>
            <div class="title"> 
                <h2>${result.original_title}</h2>
            </div>
            
        </div>   
  )
}

export default Jokes