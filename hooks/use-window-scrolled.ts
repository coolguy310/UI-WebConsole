import { useEffect, useState } from "preact/hooks"

/**
 * Track if the window has been scrolled
 */
export const useWindowScrolled = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    addEventListener("scroll", handleScroll)
    return () => {
      removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrolled
}
