import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Onboarding1 from './pages/onboarding/Onboarding1';
import Onboarding2 from './pages/onboarding/Onboarding2'; // ✅ 이미 있음
import Onboarding14 from './pages/onboarding/Onboarding14';
import Onboarding25 from './pages/onboarding/Onboarding25';
import Onboarding23 from './pages/onboarding/Onboarding23';
import Onboarding20 from './pages/onboarding/Onboarding20';
import Onboarding21 from './pages/onboarding/Onboarding21';
import Onboarding6 from './pages/onboarding/Onboarding6';
import Onboarding8 from './pages/onboarding/Onboarding8';
import Onboarding12 from './pages/onboarding/Onboarding12';
import Onboarding19 from './pages/onboarding/Onboarding19';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/onboarding/1" replace /> },
      { path: 'onboarding/1', element: <Onboarding1 /> },
      { path: 'onboarding/2', element: <Onboarding2 /> }, 
      { path: 'onboarding/14', element: <Onboarding14 /> },
      { path: '/onboarding/25', element: <Onboarding25 /> },
{ path: '/onboarding/23', element: <Onboarding23 /> },
{ path: '/onboarding/20', element: <Onboarding20 /> },// ✅ 추가된 라우트
{ path: '/onboarding/21', element: <Onboarding21 /> },// ✅ 추가된 라우트
{ path: '/onboarding/6', element: <Onboarding6 /> },// ✅ 추가된 라우트
{ path: '/onboarding/8', element: <Onboarding8 /> },// ✅ 추가된 라우트
{ path: '/onboarding/12', element: <Onboarding12 /> },
{ path: '/onboarding/19', element: <Onboarding19 /> },
    ],
  },
]);

export default router;
