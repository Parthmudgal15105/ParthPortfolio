import { lazy, Suspense } from 'react'
import { technologies } from "../constants"
import useNearViewport from '../utils/useNearViewport'

const BallCanvas = lazy(() => import('./canvas/Ball'))

const Tech = () => {
  const [sectionRef, showCanvas] = useNearViewport()
  return (
    <div ref={sectionRef} className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {showCanvas ? <Suspense fallback={<img src={technology.icon} alt={technology.name} className="h-full w-full object-contain"/>}><BallCanvas icon={technology.icon}/></Suspense> : <img src={technology.icon} alt={technology.name} className="h-full w-full object-contain"/>}
        </div>
      ))}
    </div>
  )
}

export default Tech
