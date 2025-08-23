import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";
import DeleteAccount from "../../components/DeleteAccount";

export default function MySecurity() {

  const [isOpen,setIsOpen] = useState(false);

const onClose = ()=>{
  setIsOpen(false)
}
  return (
    <div className="pb-10">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-2xl font-semibold">Security</h1>
      </div>

      <div className="space-y-10">
        {/* Email & Password */}
        <div className="space-y-5 border-b pb-6">
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <Input
              type="text"
              defaultValue="Olivia"
              className="w-full border rounded-lg px-3 h-11"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <Input
              type="password"
              defaultValue="Rhye"
              className="w-full border rounded-lg px-3 h-11"
            />
          </div>

          {/* Deactivate Button */}
          <div>
            <Button
              onClick={()=>setIsOpen(true)}
              variant="destructive"
className="h-auto  bg-[#FFDADA] w-80 text-red-600 hover:bg-red-200 text-base font-medium [font-family:'Mona_Sans',Helvetica] shadow-shadow-xs ">
             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.25 4.5835L15.7336 12.9377C15.6016 15.0722 15.5356 16.1394 15.0006 16.9067C14.7361 17.2861 14.3955 17.6062 14.0006 17.8468C13.2018 18.3335 12.1325 18.3335 9.99395 18.3335C7.8526 18.3335 6.78192 18.3335 5.98254 17.8459C5.58733 17.6049 5.24666 17.2842 4.98224 16.9042C4.4474 16.1357 4.38288 15.0669 4.25384 12.9295L3.75 4.5835" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2.5 4.58317H17.5M13.3798 4.58317L12.8109 3.40961C12.433 2.63005 12.244 2.24027 11.9181 1.99718C11.8458 1.94325 11.7692 1.89529 11.6892 1.85375C11.3283 1.6665 10.8951 1.6665 10.0288 1.6665C9.14069 1.6665 8.69665 1.6665 8.32974 1.8616C8.24842 1.90484 8.17082 1.95475 8.09774 2.01081C7.76803 2.26375 7.58386 2.6678 7.2155 3.47589L6.71077 4.58317" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7.91797 13.75L7.91797 8.75" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12.082 13.75L12.082 8.75" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round"/>
</svg>
 Deactivate Your Account
            </Button>
          </div>
        </div>

        {/* Devices Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Your devices</h2>
              <p className="text-gray-500 text-sm">
                If you don’t recognize any devices below
              </p>
            </div>
            <Button className="bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg px-4 py-2 text-sm">
              Secure your account
            </Button>
          </div>

          {/* Device List */}
          <Card className="p-4 space-y-3 border-transparent shadow-none">
            <div className="flex items-center justify-between">
              <div className=" flex gap-4 items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 14.5V6.5C20 4.61438 20 3.67157 19.4142 3.08579C18.8284 2.5 17.8856 2.5 16 2.5H8C6.11438 2.5 5.17157 2.5 4.58579 3.08579C4 3.67157 4 4.61438 4 6.5V14.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5.5H12.009" stroke="#141B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.49762 15.5154L4.01953 14.5H19.9518L20.5023 15.5154C21.9452 18.177 22.3046 19.5077 21.7561 20.5039C21.2077 21.5 19.7536 21.5 16.8454 21.5L7.15462 21.5C4.24642 21.5 2.79231 21.5 2.24387 20.5039C1.69543 19.5077 2.05474 18.177 3.49762 15.5154Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                 <div>
                      <p className="font-medium">Mac</p>
                <p className="text-sm text-gray-500">London, UK</p>
                 </div>
              </div>
              <span className="text-sm text-gray-400">
                Active on 03 Aug 2025
              </span>
            </div>

            <div className="flex items-center justify-between">
                
              <div className=" flex justify-center items-center gap-4">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11 19H13" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
</svg>

               <div>
                 <p className="font-medium">iPhone</p>
                <p className="text-sm text-gray-500">London, UK</p>
               </div>
              </div>
              <span className="text-sm text-gray-400">
                Active on 03 Aug 2025
              </span>
            </div>
          </Card>
        </div>
      </div>

      <DeleteAccount onClose={onClose}  open={isOpen}  setOpen={()=>setIsOpen(true)}  />
    </div>
  );
}
