
import { FiHome, FiBriefcase, FiPlus } from "react-icons/fi";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

export default function MyPhoneNumber() {
  return (
    <div className="w-full py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Phone numbers</h2>
            <p className="text-sm text-gray-500">
              To ensure safety, it is beneficial to have your number added. You will receive an SMS with the authentication code on your phone to be able to link your phone with your account.
            </p>
          </div>
         
        </div>
{/* Buttons */}
          <div className=" w-full  mx-auto">
            <Button className="flex items-center hover:bg-gray-5 bg-white h-12  gap-2 justify-center border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 transition">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8351 14.0999V16.5999C18.8361 16.832 18.7886 17.0617 18.6956 17.2744C18.6026 17.487 18.4662 17.6779 18.2952 17.8348C18.1242 17.9917 17.9223 18.1112 17.7024 18.1855C17.4826 18.2599 17.2496 18.2875 17.0185 18.2666C14.4542 17.988 11.991 17.1117 9.82682 15.7083C7.81334 14.4288 6.10626 12.7217 4.82682 10.7083C3.41846 8.53426 2.54202 6.05908 2.26848 3.48325C2.24766 3.25281 2.27505 3.02055 2.3489 2.80127C2.42275 2.58199 2.54146 2.38049 2.69745 2.2096C2.85345 2.03871 3.04332 1.90218 3.25498 1.80869C3.46663 1.7152 3.69543 1.6668 3.92682 1.66658H6.42682C6.83124 1.6626 7.22331 1.80582 7.52995 2.06953C7.83659 2.33324 8.03688 2.69946 8.09348 3.09992C8.199 3.89997 8.39469 4.68552 8.67682 5.44158C8.78894 5.73985 8.8132 6.06401 8.74674 6.37565C8.68028 6.68729 8.52587 6.97334 8.30182 7.19992L7.24348 8.25825C8.42978 10.3445 10.1572 12.072 12.2435 13.2583L13.3018 12.1999C13.5284 11.9759 13.8144 11.8215 14.1261 11.755C14.4377 11.6885 14.7619 11.7128 15.0601 11.8249C15.8162 12.107 16.6018 12.3027 17.4018 12.4083C17.8066 12.4654 18.1763 12.6693 18.4406 12.9812C18.7049 13.2931 18.8453 13.6912 18.8351 14.0999Z" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


              Add Primray Phone
            </Button>
           
          </div>
      </div>
    </div>
  );
}
