import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pratos from './pages/Pratos'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:1d" element={<Pratos />} />
  </Routes>
)

export default Rotas
