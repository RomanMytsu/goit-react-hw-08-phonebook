import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from '../SharedLayout/SharedLayout';
import { PrivateRouter } from 'components/PrivateRouter/PrivateRouter';
import { PublicRouter } from 'components/PublicRoute/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route element={<PublicRouter />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
