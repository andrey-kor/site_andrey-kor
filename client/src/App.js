import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useLocate } from './hooks/useLocate'
import { useRoutes } from './routes';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {
  const routes = useRoutes()

  const { scrollToTop } = useLocate()

  useEffect (() => {
    scrollToTop()
  }, [])

  return (
    <>
      <Router>
        <Header />
        {routes}
        <Footer />
      </Router>
    </>

  )
}

export default App;
