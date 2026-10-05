import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/layout/navbar"
import Dashboard from "./pages/Dashboard"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>

        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Shopping" element={<Dashboard />} />



        </Routes>

      </main>

    </BrowserRouter>
  )
}
