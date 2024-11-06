
import React from 'react';
import {Link,Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



function Home() {
    const location = useLocation();

    return (
      <div className="p-4">

         
      {location.pathname === '/' && (
        <h1 className="text-center text-5xl font-semibold mb-8">Generation Thailand  <br />React-Assessment </h1>
      )}
      {location.pathname === '/UserHomeSector' && (
        <h1 className="text-center text-5xl font-semibold mb-8">Generation Thailand  <br />Home-User Sector </h1>
      )}
      {location.pathname === '/AdminHomeSector' && (
        <h1 className="text-center text-5xl font-semibold mb-8">Generation Thailand  <br />Home-Admin Sector</h1>
      )}
        <nav>
          
            <div className=" flex justify-center items-center  space-x-10 mb-20" >
              <Link
                to="UserHomeSector"
                className=" text-black bg-slate-200 py-2 px-6 rounded-md font-semibold hover:bg-sky-200 active:bg-sky-200 focus:outline-none focus:ring "
              >
                 User Home Sector
              </Link>
           
            
              <Link
                to="AdminHomeSector"
                className=" text-black bg-slate-200 py-2 px-6 rounded-md font-semibold hover:bg-sky-200 active:bg-sky-200 focus:outline-none focus:ring"
              >
                 Admin Home Sector
              </Link>
            
          </div>
        </nav>
        <div>
        <Outlet />
        </div>
      </div>
    );
  }
  
  export default Home;
