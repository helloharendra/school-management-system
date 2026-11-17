import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Attendance from './pages/Attendance'
import Students from './pages/Students'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="students" element={<Students />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
