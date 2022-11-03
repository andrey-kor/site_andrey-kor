import { useState, useCallback } from 'react'
import { useHttp } from './useHttp'

export const useArticlesRequest = () => {
    const [articles, setArticles] = useState([])
    const {request, loading} = useHttp()

    const getArticles = useCallback(async () => {

        try {
            const fetched = await request('/api/articles', 'GET')
            setArticles(fetched)
        } catch (e) {
            console.log('error: ', e)
        }
    }, [request])

    return { getArticles, loading, articles }
}

