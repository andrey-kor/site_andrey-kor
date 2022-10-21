import { useEffect, useState, useCallback } from 'react'

export const useScroll = () => {
    const [scroll, setScroll] = useState(0)
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    return scroll
}

   