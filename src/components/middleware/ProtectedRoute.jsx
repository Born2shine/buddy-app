import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const ProtectedRoute = ({ allowedRoles }) => {
    const { user } = useSelector((state) => state.auth)

    const location = useLocation()
    const navigate = useNavigate()

    if (!user?.token) {
      return <Navigate to="/" state={{from: location}} replace />
    }
    return (
      user?.token
      ? <Outlet/>
      : navigate(-1)
    )

}

export default ProtectedRoute