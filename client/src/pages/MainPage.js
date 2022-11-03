import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Slider } from '../components/Slider/Slider'
import { ArticleCards } from '../components/ArticleCard/ArticleCards'
import { AboutBlock } from '../components/AboutBlock/AboutBlock'
import { useArticlesRequest } from '../hooks/useArticlesRequest'
import { Loading } from '../components/Loading/Loading'
import { useLocate } from '../hooks/useLocate'
import sliderProjectsData from '../data/sliderProjectsData.json'

export const MainPage = () => {

    const { scrollToTop } = useLocate()
    scrollToTop()

    const { getArticles, loading, articles } = useArticlesRequest()
  
    useEffect(() => {
        getArticles() 
    }, [getArticles])

    return (
        <div className="content-wrapper">
            <div className="content">
                <div className="content__body">
                    <section>
                        <Link to="/about">
                            <h2 className="title title_orange">ОБО МНЕ</h2>
                        </Link>
                        <AboutBlock />
                    </section>
                    <section>
                        <Link to="/projects">
                            <h2 className="title title_pink-filled">ПРОЕКТЫ</h2>
                        </Link>
                        <Slider 
                            slides={sliderProjectsData} 
                            targetSlider={'projects'}
                        />
                    </section>
                    <section>
                        <Link to="/articles">
                            <h2 className="title title_blue">СТАТЬИ</h2>
                        </Link>
                        {
                            loading ? <Loading /> : <ArticleCards articles={articles} />
                        }
                    </section>
                </div>  
            </div>
        </div>
    )
}