import { useEffect, useRef, useState } from 'react'

export default function useNearViewport(rootMargin = '200px') {
  const ref = useRef(null)
  const [near, setNear] = useState(false)

  useEffect(() => {
    if (near || !ref.current) return
    if (!('IntersectionObserver' in window)) {
      setNear(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNear(true)
        observer.disconnect()
      }
    }, { rootMargin })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [near, rootMargin])

  return [ref, near]
}
