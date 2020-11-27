import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
   return (
      <nav
         className="navbar navbar-expand-lg navbar-dark "
         style={{ backgroundColor: "#f05454" }}
      >
         <Link className="navbar-brand" to="/">
            Video Crud
         </Link>
         <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
               <li className="nav-item">
                  <Link className="nav-link" to="new">
                     Crear Nuevo Video
                  </Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default Navbar;
