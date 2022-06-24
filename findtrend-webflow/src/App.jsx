import React from 'react'
import Header from './components/header/header'
import Hero from './components/sectionHero/sectionHero'
import Open from './components/sectionOpen/sectionOpen'
import Long from './components/sectionLongText/sectionLongText'

function App() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Open />
      <Long />
    </div>
  )
}

export default App
