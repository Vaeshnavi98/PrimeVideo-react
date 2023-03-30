import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props

  return (
    <>
      <Popup
        modal
        trigger={
          <img
            src={movieDetails.thumbnailUrl}
            alt="thumbnail"
            className="thumbnail-deco"
          />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="movie-player-container">
              <ReactPlayer url={movieDetails.videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}

export default MovieItem
