import React, { useContext } from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">
                        MAIN
                    </p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">
                        LISTS
                    </p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineOutlinedIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <StorefrontOutlinedIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">
                        USEFUL
                    </p>
                    <li>
                        <InsertChartOutlinedIcon className="icon" />
                        <span>States</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">
                        SERVICE
                    </p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">
                        USER
                    </p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profiles</span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOptions" onClick={()=>dispatch({type:"LIGHT"})}></div>
                <div className="colorOptions"onClick={()=>dispatch({type:"DARK"})}> </div>
            </div>
        </div>
    )
}

export default Sidebar