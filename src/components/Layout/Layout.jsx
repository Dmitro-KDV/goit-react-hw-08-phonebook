import React, { Suspense } from 'react'
// import { RotatingLines } from  'react-loader-spinner'
import { Outlet } from "react-router-dom";
import {StyledLink, Nav, Container, MenuContacts} from '../stiled';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/Phonebook/UserMenu';
import { selectToken } from 'components/redux/auth/selector';
// import { Contacts } from 'components/Phonebook/Contacts';


function Layout() {
  const isAuth = useSelector(selectToken)

  return (
    <Container>
      <Nav>
        <MenuContacts>
          <StyledLink to="/">Home</StyledLink>
          {isAuth && <StyledLink to="/contacts">Contacts</StyledLink>}
        </MenuContacts>
        {!isAuth && (
          <div>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Registration</StyledLink>
          </div>
        )}
        {isAuth && (
          <>
            <UserMenu />
          </>)}
      </Nav>
      <Suspense >
        <Outlet />
      </Suspense>
    </Container>
  )
}

export default Layout
