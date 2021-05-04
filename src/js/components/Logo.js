import { createElement } from '../shared'
import { images } from '../images'

const { logoImg } = images

const Logo = () => {
  const wrapperDiv = document.querySelector('.wrapper')
  const anchorLogoEl = createElement(['a', 'logo', wrapperDiv])
  const logoImgEl = createElement(['img', 'logo', anchorLogoEl, logoImg])

  anchorLogoEl.href = 'https://github.com/rfso/VanillaJS-Audio-Player'
  anchorLogoEl.target = '_blank'
}

export default Logo
