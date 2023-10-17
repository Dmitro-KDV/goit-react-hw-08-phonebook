import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import Layout from "./Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing, selectToken } from "./redux/auth/selector";
import { refreshUserThunk } from "./redux/auth/operation";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
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
          <Route path="login" element={<PublicRoute>
                                        <LoginPage />
                                      </PublicRoute>} />
          <Route path="register" element={<PublicRoute>
                                            <RegisterPage />
                                          </PublicRoute>} />
          <Route path="contacts" element={<PrivateRoute>
                                            <Tasks />
                                          </PrivateRoute>} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
  );
};
