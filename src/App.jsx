import { lazy, Suspense } from 'react'
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works} from './components'
import useNearViewport from './utils/useNearViewport'

const StarsCanvas = lazy(() => import('./components/canvas/Stars'))

const App = () => {
  const [contactRef, showStars] = useNearViewport()
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div ref={contactRef} className="relative z-0">
        <Contact/>
        {showStars && <Suspense fallback={null}><StarsCanvas/></Suspense>}
      </div>
    </div>
  )
}

export default App
