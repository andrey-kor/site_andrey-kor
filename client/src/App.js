import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { useRoutes } from './routes';
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  const routes = useRoutes()

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        {routes}
        <Footer />
      </Router>
    </>

  )
}

export default App;
