import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const ActionList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )

  const ComedyList = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="deco">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-deco"
        />
      </div>
      <div className="movies-div-deco">
        <h1 className="head-name">Action Movies</h1>
        <MoviesSlider moviesList={ActionList} />
        <h1 className="head-name">Comedy Movies</h1>
        <MoviesSlider moviesList={ComedyList} />
      </div>
    </div>
  )
}
export default PrimeVideo
