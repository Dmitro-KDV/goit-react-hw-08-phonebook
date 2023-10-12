import { useDispatch, useSelector } from "react-redux";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const {profile} = useSelector(state => state.auth)
    const handelLogOut = () => {

    }
  
    return (
      <div>
        <p>Welcome, {profile.name}</p>
        <button type="button" onClick={() => dispatch(handelLogOut())}>
          Logout
        </button>
      </div>
    );
  };