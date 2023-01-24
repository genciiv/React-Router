import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth.js'

export const RequireAuth = ({ children }) => {
  const location = useLocation()
  const auth = useAuth()
  if (!auth.user) {
    return <Navigate to='/login' state={{ path: location.pathname }} />
  }
  return children
}