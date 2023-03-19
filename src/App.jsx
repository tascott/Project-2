import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Team from './components/Team';
import ProjectList from './components/ProjectList';
import ProjectPage from './pages/Project';
import Navbar from './components/Navbar/Navbar';
import Weather from './components/weatherAPI/Weather';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/projects/:urlFriendlyName" element={<ProjectPage />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  );
}

export default function WrappedApp() {
  return (
    <Router>

      {/* <Navbar /> */}
      <App />
    </Router>
  );
}
