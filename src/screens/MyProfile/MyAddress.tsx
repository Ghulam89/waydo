
import { FiHome, FiBriefcase, FiPlus } from "react-icons/fi";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

export default function MyAddress() {
  return (
    <div className="w-full py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Addresses</h2>
            <p className="text-sm text-gray-500">
              Manage your saved addresses
            </p>
          </div>
          <Button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white rounded-md">
            <FiPlus className="w-4 h-4" />
            Add A Location
          </Button>
        </div>

        {/* No Addresses Content */}
        <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white shadow-sm">
          <h3 className="text-lg font-medium text-gray-700 mb-1">
            You have no saved addresses
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Saved addresses helps us improve your selling and buying experience
          </p>

          {/* Illustration */}
          <img
            src="public/icons/no-address.png"
            alt="No Address"
            className=" mb-5"
          />

          {/* Buttons */}
          <div className="space-y-3 w-full max-w-md">
            <Button className="flex items-center hover:bg-gray-5 bg-white h-12  gap-2 justify-center border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 transition">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.14202 7.49294C2.09219 7.08185 2.06727 6.87631 2.09123 6.70817C2.16101 6.2185 2.50438 5.8174 2.96692 5.68526C3.12574 5.63989 3.32662 5.63989 3.72838 5.63989H16.269C16.6708 5.63989 16.8717 5.63989 17.0305 5.68526C17.493 5.8174 17.8364 6.2185 17.9062 6.70817C17.9301 6.87631 17.9052 7.08185 17.8554 7.49294C17.7226 8.588 17.6563 9.13554 17.4936 9.58801C17.0229 10.8977 15.947 11.877 14.6284 12.1963C14.1728 12.3066 13.6377 12.3066 12.5675 12.3066H7.42989C6.35968 12.3066 5.82458 12.3066 5.369 12.1963C4.05035 11.877 2.97453 10.8977 2.50377 9.58801C2.34113 9.13554 2.27476 8.588 2.14202 7.49294Z" stroke="#141B34" stroke-width="1.5"/>
<path d="M10 9.80664H10.0075" stroke="#141B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.91797 10.6399L2.91797 13.1566C2.91797 15.7021 2.91797 16.9749 3.84004 17.7657C4.76211 18.5566 6.24616 18.5566 9.21427 18.5566H10.7883C13.7564 18.5566 15.2405 18.5566 16.1626 17.7657C17.0846 16.9749 17.0846 15.7021 17.0846 13.1566V10.6399" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3346 5.63981L13.261 5.38226C12.8944 4.09889 12.711 3.4572 12.2746 3.09017C11.8381 2.72314 11.2583 2.72314 10.0988 2.72314H9.90383C8.7443 2.72314 8.16453 2.72314 7.72805 3.09017C7.29157 3.4572 7.10823 4.09889 6.74156 5.38226L6.66797 5.63981" stroke="#141B34" stroke-width="1.5"/>
</svg>

              Add Work Address
            </Button>
            <Button className="flex items-center hover:bg-gray-5 bg-white h-12  gap-2 justify-center border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 transition">
             <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 15.6399L10 13.1399" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M1.96079 11.6512C1.66661 9.73684 1.51952 8.77967 1.88144 7.93112C2.24336 7.08257 3.04632 6.502 4.65225 5.34086L5.85213 4.47331C7.84988 3.02886 8.84875 2.30664 10.0013 2.30664C11.1538 2.30664 12.1527 3.02886 14.1505 4.47331L15.3504 5.34086C16.9563 6.502 17.7592 7.08257 18.1212 7.93112C18.4831 8.77967 18.336 9.73684 18.0418 11.6512L17.7909 13.2836C17.3739 15.9974 17.1654 17.3543 16.1921 18.1638C15.2189 18.9733 13.796 18.9733 10.9503 18.9733H9.05229C6.20658 18.9733 4.78372 18.9733 3.81047 18.1638C2.83721 17.3543 2.62869 15.9974 2.21166 13.2836L1.96079 11.6512Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
</svg>

              Add Home Address
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
