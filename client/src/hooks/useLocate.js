import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useLocate = () => {

    let location = useLocation()
    
    useEffect (() => {
        scrollToTop()
    }, [location])

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return { scrollToTop }
}