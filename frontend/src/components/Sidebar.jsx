import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import '../styles/index.css'

const Sidebar = () => {
  const [sidebar, setSidebar] = useState()
  const showSidebar = () => setSidebar(!sidebar)
  const sideMenu = [
    {
      title: 'Welcome',
      path: '/',
      icon: <FiIcons.FiBookOpen />,
      className: 'sidebar-text'
    },
    {
      title: 'Home',
      path: '/home',
      icon: <AiIcons.AiOutlineHome />,
      className: 'sidebar-text'
    },
    {
      title: 'About',
      path: '/about',
      icon: <AiIcons.AiOutlineInfoCircle />,
      className: 'sidebar-text'
    },
    {
      title: 'Contact Us',
      path: '/contact',
      icon: <AiIcons.AiOutlineMail />,
      className: 'sidebar-text'
    }
  ]

  return (
    <>
      <div className="sidebar">
        <Link to="#" className="sidebar-bars">
          <img src={'../images/storytime-logo@3x_square.png'} alt="" />
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
        <ul className="sidebar-items">
          <li className="sidebar-toggle">
            <Link to="#" className="sidebar-bars">
              <AiIcons.AiOutlineClose
                onClick={showSidebar}
                className="sidebar-close"
              />
            </Link>
          </li>
          {sideMenu.map((data, index) => {
            return (
              <li key={index} className={data.name}>
                <Link class to={data.path}>
                  <span className="link-icon">
                    {data.icon} {data.title}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Sidebar
