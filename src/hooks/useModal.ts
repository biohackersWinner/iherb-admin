import { useState } from 'react'

export function useModal(isVisibleInit: boolean = false) {
  const [isVisible, setIsVisible] = useState(isVisibleInit)

  function show() {
    setIsVisible(true)
  }

  function hide() {
    setIsVisible(false)
  }

  function toggle() {
    setIsVisible((prevVisibility) => !prevVisibility)
  }

  return { isVisible, show, hide, toggle }
}
