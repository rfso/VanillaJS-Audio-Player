const addToDOM = (parent, child) => {
  parent.appendChild(child)
}

export const createElement = (elementDetails) => {
  const [elementType, elementClassName, parent, elementImg] = elementDetails
  const createdElement = document.createElement(`${elementType}`)

  createdElement.classList.add(`${elementClassName}`)

  if (elementImg) {
    createdElement.src = elementImg
  }

  addToDOM(parent, createdElement)

  return createdElement
}
