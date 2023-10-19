import {Route, Routes} from 'react-router-dom'
import {Landing} from './components/landing/Landing.jsx'
import {Homepage} from './components/homepage/Homepage.jsx'

function App() {  

  return (
    <>
      <Routes>
        <Route path ="/" element={<Landing />}/>
        <Route path ="/homepage" element={<Homepage />}/>
      </Routes>
    </>
  )
}

export default App
