import React, { Suspense } from 'react'
// import { RotatingLines } from  'react-loader-spinner'
import { Outlet } from "react-router-dom";
import {StyledLink, Nav} from '../stiled';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/Page/UserMenu';


function Layout() {
  const {profile} = useSelector(state => state.auth)
  return (
    <div>
      <Nav>
        {!profile && <StyledLink to="/login">Login</StyledLink>}
        {!profile && <StyledLink to="/register">Registration</StyledLink>}
        {profile && <UserMenu />}
        {profile && <StyledLink to="/contacts">Contacts</StyledLink>}
      </Nav>
      <Suspense >
        <Outlet />
      </Suspense>
    </div>
  )
}

export default Layout
