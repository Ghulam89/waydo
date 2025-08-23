import React from 'react'
import profile from '../../assets/images/profile.png';
import verified from '../../assets/images/icons/verified.png';
import { NavLink, Outlet } from 'react-router-dom';
const PublicProfile = () => {

     const navItems = [
    {
      to: "/public-profile",
      label: "Ads",
    },
    { to: "public-reviews", label: "Review"}
    
  ];

  return (
    <div className='  max-w-6xl mb-8 mx-auto'>

         <div className="px-4 py-4  flex items-center gap-2">
          <img src={profile} className="w-16 h-16 rounded-full" alt="User" />
          <div>
            <p className=" text-2xl font-semibold items-center gap-1 text-gray-800 flex ">Olivia Rhye  <div>
                <img src={verified} alt=''  className=' w-6' /></div> </p>
            <p className="text-xs text-gray-500">Joined on Auguest 2025</p>
          </div>
        </div>
            
             <ul className=" flex items-center border-b ">
                        {navItems.map((item) => (
                          <li key={item.to}>
                            <NavLink
                              to={item.to}
                              end
                              className={({ isActive }) =>
                                `w-full flex gap-2 px-4 py-2.5  text-sm  font-semibold  transition ${
                                  isActive
                                    ? " text-primary-500  border-b-2  border-primary-600"
                                    : "text-gray-400 hover:bg-gray-5 "
                                }`
                              }
                            >
                              {item?.icon} {item.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>


                       {/* Main Content */}
                              <div className="bg-white">
                                <Outlet />
                              </div>
         
   
    </div>
  )
}

export default PublicProfile