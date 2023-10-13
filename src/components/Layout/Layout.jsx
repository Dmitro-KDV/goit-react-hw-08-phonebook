import React, { Suspense } from 'react'
// import { RotatingLines } from  'react-loader-spinner'
import { Outlet } from "react-router-dom";
import {StyledLink, Nav} from '../stiled';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/Phonebook/UserMenu';
import { selectToken } from 'components/redux/auth/selector';
// import { Contacts } from 'components/Phonebook/Contacts';


function Layout() {
  const isAuth = useSelector(selectToken)

  return (
    <div>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        {!isAuth && (
          <>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Registration</StyledLink>
          </>
        )}
        {/* {!profile && <StyledLink to="/login">Login</StyledLink>}
        {!profile && <StyledLink to="/register">Registration</StyledLink>} */}
        {isAuth && <UserMenu />}
        {/* {profile && <Contacts />} */}
        {/* {profile && <StyledLink to="/contacts">Contacts</StyledLink>} */}
      </Nav>
      <Suspense >
        <Outlet />
      </Suspense>
    </div>
  )
}

export default Layout
