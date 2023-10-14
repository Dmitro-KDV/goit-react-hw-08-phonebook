import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
// import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing, selectToken } from "./redux/auth/selector";
import { refreshUserThunk } from "./redux/auth/operation";
// import {LoginPage} from "./Page/LoginPage";
// import {RegisterPage} from "./Page/RegisterPage";
const Home = lazy(() => import('./Page/Home'));
const LoginPage = lazy(() => import('./Page/LoginPage'))
const RegisterPage = lazy(() => import('./Page/RegisterPage'))
const Tasks = lazy(() => import('./Page/Tasks'))

export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectToken)
  const isRefreshing = useSelector(selectIsRefreshing)
  
  useEffect(() => {
    dispatch(refreshUserThunk(isAuth));
  }, [dispatch, isAuth]);

  return isRefreshing ? (
      <b>Refreshing user...</b>
    ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          {isAuth && <Route path="contacts" element={<Tasks />} />}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
  );
};
