import { useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useLocate = () => {

    let location = useLocation()
    
    const scrollToTop = useCallback (() => {
        window.scrollTo(0, 0);
    }, [location])

    useEffect (() => {
        scrollToTop()
    }, [location])

    return { scrollToTop }
}