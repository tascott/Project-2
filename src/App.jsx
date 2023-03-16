import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Team from './components/Team'
import ProjectList from './components/ProjectList'
import ProjectPage from './pages/Project'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
    </Routes>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <Navbar />
      <App />
    </Router>
  );
}
