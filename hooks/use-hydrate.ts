import { useEffect, useState } from "preact/hooks"

export const useHydrate = () => {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return hydrated
}
