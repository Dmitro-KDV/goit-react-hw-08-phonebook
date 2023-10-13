import { selectProfile } from "components/redux/auth/selector";
import { logOut } from "components/redux/auth/slice";
import { dellToken } from "components/services";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
      <div>
        <p>Welcome, {profile.user.name}</p>
        <button type="button" onClick={handelLogOut}>
          Logout
        </button>
      </div>
    );
  };