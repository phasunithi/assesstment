import {Link} from "react-router-dom";
import React from 'react'
function Navbar () {
  return (
        <nav className="bg-gray-200  p-4">
            <ul className="flex justify-end space-x-6">
                <li>
                    <Link to = "/"className="text-black font-semibold hover:text-blue-500 ">Home</Link>
                </li>
                <li>
                    <Link to = "/Owner"className="text-black font-semibold hover:text-blue-500 ">Owner</Link>
                </li>
                   
            </ul>
            
            
        </nav>
  )
}

export default Navbar;
