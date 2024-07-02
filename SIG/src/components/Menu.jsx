import React from 'react';
import '../styles/Menu.css';
import { DashboardOutlined, UserOutlined, BookOutlined, NotificationOutlined, SmileOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { FaUserLarge } from "react-icons/fa6";

function Menucomp() {
 return (
    <div className="menu-container">
        <a href='/temario'>
            <BookOutlined style={{ fontSize: '27px', color:'#878787', }}/>
        </a>
        <a href='/dashboard'>
            <DashboardOutlined style={{ fontSize: '28px', color:'#878787', }}/>
        </a>
        <a href='/profile'>
            <UserOutlined style={{ fontSize: '28px', color:'#878787', }}/>
        </a>
    </div>
 );
}
export default Menucomp;