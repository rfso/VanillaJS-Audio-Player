import { particlesConfig } from '../particlesConfig'

// Template
export const Particles = () => {
  const appDiv = document.querySelector('#app')

  const createParticlesJsDiv = () => {
    const particlesJsDiv = document.createElement('div')

    particlesJsDiv.id = 'tsparticles'

    appDiv.appendChild(particlesJsDiv)
  }

  createParticlesJsDiv()
  particlesConfig()
}
