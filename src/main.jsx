import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SolutionsPage from '../components/SolutionsPage.jsx';
import AboutUs from '../components/AboutUs.jsx';
import ContactUsPage from '../components/ContactUsPage.jsx';
import PrivacyPolicy from '../components/PrivacyPolice.jsx';
import TermsofUse from '../components/TermsofUse.jsx';
import IntellectualPropertyPolicy from '../components/IntellectualPropertyPolicy.jsx';
import HomePage from '../components/HomePage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App as the layout component
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/Solutions", element: <SolutionsPage /> },
      { path: "/About", element: <AboutUs /> },
      { path: "/ContactUs", element: <ContactUsPage /> },
      { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
      { path: "/TermsOfUse", element: <TermsofUse /> },
      { path: "/IntellectualProperty", element: <IntellectualPropertyPolicy /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
