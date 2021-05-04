import { createElement } from '../shared'

// Template
export const PlayerContainer = () => {
  const appDiv = document.querySelector('#app')
  const wrapperDiv = createElement(['div', 'wrapper', appDiv])
  const mainContainer = createElement(['main', 'player__container', wrapperDiv])
  const audioEl = createElement(['audio', 'audio', wrapperDiv])

  audioEl.crossOrigin = 'anonymous'
  audioEl.preload = 'auto'
}
