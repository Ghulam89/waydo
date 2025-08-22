import React from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

export default function ProfileSettings() {
  return (
    <div className='  pb-8'>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-semibold">My Profile</h1>
          <p className="text-gray-500 text-sm">Update your profile details here</p>
        </div>
        <Button className="border bg-transparent  hover:bg-gray-5 text-primary/90 px-4 py-2 rounded text-sm font-medium">./public Profile</Button>
      </div>

      <div className=' flex gap-2 items-center mb-10 shadow-md rounded-lg  px-3'>
        <div className=' relative w-56 h-56'>
          <img src='./public/profile.png' className='' alt='' />
          <div className=' absolute  bottom-20 right-5'>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="24" height="24" rx="12" fill="white"/>
<rect x="1" y="1" width="24" height="24" rx="12" stroke="#D0D5DD" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 3"/>
<path d="M13 18.3333H19M16 7.33334C16.2652 7.06813 16.6249 6.91913 17 6.91913C17.1857 6.91913 17.3696 6.95571 17.5412 7.02678C17.7128 7.09785 17.8687 7.20202 18 7.33334C18.1313 7.46466 18.2355 7.62057 18.3066 7.79215C18.3776 7.96373 18.4142 8.14762 18.4142 8.33334C18.4142 8.51906 18.3776 8.70296 18.3066 8.87454C18.2355 9.04612 18.1313 9.20202 18 9.33334L9.66667 17.6667L7 18.3333L7.66667 15.6667L16 7.33334Z" stroke="#98A2B3" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </div>
        </div>
        <div className=' w-full'>
           <div className=' pb-3'>
             <h2 className=' text-[30px] font-semibold'>Olivia Rhye</h2>
            <span className='  text-gray-500'>Joined on August 2025</span>
           </div>
            <div className=" bg-indigo-50 border border-indigo-50 rounded-2xl p-6 flex items-center gap-4 mb-8">
        <img
          className=" rounded-full object-cover"
          src='./public/icons/verified.png'
          alt="avatar"
        />
        <div className="flex-1">
          <h2 className="font-medium text-lg">Get Verified</h2>
          <p className="text-gray-500 text-sm">Gain more visibility and boost your credibility</p>
        </div>
        
        <div className="flex items-center gap-2">
         
          <Button className="text-gray-50  font-semibold  border px-3 py-1 bg-white rounded-lg hover:bg-white">Verify Now</Button>
        </div>
      </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Profile Name */}
        <div className=' justify-between  border-b pb-8 flex '>
        <div className='  w-1/2'>
              <label className="block  font-semibold text-gray-700  mb-2">Profile Name</label>
                        <p className="text-gray-500 text-sm">This is displayed on your profile</p>

        </div>
          <div className="grid grid-cols-1 gap-4 w-full">
            <div className=' w-full'>
              <label className="block   text-secondary/500 mb-1">First name</label>
              <Input type="text" defaultValue="Olivia" className="w-full border rounded-lg px-3 h-11 py-2" />
            </div>
            <div>
              <label className="block text-secondary/500 mb-1">Last name</label>
              <Input type="text" defaultValue="Rhye" className="w-full border rounded-lg px-3 h-11 py-2" />
            </div>
          </div>
        </div>

        {/* Account Details */}
        <div className=' flex justify-between'>
         
           <div className='  w-1/2'>
              <label className="block  font-semibold text-gray-700  mb-2">Account details</label>
                        <p className="text-gray-500 text-sm">This is not visible to other users</p>

        </div>
          <div className="space-y-4 w-full">
            <div>
              <label className="block   text-gray-700  mb-2">Date of birth</label>
              <div className=' w-full'>
                <input type="date" className=" w-full border rounded-lg px-3 h-11 py-2" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block   text-gray-700  mb-2">Nationality</label>
                <select className="w-full border rounded px-3 py-2">
                  <option>🇺🇸 United States</option>
                  <option>🇮🇳 India</option>
                  <option>🇬🇧 United Kingdom</option>
                </select>
              </div>
              <div>
                <label className="block   text-gray-700  mb-2">Gender</label>
                <select className="w-full border rounded px-3 py-2">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="text-right">
          <Button className="h-auto px-[18px] py-2 bg-primary-600 text-[#ffffff] text-base font-medium [font-family:'Mona_Sans',Helvetica] border border-solid border-[#ff0000] shadow-shadow-xs hover:bg-primary-700">Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
