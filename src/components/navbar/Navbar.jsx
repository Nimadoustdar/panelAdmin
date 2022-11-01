import React, { useContext } from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import {
  ChatBubbleOutlineOutlined
  , DarkModeOutlined,
  FullscreenExitOutlined,
  ListOutlined,
  NotificationAddOutlined
} from '@mui/icons-material';
import { DarkModeContext } from '../../context/darkModeContext';
const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" name="" id="" placeholder='Search...' />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationAddOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">2</div>

          </div>
          <div className="item">
            <ListOutlined className="icon" />

          </div>
          <div className="item">
            <div className="item">
              <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt='avatar'
                className='avatar' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar