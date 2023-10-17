import { selectToken } from "components/redux/auth/selector"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

const PublicRoute = ({children}) => {
    const isAuth = useSelector(selectToken)
    const {state} = useLocation()
  return !isAuth ? children : <Navigate to={state ? state: '/'} />
}

export default PublicRoute
