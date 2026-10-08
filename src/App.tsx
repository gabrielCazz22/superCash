import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './pages/Dashboard'
import Shopping from './pages/Shopping'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className='pb-20 md:pb-0'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Shopping' element={<Shopping />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
