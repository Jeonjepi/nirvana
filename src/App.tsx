import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppContext } from './contexts/AppContext';
import { PageType } from './types';
import HomePage from './pages/HomePage';
import { PAGE_ROUTES } from './utils/constant';
import ServerIntroPage from './pages/ServerIntroPage';
import SocialPage from './pages/SocialPage';

function App() {
  const { currentPage } = useAppContext();
  const navigate = useNavigate();

  // Handle page navigation based on currentPage state
  useEffect(() => {
    const route = PAGE_ROUTES[currentPage as PageType];
    if (route) {
      navigate(route);
    }
  }, [currentPage, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/server-intro" element={<ServerIntroPage />} />
        <Route path="/social" element={<SocialPage />} />
      </Routes>
    </div>
  );
}

export default App;