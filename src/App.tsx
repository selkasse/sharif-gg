import CallToAction from './components/CallToAction'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      <main>
        <Hero />
        <Projects />
        <CallToAction />
      </main>
    </div>
  )
}

export default App
