import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {
  const routes = useRoutes()
  
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
