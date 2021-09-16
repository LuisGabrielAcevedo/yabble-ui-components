import {useEffect} from 'react'

export const useBodyOverflow = (isActive) => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100%'
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.height = 'auto'
    }
  }, [isActive])

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.height = 'auto'
    }
  }, [])
}