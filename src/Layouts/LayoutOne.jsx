import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarCompo from '../Components/Navbar/NavbarCompo'

const LayoutOne = () => {
  return (
    <>
    <NavbarCompo/>
    <Outlet/>
    </>
  )
}

export default LayoutOne