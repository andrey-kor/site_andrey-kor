import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Slider } from '../components/Slider'
import { ArticleCards } from '../components/ArticleCards'
import { AboutMe } from '../components/AboutMe'
import { articlesRequest } from '../components/API/articlesRequest'
import { Loading } from '../components/Loading/Loading'
import sliderProjectsData from '../data/sliderProjectsData.json'

export const MainPage = () => {

    const { getArticles, loading, articles } = articlesRequest()
  
    useEffect(() => {
        getArticles() 
    }, [getArticles])

    return (
        <div className="content-wrapper">
            <div className="content">
                <div className="content__body">
                    <Link to="/projects">
                        <h2 className="title title_pink-filled">ПРОЕКТЫ</h2>
                    </Link>
                    <Slider 
                        slides={sliderProjectsData} 
                        targetSlider={'projects'}
                    />
                    <Link to="/articles">
                        <h2 className="title title_blue">СТАТЬИ</h2>
                    </Link>
                    {
                        loading ? <Loading /> : <ArticleCards articles={articles} />
                    }
                    <Link to="/about">
                        <h2 className="title title_orange">ОБО МНЕ</h2>
                    </Link>
                    <AboutMe />
                </div>  
            </div>
        </div>
    )
}