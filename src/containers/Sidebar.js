import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    const handleClick = (name) => {
        setActiveTab(name);
    }

    return (
        <div>
            <aside>
            <div class="toggle">
                <div class="logo">
                    <h2>Medical Dashboard</h2>
                </div>
                <div class="close" id="close-btn">
                    <span class="material-icons-sharp">
                        close
                    </span>
                </div>
            </div>
            <div class="sidebar">
            <Link to="/" onClick={() => handleClick('/')} className={activeTab === '/' ? 'active' : ''}>
                    <span class="material-icons-sharp">
                        dashboard
                    </span>
                    <h3>Dashboard</h3>
                </Link>
                <Link to="/users" onClick={() => handleClick('/users')} className={activeTab === '/users' ? 'active' : ''}>
                    <span class="material-icons-sharp">
                        person_outline
                    </span>
                    <h3>Users</h3>
                </Link>
                <Link to="/patients" onClick={() => handleClick('/patients')} className={activeTab === '/patients' ? 'active' : ''}>
                    <span class="material-icons-sharp">
                        people_outline
                    </span>
                    <h3>Patients</h3>
                    <span class="message-count">7</span>
                </Link>
                <Link to="/appointments" onClick={() => handleClick('/appointments')} className={activeTab === '/appointments' ? 'active' : ''}>
                    <span class="material-icons-sharp">
                        calendar_today
                    </span>
                    <h3>Appointments</h3>
                </Link>
                <Link to="/billing" onClick={() => handleClick('/billing')} className={activeTab === '/billing' ? 'active' : ''}>
                    <span class="material-icons-sharp">
                        payment
                    </span>
                    <h3>Billing</h3>
                </Link>
                <Link to="/settings">
                    <span class="material-icons-sharp">
                        settings
                    </span>
                    <h3>Settings</h3>
                </Link>
                <Link to="/">
                    <span class="material-icons-sharp">
                        logout
                    </span>
                    <h3>Logout</h3>
                </Link>
            </div>
        </aside>
        </div>
    )
}

export default Sidebar;