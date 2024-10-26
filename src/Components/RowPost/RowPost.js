import React from 'react'
import "./RowPost.css";
import { useEffect,useState } from 'react';
import axios from '../../axios';
import { imageURL,API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube';

function RowPost(props) {
  const [movies, SetMovies] = useState([])
  const [urlId,setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data); 
      SetMovies(response.data.results)    
    }).catch((err)=>{
      alert('Network Error')
    })
    
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0])
        // console.log(response.data.results[0]);
        
      }else{
        console.log("Trailer Not Available");
        
      }
      
    })
    
  }

return (
  <div className='row'>
    <h2>{props.title}</h2>
    <div className="posters">
      {movies.map((obj)=>{
        return(
          <div key={obj.id}>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt="poster" src={`${imageURL+obj.backdrop_path}`} /> 
            <h3>{obj.name || obj.title}</h3>
          </div>
          )
      })}
    </div>

      {urlId && <YouTube opts={opts} videoId= {urlId.key} />}

  </div>


)
}

export default RowPost