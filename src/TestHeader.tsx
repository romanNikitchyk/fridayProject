import { NavLink } from 'react-router-dom'
import { useAppSelector } from './common/hook/hook'
import Error from './common/components/ErrorOrMessage/Error'
import Message from './common/components/ErrorOrMessage/Message'

export function TestHeader() {
  const error = useAppSelector((state) => state.auth.error)
  const errorText = useAppSelector((state) => state.auth.errorText)
  const message = useAppSelector((state) => state.auth.message)
  const messageText = useAppSelector((state) => state.auth.messageText)
  const liStyle = { padding: 10, fontSize: 20, fontWeight: 700 }
  const activeStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? {
          color: 'darkred',
          textDecoration: 'none',
        }
      : {
          color: 'darkblue',
          textDecoration: 'none',
        }

  return (
    <ul
      style={{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
      }}
    >
      {error && <Error text={errorText} />}
      {message && <Message text={messageText} />}
      <li style={liStyle}>
        <NavLink to={'/login'} style={activeStyle}>
          Login
        </NavLink>
      </li>
      {/*<li style={liStyle}>*/}
      {/*  <NavLink to={'/'} style={activeStyle}>*/}
      {/*    Main*/}
      {/*  </NavLink>*/}
      {/*</li>*/}
      <li style={liStyle}>
        <NavLink to={'/set-new-password'} style={activeStyle}>
          New-pass
        </NavLink>
      </li>
      <li style={liStyle}>
        <NavLink to={'/404'} style={activeStyle}>
          Not Found
        </NavLink>
      </li>
      <li style={liStyle}>
        <NavLink to={'/Profile'} style={activeStyle}>
          Profile
        </NavLink>
      </li>
      <li style={liStyle}>
        <NavLink to={'/recovery'} style={activeStyle}>
          Recovery
        </NavLink>
      </li>
      <li style={liStyle}>
        <NavLink to={'/register'} style={activeStyle}>
          Register
        </NavLink>
      </li>
      <li style={liStyle}>
        <NavLink to={'/test'} style={activeStyle}>
          Test
        </NavLink>
      </li>
    </ul>
  )
}
