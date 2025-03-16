
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT
    }
    return false
  })

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Modern browsers
    if (mql.addEventListener) {
      mql.addEventListener("change", checkMobile)
    } else {
      // For older browsers
      window.addEventListener('resize', checkMobile)
    }
    
    // Set initial value
    checkMobile()
    
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", checkMobile)
      } else {
        window.removeEventListener('resize', checkMobile)
      }
    }
  }, [])

  return isMobile
}
