import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import ProblemPage from '@/components/pages/ProblemPage';
import SolutionPage from '@/components/pages/SolutionPage';
import ImpactPage from '@/components/pages/ImpactPage';
import MarketPage from '@/components/pages/MarketPage';
import TeamPage from '@/components/pages/TeamPage';
import ContactPage from '@/components/pages/ContactPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "problem",
        element: <ProblemPage />,
      },
      {
        path: "solution",
        element: <SolutionPage />,
      },
      {
        path: "impact",
        element: <ImpactPage />,
      },
      {
        path: "market",
        element: <MarketPage />,
      },
      {
        path: "team",
        element: <TeamPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
