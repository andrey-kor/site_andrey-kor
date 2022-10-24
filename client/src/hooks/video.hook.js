import { useCallback, useState } from 'react'

export const useVideo = () => {
    const [status, setStatus] = useState('stop')

    const handleVideo = useCallback ((event, vidRef) => {
        if (event.type === 'mouseenter') {
            vidRef.current.play()
                .then(() => {
                    setStatus('play')
                })
                .catch((e) => {
                    console.log(e.message)
                })
        }
        else if (event.type === 'mouseleave') {
            vidRef.current.pause()
            vidRef.current.load()
            setStatus('stop')
        }
    }, [])

    return { handleVideo, status }
}