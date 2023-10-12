import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
// import Home from "./pages/Home";
import Layout from "./Layout/Layout";
// import {LoginPage} from "./Page/LoginPage";
// import {RegisterPage} from "./Page/RegisterPage";
const LoginPage = lazy(() => import('./Page/LoginPage'))
const RegisterPage = lazy(() => import('./Page/RegisterPage'))
const Tasks = lazy(() => import('./Page/Tasks'))

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contacts" element={<Tasks />} />
          <Route path="*" element={<LoginPage />} />
        </Route>
    </Routes>
    </div>
  );
};
