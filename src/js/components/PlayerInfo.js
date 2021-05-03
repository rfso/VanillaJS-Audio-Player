import volumeDefaultImg from '../../assets/images/volumeDefault.svg'

// Template
export const PlayerInfo = () => {
  const mainContainer = document.querySelector('main')

  const infoDiv = document.createElement('div')

  infoDiv.classList.add('player__info')

  mainContainer.appendChild(infoDiv)

  const createProgressBar = () => {
    const infoProgressDiv = document.createElement('div')
    const progressBarDiv = document.createElement('div')

    infoProgressDiv.classList.add('player__info__progress')
    progressBarDiv.classList.add('progress')

    infoProgressDiv.appendChild(progressBarDiv)

    infoDiv.append(infoProgressDiv)
  }

  // Artist name and volume/mute button
  const createSongInfo = () => {
    const artistInfoDiv = document.createElement('div')
    const songName = document.createElement('p')
    const volumeImg = document.createElement('img')

    artistInfoDiv.classList.add('player__info__artist')
    songName.classList.add('song-name')
    volumeImg.classList.add('volume-image')

    volumeImg.src = volumeDefaultImg
    volumeImg.alt = 'Mute Button'

    artistInfoDiv.append(volumeImg, songName)
    infoDiv.append(artistInfoDiv)
  }

  createProgressBar()
  createSongInfo()
}
