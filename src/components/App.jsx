import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
// import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import { useSelector } from "react-redux";
import { selectToken } from "./redux/auth/selector";
// import {LoginPage} from "./Page/LoginPage";
// import {RegisterPage} from "./Page/RegisterPage";
const Home = lazy(() => import('./Page/Home'));
const LoginPage = lazy(() => import('./Page/LoginPage'))
const RegisterPage = lazy(() => import('./Page/RegisterPage'))
const Tasks = lazy(() => import('./Page/Tasks'))

export const App = () => {
  const isAuth = useSelector(selectToken)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          {isAuth && <Route path="contacts" element={<Tasks />} />}
          <Route path="*" element={<Home />} />
        </Route>
    </Routes>
    </div>
  );
};
