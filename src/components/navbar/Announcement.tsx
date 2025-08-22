import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { Button } from '../ui/button';

const Announcement =  (): React.ReactElement | null => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-[#444CE7] flex justify-between sm:px-3 px-1.5 items-center text-center py-2 w-full">
      {/* Empty div for spacing balance */}
      <div className="w-6"></div>
      
      <div className='flex flex-col md:flex-row justify-center items-center gap-2 mx-2'>
       
        <p className='m-0 text-white  gap-2 flex text-xs md:text-[14px] text-center'>
         <img 
          src={"public/verified.png"}  
          alt="Verified badge" 
          className="w-5 h-5" 
        />  Join us in building a safer community. Get verified to boost your credibility and assist us in creating trust amongst our users!
        </p>
       
         <Button className="border-2 rounded-xl h-8 text-white text-xs md:text-[14px] px-2 md:px-3 border-white whitespace-nowrap bg-transparent hover:bg-transparent">
            Button CTA
            </Button>
      </div>

      <button 
        onClick={handleClose}
        className="w-6 flex justify-end"
        aria-label="Close   announcement"
      >
        <IoClose color='white' size={20} />
      </button>
    </div>
  );
};

export default Announcement;