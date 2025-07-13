import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
function App() {

  return (
   <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
    <Navbar />
    <Hero/>
    <About />
    </div>
  )
}

export default App
