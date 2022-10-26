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
      <Router>
        <Header />
        {routes}
        <Footer />
      </Router>
    </>

  )
}

export default App;
