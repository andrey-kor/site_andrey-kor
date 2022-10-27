import React from 'react'
import { Link } from 'react-router-dom'
import { Slider } from '../components/Slider'
import { ArticleCards } from '../components/ArticleCards'
import { AboutMe } from '../components/AboutMe'
import sliderProjectsData from '../data/sliderProjectsData.json'
import articles from '../data/articles.json'

export const MainPage = () => {
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
                    <ArticleCards
                        articles={articles}
                    />
                    <Link to="/about">
                        <h2 className="title title_orange">ОБО МНЕ</h2>
                    </Link>
                    <AboutMe />
                </div>  
            </div>
        </div>
    )
}