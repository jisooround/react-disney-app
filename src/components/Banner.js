import axios from '../api/axios'
import { useEffect, useState } from 'react'
import requests from '../api/requests'
import "./Banner.css"
import styled from 'styled-components'

function Banner() {
  const [movie, setMovie] = useState(undefined);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get(requests.fetchNowPlaying);
    console.log(response)

    const movieId = response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`,{
      params:{
        append_to_response: 'videos',
      }
    })
    console.log('movieDetail', movieDetail);
    setMovie(movieDetail);
  }

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + '...' : str;
  }

  if(movie === undefined){
    return <div>Loading...</div>
  }

  if(!isClicked){
    return (
      <header className='banner'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
    }}
      >
        <div className='banner__contents'>
          <h1 className='banner__title'>
            {movie.title || movie.name || movie.original_title}
          </h1>
          <div className='banner__buttons'>
            {/* ?는 옵셔널 movie.videos가 있을 때만 실행한다는 뜻  */}
            {movie.videos?.results[0]?.key ?
            <button className='banner__button play'
            onClick={() => setIsClicked(true)}>
              PLAY
            </button>
            :
            null
            }
          </div>
          <h5 className='banner__description'>
            {truncate(movie.overview, 100)}
          </h5>
        </div>
        <div className='banner--fadeBottom'></div>
      </header>
    )} else {
      return (
        <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}
              ?controls=&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              frameBorder="0"
              allow="autoplay; fullscreen">
              
            </Iframe>
          </HomeContainer>
        </Container>
        <button onClick={() => setIsClicked(false)}>
          X
        </button>
        </>
      )
    }
  }

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export default Banner