import React, { useState } from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";

const AdminNavbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    const showHideNavbar = () => {
        setToggleNavbar(!toggleNavbar);
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Dashboard</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    
                    
                </div>
                
            </div>
        </div>
    );
};

export default AdminNavbar;
