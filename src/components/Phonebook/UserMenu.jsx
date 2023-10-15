import { selectProfile } from "components/redux/auth/selector";
import { logOut } from "components/redux/auth/slice";
import { dellToken } from "components/services";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { User, UserMenuButton } from "components/stiled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const profile = useSelector(selectProfile)
    // console.log(profile)
    const handelLogOut = () => {
        dispatch(logOut())
        dellToken()
        navigate('/')
    }
  
    return (
      <User>
        <p>Welcome, {profile.name}</p>
        <UserMenuButton type="button" onClick={handelLogOut}>
          Logout
        </UserMenuButton>
      </User>
    );
  };