import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Main, Chanel, VideoDetail, Search, Navbar } from "../"



export default function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/chanel/:id' element={<Chanel />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/search/:id' element={<Search />} />
      </Routes>
    </Box>
  )
}
