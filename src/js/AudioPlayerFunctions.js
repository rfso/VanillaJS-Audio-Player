export const AudioPlayerFunctions = () => {
  const audio = document.querySelector('.audio')
  const songName = document.querySelector('.song-name')
  const playImg = document.querySelector('.playImg')
  const playBtn = document.querySelector('.player__controls__play')
  const prevBtn = document.querySelector('.player__controls__prev')
  const nextBtn = document.querySelector('.player__controls__next')
  const volumeBtn = document.querySelector('.volume-image')
  const progress = document.querySelector('.progress')
  const progressContainer = document.querySelector('.player__info__progress')

  const songs = ['better days', 'slowmotion']

  let songIndex = 0

  const loadSong = (song) => {
    songName.innerText = song

    audio.src = `src/assets/music/${song}.mp3`
  }

  loadSong(songs[songIndex])

  const playSong = () => {
    audio.play()
    audio.volume = 0.3

    playImg.src = `src/assets/images/pause.svg`

    playBtn.classList.add('playing')
  }

  const pauseSong = () => {
    audio.pause()

    playImg.src = `src/assets/images/play.svg`

    playBtn.classList.remove('playing')
  }

  const nextSong = () => {
    songIndex++

    if (songIndex > songs.length - 1) {
      songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
  }

  const prevSong = () => {
    songIndex--

    if (songIndex < 0) {
      songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])
    playSong()
  }

  const muteSong = () => {
    audio.muted = true

    volumeBtn.src = `/src/assets/images/mute.svg`

    volumeBtn.classList.add('muted')
  }

  const unmuteSong = () => {
    audio.muted = false

    volumeBtn.src = `/src/assets/images/volumeDefault.svg`

    volumeBtn.classList.remove('muted')
  }

  const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100

    progress.style.width = `${progressPercent}%`
  }

  const setProgress = function (e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
  }

  // Our Event Listeners //

  // Mute/unmute

  volumeBtn.addEventListener('click', () => {
    const isMuted = volumeBtn.classList.contains('muted')

    isMuted ? unmuteSong() : muteSong()
  })

  // Play/pause

  playBtn.addEventListener('click', () => {
    const isPlaying = playBtn.classList.contains('playing')

    isPlaying ? pauseSong() : playSong()
  })

  // Next/Previous song

  prevBtn.addEventListener('click', prevSong)
  nextBtn.addEventListener('click', nextSong)

  // Audio/Progress

  audio.addEventListener('timeupdate', updateProgress)

  progressContainer.addEventListener('click', setProgress)

  audio.addEventListener('ended', nextSong)
}
