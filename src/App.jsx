import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <Homepage />,
    children: [
      {
        path: 'about',
        element: <AboutPage />
      }, {
        path: 'projects',
        element: <ProjectsPage />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;