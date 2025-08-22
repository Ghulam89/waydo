import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  const storedData = localStorage.getItem('userData');
  let userData = null;

  try {
    userData = storedData ? JSON.parse(storedData) : null;
  } catch (error) {}

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current || !dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <>
   
       <div className="relative">
      <button
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2"
      >
        <img src="public/profile.png" className="w-10 h-10 rounded-full" alt="User" />
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

{/* Backdrop */}
  {dropdownOpen && (
    <div
      onClick={() => setDropdownOpen(false)}
      className="fixed inset-0 bg-[rgba(0,0,0,0.2)] bg-opacity-40 z-40 transition-opacity duration-300"
    />
  )}

   
      <div
    ref={dropdown}
    className={`absolute right-0 mt-3 w-72 rounded-lg border border-gray-200 bg-white shadow-xl z-50 transition-all duration-300 transform ${
      dropdownOpen
        ? 'opacity-100 scale-100'
        : 'opacity-0 scale-95 pointer-events-none'
    }`}
  >
        

        {/* Top User Info */}
        <div className="px-4 py-4 border-b border-gray-200 flex items-center gap-3">
          <img src="public/profile.png" className="w-10 h-10 rounded-full" alt="User" />
          <div>
            <p className="text-sm font-semibold text-gray-800">Olivia Rhye</p>
            <p className="text-xs text-gray-500">olivia@waydo.com</p>
          </div>
        </div>

        {/* Menu Links */}
        <ul className="px-4 py-3 text-sm text-gray-700">
          <li onClick={()=>setDropdownOpen(false)}><Link to="/my-profile" className="block py-2 hover:text-blue-600">View profile</Link></li>
          <li><Link to="#" className="block py-2 hover:text-blue-600">Public Profile</Link></li>
          <li className="flex items-center gap-2 py-2 font-medium">
            <img src='public/verified.png' alt='' />
            <Link to="#">Get Verified</Link>
          </li>
          <li><Link to="#" className="block py-2 hover:text-blue-600">My Listings</Link></li>
          <li><Link to="#" className="block py-2 hover:text-blue-600">Chats</Link></li>
          <li onClick={()=>setDropdownOpen(false)}><Link to="/my-favorites" className="block py-2 hover:text-blue-600">Favorites</Link></li>
          <li onClick={()=>setDropdownOpen(false)}><Link to="/save-searches" className="block py-2 hover:text-blue-600">My Searches</Link></li>
          <li><Link to="/my-profile" className="block py-2 hover:text-blue-600">Settings</Link></li>
          <li><Link to="#" className="block py-2 hover:text-blue-600">Support</Link></li>
        </ul>

        {/* Divider */}
        <hr className="border-t border-gray-200" />

        {/* Logout */}
        <button
          onClick={() => console.log('Log out')}
          className="w-full text-left px-4 py-3  flex items-center gap-2 text-sm text-gray-700 hover:text-red-600"
        >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33333 2.06334C9.02866 2.02161 8.71702 2 8.4 2C4.86538 2 2 4.68629 2 8C2 11.3137 4.86538 14 8.4 14C8.71702 14 9.02866 13.9784 9.33333 13.9367" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14.0002 8.00004L7.3335 8.00004M14.0002 8.00004C14.0002 7.53322 12.6706 6.66106 12.3335 6.33337M14.0002 8.00004C14.0002 8.46686 12.6706 9.33902 12.3335 9.66671" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  Log out
        </button>
      </div>
 
    </div>
    </>
   
  );
};

export default DropdownUser;
