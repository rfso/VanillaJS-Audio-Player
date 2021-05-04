import { createElement } from '../shared'
import { images } from '../images'

const { previousBtnImg, nextBtnImg, playBtnImg } = images

// Template
export const PlayerControls = () => {
  const mainContainer = document.querySelector('main')
  const controlsDiv = createElement(['div', 'player__controls', mainContainer])

  const createBtn = (btnDetails) => {
    const [btnClassName, btnImg, btnImgClassName] = btnDetails

    const btn = createElement(['button', btnClassName, controlsDiv])
    const btnImgEl = createElement(['img', btnImgClassName, btn, btnImg])
  }

  createBtn(['player__controls__prev', previousBtnImg, 'prevBtnImg']) // Previous song button
  createBtn(['player__controls__play', playBtnImg, 'playBtnImg']) // Play song button
  createBtn(['player__controls__next', nextBtnImg, 'nextBtnImg']) // Next song button
}
