import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Homepage />}>
          <Route path="/portfolio/about" element={<AboutPage />} />
          <Route path="/portfolio/projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;