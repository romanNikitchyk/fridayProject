import {NavLink} from 'react-router-dom';

export function TestHeader() {
    const liStyle = {padding: 10, fontSize: 20, fontWeight: 700}
    const activeStyle = ({isActive}: { isActive: boolean }) => (isActive ? {
        color: 'darkred',
        textDecoration: 'none',
    } : {
        color: 'darkblue',
        textDecoration: 'none',
    })

    return (
        <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 0}}>
            <li style={liStyle}>
                <NavLink to={'/login'} style={activeStyle}>
                    Login
                </NavLink>
            </li>
            <li style={liStyle}>
                <NavLink to={'/'} style={activeStyle}>
                    Main
                </NavLink>
            </li>
            <li style={liStyle}>
                <NavLink to={'/new-pass'} style={activeStyle}>
                    New-pass
                </NavLink>
            </li>
            <li style={liStyle}>
                <NavLink to={'/404'} style={activeStyle}>
                    Not Found
                </NavLink>
            </li>
            <li style={liStyle}>
                <NavLink to={'/profile'} style={activeStyle}>
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