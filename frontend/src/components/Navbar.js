import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
// Navbar.js
import React from "react";

const Navbar = () => {

  const { logout } = useLogout()
  const { user}=useAuthContext()

  const handleClick=()=>{
    logout();
   

  }
   return (
     <nav className="navbar">
       <a className="navbar-brand" href="/">
         Event Management System
       </a>
       {user && (
         <ul className="navbar-links">
           <span className="username">{user.username}</span>
           <span className="role">{user.role}</span>
           <Link to="/">
             <button className="logout-button" onClick={handleClick}>
               Logout
             </button>
           </Link>
           <Link to="/myProfile">
             <button className="logout-button">My Profile</button>
           </Link>
         </ul>
       )}
     </nav>
   );
};

export default Navbar;
