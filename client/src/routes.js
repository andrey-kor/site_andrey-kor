import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage'
import { ArticlesPage } from './pages/ArticlesPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ErrorPage } from './pages/ErrorPage'

export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<ArticlesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<ErrorPage />}/>
        </Routes>
    )
}

