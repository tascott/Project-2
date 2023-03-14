import './App.css'
//import react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import components
import Home from './Pages/Home'
import Team from './components/Team'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
