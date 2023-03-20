import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './components/Team';
import ProjectList from './components/ProjectList';
import ProjectPage from './pages/Project';
import Navbar from './components/Navbar/Navbar';
import Weather from './components/weatherAPI/Weather';
import InvoiceGenerator from './pages/Generate';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route>
          <Route path='/team' element={<Team />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/project/:projectID" element={<ProjectPage />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/generate" element={<InvoiceGenerator />} />
          <Route path="/*" element={<NotFound />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  );
}


export default App;