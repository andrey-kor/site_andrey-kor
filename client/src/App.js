import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { useRoutes } from './routes';
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  const routes = useRoutes()

  return (
    <>
      <div className="background"></div>
      <Header />
      <Router>
          {routes}
      </Router>
      <Footer />
    </>

  )
}

export default App;
