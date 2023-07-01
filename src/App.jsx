import './App.css'
import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'
import Shape from './Components/Shape'
import Text from './Components/Text'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <Canvas>
      <PresentationControls> 
    <Shape />
      </PresentationControls>
    </Canvas>
    <Text />
    </>
  )
}

export default App
