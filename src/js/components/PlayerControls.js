import previousImg from '../../assets/images/previous.svg'
import playImg from '../../assets/images/play.svg'
import nextImg from '../../assets/images/next.svg'

// Template
export const PlayerControls = () => {
  const mainContainer = document.querySelector('main')

  const controlsDiv = document.createElement('div')

  controlsDiv.classList.add('player__controls')

  mainContainer.appendChild(controlsDiv)

  const addBtnToDom = (btn, btnImg) => {
    btn.appendChild(btnImg)

    controlsDiv.append(btn)
  }

  const createBtn = (btnDetails) => {
    const [btnClassName, btnImg, btnImgClassName] = btnDetails

    const btn = document.createElement('button')
    const btnImgEl = document.createElement('img')

    btn.classList.add(btnClassName)
    btnImgEl.classList.add(btnImgClassName)

    btnImgEl.src = btnImg

    addBtnToDom(btn, btnImgEl)
  }

  createBtn(['player__controls__prev', previousImg, 'prevImg']) // Previous song button
  createBtn(['player__controls__play', playImg, 'playImg']) // Play song button
  createBtn(['player__controls__next', nextImg, 'nextImg']) // Next song button
}
