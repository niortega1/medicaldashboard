import React, { useState } from "react";
import UsersPage from "./UsersPage";

const RightProfile = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode-variables');
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className={`right-section ${darkMode ? 'dark-mode' : ''}`}>
            <div className="nav">
                <button id="menu-btn" onClick={toggleMenu}>
                    <span className="material-icons-sharp">
                        menu
                    </span>
                </button>
                <div className="dark-mode" onClick={toggleDarkMode}>
                    <span className="material-icons-sharp active">
                        {darkMode ? 'dark_mode' : 'light_mode'}
                    </span>
                </div>

                <div class="profile">
                    <div class="info">
                        <p>Hey, <b>Nick</b></p>
                        <small class="text-muted">Admin</small>
                    </div>
                    <div class="profile-photo">
                        <img src="images/profile-icon.png"/>
                    </div>
                </div>

            </div>
            <div class="user-profile">
                <div class="logo">
                    <img src="images/profile-icon.png"/>
                    <h2>Nicolas Ortega</h2>
                    <p>Front-End Developer</p>
                </div>
            </div>

            <div class="reminders">
                <div class="header">
                    <h2>Reminders</h2>
                    <span class="material-icons-sharp">
                        notifications_none
                    </span>
                </div>

                <div class="notification">
                    <div class="icon">
                        <span class="material-icons-sharp">
                            volume_up
                        </span>
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>Workshop</h3>
                            <small class="text_muted">
                                08:00 AM - 12:00 PM
                            </small>
                        </div>
                        <span class="material-icons-sharp">
                            more_vert
                        </span>
                    </div>
                </div>

                <div class="notification deactive">
                    <div class="icon">
                        <span class="material-icons-sharp">
                            edit
                        </span>
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>Workshop</h3>
                            <small class="text_muted">
                                08:00 AM - 12:00 PM
                            </small>
                        </div>
                        <span class="material-icons-sharp">
                            more_vert
                        </span>
                    </div>
                </div>

                <div class="notification add-reminder">
                    <div>
                        <span class="material-icons-sharp">
                            add
                        </span>
                        <h3>Add Reminder</h3>
                    </div>
                </div>

            </div>
            <UsersPage />
        </div>
    );
};

export default RightProfile;