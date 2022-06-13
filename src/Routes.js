import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/exercises/:id' element={<ExerciseDetail />} />
    </Routes>
  )
}

export default routes
