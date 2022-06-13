import { Box } from '@mui/material'
import Routes from './Routes'
import './App.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
      <NavBar />
      <Routes />
      <Footer />
    </Box>
  )
}

export default App
