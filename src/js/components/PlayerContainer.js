import { createElement } from '../shared'

// Template
export const PlayerContainer = () => {
  const appDiv = document.querySelector('#app')
  const wrapperDiv = createElement(['div', 'wrapper', appDiv])

  createElement(['main', 'player__container', wrapperDiv])
  createElement(['audio', 'audio', wrapperDiv])
}
