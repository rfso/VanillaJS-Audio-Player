import { createElement } from '../shared'
import { images } from '../images'

const { unmuteBtnImg } = images

// Template
export const PlayerInfo = () => {
  const mainContainer = document.querySelector('main')
  const songInfoDiv = createElement(['div', 'player__info', mainContainer])

  const createProgressBar = () => {
    const infoProgressDiv = createElement(['div', 'player__info__progress', songInfoDiv])
    const progress = createElement(['div', 'progress', infoProgressDiv])
  }

  // Artist name and volume/mute button
  const createSongInfo = () => {
    const artistInfoDiv = createElement(['div', 'player__info__artist', songInfoDiv])
    const volumeImgEl = createElement(['img', 'volume-image', artistInfoDiv, unmuteBtnImg])
    const songName = createElement(['p', 'song-name', artistInfoDiv])
  }

  createProgressBar()
  createSongInfo()
}
