import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import './App.css'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='text-4xl text-amber-200 font-bold'>Hello There</h1>
    </div>
  )
}

export default App
