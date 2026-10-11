import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './pages/Dashboard'
import Shopping from './pages/Shopping'

export default function App() {
  return (
    <BrowserRouter>
      <div className="h-dvh w-full flex flex-col overflow-hidden bg-slate-900">
        <main className="flex-1 overflow-hidden min-h-0">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Shopping' element={<Shopping />} />
          </Routes>
        </main>
        <Navbar />
      </div>
    </BrowserRouter>
  )
}
