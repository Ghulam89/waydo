import { useState } from "react";
import { Modal } from "../common/Modal";
import { Button } from "../ui/button";

interface DeleteAccountProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onClose: () => void;
}

export default function DeleteAccount({ open, setOpen, onClose }: DeleteAccountProps) {
 

  const handleDeactivate = () => {
    console.log("Account deactivated!");
    setOpen(false);
  };
   
  
  return (
    <div>
    
      <Modal
        isOpen={open}
        onClose={onClose}
        title="Deactivate Account"
         className="  max-w-md  h-72  rounded-xl"
      >
       <div>
         <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="4" width="48" height="48" rx="24" fill="#FEF3F2"/>
<rect x="4" y="4" width="48" height="48" rx="24" stroke="#FEF3F2" stroke-width="8"/>
<path d="M35.5 21.5L34.8803 31.5251C34.7219 34.0864 34.6428 35.3671 34.0008 36.2879C33.6833 36.7431 33.2747 37.1273 32.8007 37.416C31.8421 38 30.559 38 27.9927 38C25.4231 38 24.1383 38 23.1791 37.4149C22.7048 37.1257 22.296 36.7408 21.9787 36.2848C21.3369 35.3626 21.2595 34.0801 21.1046 31.5152L20.5 21.5" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round"/>
<path d="M19 21.5H37M32.0557 21.5L31.3731 20.0917C30.9196 19.1563 30.6928 18.6885 30.3017 18.3968C30.215 18.3321 30.1231 18.2745 30.027 18.2247C29.5939 18 29.0741 18 28.0345 18C26.9688 18 26.436 18 25.9957 18.2341C25.8981 18.286 25.805 18.3459 25.7173 18.4132C25.3216 18.7167 25.1006 19.2016 24.6586 20.1713L24.0529 21.5" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round"/>
<path d="M25.5 32.5L25.5 26.5" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round"/>
<path d="M30.5 32.5L30.5 26.5" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round"/>
</svg>
       </div>

      <div className=" pt-3">
          <p className=" font-semibold text-lg">Are you sure you want to deactivate your account?</p>
        <p className="text-sm text-gray-500 pt-2">This action cannot be undone.</p>
      </div>

      <div className=" flex justify-end gap-2 pt-7">
        <Button  onClick={()=>close()} className=" w-full bg-white h-11 hover:bg-gray-100  text-primary border">
            Cancel
        </Button>
        <Button className=" w-full bg-black h-11">
            Yes, Deactivate
        </Button>
      </div>
      </Modal>
    </div>
  );
}
