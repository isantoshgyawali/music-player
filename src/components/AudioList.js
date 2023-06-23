import React, {  useState, 
  // useEffect, useRef 
}
 from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Songs } from './Songs'
import MusicImage from '../images/music.png'

function AudioList() {

  const [Fav_songs, setSongs] = useState(Songs);

  const changeFavorite = (id) => {
    setSongs(Fav_songs.map(song => {
      if (song.id === id) {
        return {
          ...song,
          favorite: !song.favorite
        }
      }
      return song;
    }));
  }

  return (
    <div className='audioList'>
      <h2 className="title">
        All Songs<span>({Songs.length})</span>
      </h2>
      <div className="songsContainer">
        {
          Songs && Songs.map((song) => {
            return (
              <div className="songs" key={Number(song.id)}>
                <div className="count">{song.id}.</div>
                <div className="song">

                  <div className="imgBox">
                    <img src={MusicImage} alt="" />
                  </div>

                  <div className="section">
                    <p className='songName'>
                      <span className='spanSong'>{song.songName}</span>
                      <span className='spanArtist'>{song.artist}</span>
                    </p>

                    <div
                      className="favourite"
                      onClick={() => changeFavorite(song?.id)}
                    >

                      {song.favorite ? (
                        <i>
                          <FaHeart className='first-child' />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export { AudioList };
