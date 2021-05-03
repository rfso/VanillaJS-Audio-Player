// Template
export const PlayerContainer = () => {
  const appDiv = document.querySelector('#app')

  // Creates both wrapper and container divs for our Audio Player
  const createWrapperDiv = () => {
    const wrapperDiv = document.createElement('div')
    const mainContainer = document.createElement('main')

    wrapperDiv.classList.add('wrapper')
    mainContainer.classList.add('player__container')

    appDiv.appendChild(wrapperDiv)
    wrapperDiv.appendChild(mainContainer)
  }

  const createAudioElement = () => {
    const audioEl = document.createElement('audio')

    audioEl.classList.add('audio')

    appDiv.appendChild(audioEl)
  }

  createAudioElement()
  createWrapperDiv()
}
