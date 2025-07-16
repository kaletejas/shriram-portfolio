import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
