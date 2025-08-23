import { MicIcon, SearchIcon, XIcon, MenuIcon } from "lucide-react";
import logo from '../../../../assets/images/Logo.png';
import { Button } from "../../../../components/ui/button";
import Announcement from "../../../../components/navbar/Announcement";
import { useState } from "react";
import { Input } from "../../../../components/ui/input";
import Signin from "../../../auth/signin";
import { SaveSearchModal } from "../../../../components/SavesSearchModal/SavesSearchModal";
import DropdownUser from "../DropdownUser";
import { NotificationsDropdown } from "../../../../components/NotificationsModal/NotificationsModal";
import { Link, useNavigate } from "react-router-dom";

const navigationItems = [
  {
    icon: (
      <svg width="26" height="24" viewBox="0 0 26 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_9486_2293" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="24">
          <rect x="0.657227" width="24.6857" height="24" fill="white"/>
        </mask>
        <g mask="url(#mask0_9486_2293)">
          <path 
            d="M18.2556 12.6093V19.4791L12.1857 16.445L6.11583 19.4791V5.39471H9.17101C9.19578 5.04303 9.24968 4.83588 9.32912 4.50479C9.41188 4.15983 9.5224 3.8267 9.6566 3.50674H6.11583C5.00301 3.50674 4.09253 4.41701 4.09253 5.52954V19.6891C4.09253 20.8016 4.09253 22.2177 6.11583 21.7119L12.1857 18.6778L18.2556 21.7119C20.2789 22.2177 20.2789 20.8016 20.2789 19.6891V14.6321L18.2556 12.6093ZM19.5708 8.45248C20.0159 7.74451 20.2789 6.92527 20.2789 6.03523C20.2789 3.51686 18.2455 1.48395 15.7265 1.48395C13.2075 1.48395 11.1741 3.51686 11.1741 6.03523C11.1741 8.55363 13.2075 10.5865 15.7164 10.5865C16.6066 10.5865 17.4362 10.3236 18.1342 9.87856L20.573 12.3168C20.9693 12.713 21.6118 12.713 22.0081 12.3168C22.4049 11.92 22.4045 11.2764 22.0069 10.8802L19.5708 8.45248ZM15.7265 8.56374C14.3304 8.56374 13.1974 7.43097 13.1974 6.03523C13.1974 4.6395 14.3304 3.50674 15.7265 3.50674C17.1225 3.50674 18.2556 4.6395 18.2556 6.03523C18.2556 7.43097 17.1225 8.56374 15.7265 8.56374Z" 
            fill="currentColor"
          />
        </g>
      </svg>
    ),
    label: "SavedSearches",
    width: "w-[106px]",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" 
          stroke="currentColor"
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Notifications",
    width: "w-[86px]",
  },
  {
    icon: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-red-500">
        <path 
          d="M21.3401 4.60999C20.8294 4.099 20.2229 3.69364 19.5555 3.41708C18.888 3.14052 18.1726 2.99817 17.4501 2.99817C16.7276 2.99817 16.0122 3.14052 15.3448 3.41708C14.6773 3.69364 14.0709 4.099 13.5601 4.60999L12.5001 5.66999L11.4401 4.60999C10.4084 3.5783 9.00915 2.9987 7.55012 2.9987C6.09109 2.9987 4.69181 3.5783 3.66012 4.60999C2.62843 5.64169 2.04883 7.04096 2.04883 8.49999C2.04883 9.95903 2.62843 11.3583 3.66012 12.39L4.72012 13.45L12.5001 21.23L20.2801 13.45L21.3401 12.39C21.8511 11.8792 22.2565 11.2728 22.533 10.6053C22.8096 9.93789 22.9519 9.22248 22.9519 8.49999C22.9519 7.77751 22.8096 7.0621 22.533 6.39464C22.2565 5.72718 21.8511 5.12075 21.3401 4.60999V4.60999Z" 
          stroke="currentColor"
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Favorites",
    width: "w-[67px]",
      path: "/my-favorites" 
  },
  {
    icon: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-red-500">
        <path 
          d="M20.5 9C19.7048 5.01455 16.0128 2 11.5793 2C6.56549 2 2.5 5.85521 2.5 10.61C2.5 12.8946 3.43819 14.9704 4.96855 16.5108C5.30549 16.85 5.53045 17.3134 5.43966 17.7903C5.28982 18.5701 4.95026 19.2975 4.45305 19.9037C5.76123 20.1449 7.12147 19.9277 8.28801 19.3127C8.70039 19.0954 8.90657 18.9867 9.05207 18.9646C9.15392 18.9492 9.28659 18.9636 9.5 19.0002" 
          stroke="currentColor"
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M11.5 16.2617C11.5 19.1674 13.9628 21.5234 17 21.5234C17.3571 21.5238 17.7132 21.4908 18.064 21.425C18.3165 21.3775 18.4428 21.3538 18.5309 21.3673C18.619 21.3807 18.744 21.4472 18.9938 21.58C19.7004 21.9558 20.5244 22.0885 21.3169 21.9411C21.0157 21.5707 20.81 21.1262 20.7192 20.6496C20.6642 20.3582 20.8005 20.075 21.0046 19.8677C21.9317 18.9263 22.5 17.6578 22.5 16.2617C22.5 13.356 20.0372 11 17 11C13.9628 11 11.5 13.356 11.5 16.2617Z" 
         stroke="currentColor"
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Chats",
    width: "w-[67px]",
     path: "/messages"
  },
];

export const NavbarSubsection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeModal, setActiveModal] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
    const openModal = (modalName: string, event: React.MouseEvent<HTMLElement>) => {
   
    if (activeModal === modalName) {
      setActiveModal(null);
      setAnchorEl(null);
    } else {
      setActiveModal(modalName);
      setAnchorEl(event.currentTarget);
    }
  };

  const closeModal = () => {
    setActiveModal(null);
    setAnchorEl(null);
  };

  return (
    <>
      <Announcement />
      <header className="w-full bg-[#ffffff] relative">
        <nav className="flex h-[80px] border-b items-center justify-between mx-auto px-4 md:px-6">
          {/* Left section - Logo and Search */}
          <div className="flex items-center gap-2 md:gap-8">
            <div className="flex items-center">
              <img
                className="w-[100px] md:w-[142px] h-11"
                alt="Logo wrap"
                src={logo}
              />
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden ml-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <MenuIcon className="w-5 h-5" />
              </Button>
            </div>

            <div className="hidden md:block relative w-72 h-11">
              <div className="flex flex-col w-72 items-start gap-1.5 relative">
                <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-full">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                      <SearchIcon className="w-5 h-5 text-gray-500" />
                    </div>
                    <Input 
                       onChange={()=>navigate('/search')}
                      className="shadow-shadow-xs h-12 w-full pl-10 pr-10" 
                      placeholder="Find your ideal vehicle." 
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                      <MicIcon className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile search button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <SearchIcon className="w-5 h-5 text-gray-500" />
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
            <div className="inline-flex items-center text-gray-500 gap-[18px] relative flex-[0_0_auto]">
              {navigationItems.map((item, index) => {
                const modalNames = ['saved-searches', 'notifications', 'favorites', 'chats'];
                return (
 <Link
                 key={index}
                      to={item.path}
        onClick={(e) => openModal(modalNames[index], e)}

        className={`group flex flex-col ${item.width} items-center gap-2 relative cursor-pointer`}
                >
                  <div className="group-hover:text-red-500">
                    {item.icon}
                  </div>
                  <div className="relative [font-family:'Mona_Sans',Helvetica] font-medium text-gray-500 text-sm text-center tracking-[0] leading-5 group-hover:text-red-500">
                    {item.label}
                  </div>
                </Link>
                )
                
               
})}

 <NotificationsDropdown
                isOpen={activeModal === 'notifications'} 
                onClose={closeModal}
                anchorEl={anchorEl}
              />

 <SaveSearchModal
          isOpen={activeModal === 'saved-searches'} 
          onClose={closeModal} 
        />
        

              <div className="h-11 w-px  bg-gray-400"></div>

              <Link to={'/my-ads'}  className="group  text-gray-500 flex flex-col w-[75px] items-center gap-2 relative cursor-pointer">
                <svg 
                className="group-hover:text-red-500"
                  width="25" 
                  height="24" 
                  viewBox="0 0 25 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  
                >
                 <path 
                    d="M15.4263 4.41103L8.77352 7.60452C8.26151 7.85029 7.71443 7.91187 7.15675 7.78693C6.79177 7.70517 6.60926 7.66429 6.4623 7.64751C4.63743 7.43912 3.5 8.88342 3.5 10.5443V11.4557C3.5 13.1166 4.63743 14.5609 6.4623 14.3525C6.60926 14.3357 6.79178 14.2948 7.15675 14.2131C7.71443 14.0881 8.26151 14.1497 8.77352 14.3955L15.4263 17.589C16.9534 18.3221 17.717 18.6886 18.5684 18.4029C19.4197 18.1172 19.7119 17.5041 20.2964 16.278C21.9012 12.9112 21.9012 9.08885 20.2964 5.72196C19.7119 4.49586 19.4197 3.88281 18.5684 3.5971C17.717 3.3114 16.9534 3.67794 15.4263 4.41103Z" 
                    stroke="currentColor"
                    strokeWidth="1.5" 
                  />
                  <path 
                    d="M13.5 17V17.5C13.5 18.7841 13.5 19.4261 13.276 19.7886C12.9773 20.2719 12.4312 20.545 11.8653 20.4939C11.4409 20.4557 10.9273 20.0704 9.9 19.3L8.7 18.4C7.72253 17.6669 7.5 17.2218 7.5 16V14.5" 
                    stroke="currentColor"
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M8 14V8" 
                    stroke="#667085" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="relative self-stretch [font-family:'Mona_Sans',Helvetica] font-medium text-gray-500 text-sm text-center tracking-[0] leading-5 group-hover:text-red-500">
                  My Listings
                </div>
              </Link>

              <div className="h-11 w-px bg-gray-400"></div>
            </div>

            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              {/* <Button
                 onClick={() => setIsOpen(true)}
                variant="ghost"
                className="h-auto px-[18px] border py-2.5 hover:border-red-500   border-transparent hover:bg-transparent hover:border text-gray-500 text-base font-medium [font-family:'Mona_Sans',Helvetica]  hover:text-red-500"
              >
                Login or Signup
              </Button> */}
              <div  className=" pl-3">

              <DropdownUser/>
              </div>
              <Link to={'/post-ads'}>

  <Button className="h-auto px-[18px] py-2.5 bg-primary-600 text-[#ffffff] text-base font-medium [font-family:'Mona_Sans',Helvetica] border border-solid border-[#ff0000] shadow-shadow-xs hover:bg-primary-700">
                Post Your Ad
              </Button>
              </Link>
            
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white w-full absolute z-50 shadow-lg">
            {/* Mobile search bar */}
            <div className="p-4 border-b">
              <div className="flex items-center gap-2 px-3.5 py-2.5 relative w-full bg-[#ffffff] rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs">
                <div className="items-center gap-2 flex-1 grow flex relative">
                  <SearchIcon className="w-5 h-5 text-gray-500" />
                  <div className="w-fit mt-[-1.00px] font-[number:var(--text-md-normal-font-weight)] text-gray-500 text-[length:var(--text-md-normal-font-size)] tracking-[var(--text-md-normal-letter-spacing)] leading-[var(--text-md-normal-line-height)] whitespace-nowrap relative font-text-md-normal [font-style:var(--text-md-normal-font-style)]">
                    Find your ideal vehicle.
                  </div>
                </div>
                <MicIcon className="w-5 h-5 text-gray-500" />
              </div>
            </div>

            {/* Mobile navigation items */}
            <div className="p-4 grid grid-cols-2 gap-4">
              {navigationItems.map((item, index) => {
                 const IconComponent = item.icon;
                const modalNames = ['saved-searches', 'notifications', 'favorites', 'chats'];
                return (
<div
                  key={index}
                  className="group flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer"
                >
                  <div  onClick={(e) => openModal(modalNames[index], e)} className="group-hover:[&>svg]:stroke-red-500">
                    {item.icon}
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-red-500">
                    {item.label}
                  </span>
                </div>
                )
                
})}
              <div className="group flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <svg 
                  width="25" 
                  height="24" 
                  viewBox="0 0 25 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:stroke-red-500"
                >
                  <path 
                    d="M15.4263 4.41103L8.77352 7.60452C8.26151 7.85029 7.71443 7.91187 7.15675 7.78693C6.79177 7.70517 6.60926 7.66429 6.4623 7.64751C4.63743 7.43912 3.5 8.88342 3.5 10.5443V11.4557C3.5 13.1166 4.63743 14.5609 6.4623 14.3525C6.60926 14.3357 6.79178 14.2948 7.15675 14.2131C7.71443 14.0881 8.26151 14.1497 8.77352 14.3955L15.4263 17.589C16.9534 18.3221 17.717 18.6886 18.5684 18.4029C19.4197 18.1172 19.7119 17.5041 20.2964 16.278C21.9012 12.9112 21.9012 9.08885 20.2964 5.72196C19.7119 4.49586 19.4197 3.88281 18.5684 3.5971C17.717 3.3114 16.9534 3.67794 15.4263 4.41103Z" 
                    stroke="#667085" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M13.5 17V17.5C13.5 18.7841 13.5 19.4261 13.276 19.7886C12.9773 20.2719 12.4312 20.545 11.8653 20.4939C11.4409 20.4557 10.9273 20.0704 9.9 19.3L8.7 18.4C7.72253 17.6669 7.5 17.2218 7.5 16V14.5" 
                    stroke="#667085" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M8 14V8" 
                    stroke="#667085" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-medium text-gray-700 group-hover:text-red-500">
                  My Listings
                </span>
              </div>
            </div>

            {/* Mobile auth buttons */}
            <div className="p-4 border-t flex flex-col gap-3">
              <Button
                variant="outline"
                className="w-full py-3 text-gray-700 font-medium hover:text-red-500"
              >
                Login or Signup
              </Button>
              <Button className="w-full py-3 bg-primary-600 text-white font-medium hover:bg-primary-700">
                Post Your Ad
              </Button>
            </div>
          </div>
        )}
      <Signin isOpen={isOpen} onClose={() => setIsOpen(false)} />

       
      </header>
    </>
  );
};