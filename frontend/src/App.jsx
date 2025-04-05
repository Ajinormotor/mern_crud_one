
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './common/Navbar'

const HomeWrapper = lazy(()=> import('./pages/Home.jsx'))
const CreateWrapper  = lazy(() => import('./pages/Create.jsx'))

function App() {
  
  return (
    <>

    <Navbar  />
    
<Routes>
<Route  index element={
  <Suspense>
    <HomeWrapper  />
  </Suspense>
}  />

<Route  path='/create' element={
  <Suspense>
    <CreateWrapper  />
  </Suspense>
}  />

</Routes>
    </>
  )
}

export default App
