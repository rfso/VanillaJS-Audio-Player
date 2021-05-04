import { createElement } from '../shared'
import { particlesConfig } from '../particlesConfig'

// Template
const Particles = () => {
  const appDiv = document.querySelector('#app')

  const createParticlesJsDiv = () => {
    const particlesJsDiv = createElement(['div', 'tsparticles', appDiv])

    particlesJsDiv.id = 'tsparticles'
  }

  createParticlesJsDiv()
  particlesConfig()
}

export default Particles
