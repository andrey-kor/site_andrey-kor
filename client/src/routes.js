import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { AboutPage } from './pages/AboutPage'
import { ArticlesPage } from './pages/ArticlesPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ArticlesId } from './pages/ArticlesId'
import { ErrorPage } from './pages/ErrorPage'

export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<ArticlesId />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<ErrorPage />}/>
        </Routes>
    )
}

