
import { ChartBar, HeartIcon, PhoneCallIcon } from "lucide-react";

const CarCard = () => {
  return (
    <div className=" bg-white rounded-2xl border p-3 flex flex-col md:flex-row gap-4 shadow hover:shadow-lg transition">
      {/* Left: Car Image */}
      <div className="relative w-full md:w-1/3">
        <img
          src="/public/cars/car1.png"
          alt="Car"
          className="rounded-xl object-cover w-full  h-full"
        />
        {/* Favorite Icon */}
        <div className="absolute flex gap-2 items-center top-3 right-3 shadow cursor-pointer">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2794 5.13075C21.7519 4.60299 21.1256 4.18434 20.4362 3.89871C19.7469 3.61308 19.008 3.46606 18.2618 3.46606C17.5156 3.46606 16.7768 3.61308 16.0874 3.89871C15.3981 4.18434 14.7718 4.60299 14.2442 5.13075L13.1495 6.22551L12.0547 5.13075C10.9892 4.06522 9.54404 3.46662 8.03716 3.46662C6.53028 3.46662 5.08512 4.06522 4.0196 5.13075C2.95407 6.19627 2.35547 7.64143 2.35547 9.14831C2.35547 10.6552 2.95407 12.1003 4.0196 13.1659L5.11436 14.2606L13.1495 22.2958L21.1846 14.2606L22.2794 13.1659C22.8071 12.6384 23.2258 12.0121 23.5114 11.3227C23.797 10.6334 23.9441 9.89449 23.9441 9.14831C23.9441 8.40213 23.797 7.66326 23.5114 6.97391C23.2258 6.28457 22.8071 5.65825 22.2794 5.13075Z" fill="#FF0000" stroke="white" stroke-width="2.06559" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    

   <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6915 10.1202L18.6617 8.08336C17.1993 6.61577 16.626 5.82628 15.8341 6.10538C14.8466 6.45339 15.1717 8.64926 15.1717 9.39059C13.6364 9.39059 12.0402 9.25414 10.5268 9.53845C5.53094 10.477 3.96875 14.5345 3.96875 18.9597C5.38274 17.9581 6.79533 16.8911 8.49479 16.4268C10.6162 15.8474 12.9854 16.1239 15.1717 16.1239C15.1717 16.8652 14.8466 19.0611 15.8341 19.4091C16.7315 19.7253 17.1993 18.8987 18.6617 17.4311L20.6915 15.3943C21.9365 14.1449 22.559 13.5202 22.559 12.7572C22.559 11.9943 21.9365 11.3696 20.6915 10.1202Z" stroke="white" stroke-width="1.54919" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



        </div>

        {/* Image count overlay */}
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-0.5 rounded">
          📷 13
        </div>
      </div>

      {/* Right: Details */}
      <div className="flex-1 flex flex-col justify-between gap-3">
        {/* Title & Price */}
        <div>
          <h3 className="text-xl text-left font-semibold">2022 Tesla Model 3</h3>
          <p className="text-sm text-left text-gray-500">Chevrolet • Captiva • Premier</p>
          <p className="text-red-600 text-left text-xl font-bold mt-1">$42,500</p>
        </div>

        {/* Year badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          {Array(5)
            .fill("2025")
            .map((year, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-lg px-3 py-1 text-sm text-center"
              >
                <p className="font-medium text-gray-500">Year</p>
                <p className="font-semibold text-gray-800">{year}</p>
              </div>
            ))}
        </div>

        {/* Location and date */}
        <div className="text-sm text-gray-500 flex items-center gap-1 mt-2">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.12928 14.2446C8.84015 14.5153 8.45371 14.6666 8.05153 14.6666C7.64935 14.6666 7.2629 14.5153 6.97377 14.2446C4.32613 11.7506 0.777957 8.96453 2.50829 4.9197C3.44387 2.73269 5.68968 1.33325 8.05153 1.33325C10.4134 1.33325 12.6592 2.73269 13.5948 4.9197C15.3229 8.95943 11.7835 11.7592 9.12928 14.2446Z" stroke="#667085" stroke-width="1.5"/>
<path d="M10.3835 7.33333C10.3835 8.622 9.33879 9.66667 8.05013 9.66667C6.76147 9.66667 5.7168 8.622 5.7168 7.33333C5.7168 6.04467 6.76147 5 8.05013 5C9.33879 5 10.3835 6.04467 10.3835 7.33333Z" stroke="#667085" stroke-width="1.5"/>
</svg>
 Manhattan, NY • 17 July 2025
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <button className="flex items-center gap-2 text-red-600 border border-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-50 transition">
           <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_737_4826)">
<path d="M3.19815 9.95205C2.40813 8.5745 2.02667 7.44965 1.79666 6.30943C1.45648 4.62306 2.23497 2.97575 3.52461 1.92464C4.06967 1.4804 4.69449 1.63218 5.0168 2.21041L5.74445 3.51584C6.32121 4.55055 6.60958 5.06791 6.55238 5.61641C6.49519 6.16491 6.10627 6.61163 5.32844 7.50509L3.19815 9.95205ZM3.19815 9.95205C4.79722 12.7403 7.30666 15.2511 10.0982 16.8521M10.0982 16.8521C11.4757 17.6421 12.6006 18.0235 13.7408 18.2536C15.4271 18.5937 17.0745 17.8152 18.1256 16.5256C18.5698 15.9805 18.418 15.3557 17.8398 15.0334L16.5344 14.3058C15.4997 13.729 14.9823 13.4406 14.4338 13.4978C13.8853 13.555 13.4386 13.9439 12.5451 14.7218L10.0982 16.8521Z" stroke="#FF0000" stroke-width="1.5" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_737_4826">
<rect width="20" height="20" fill="white" transform="translate(0.0507812)"/>
</clipPath>
</defs>
</svg>

            Call
          </button>
          <button className="flex items-center gap-2 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_737_4832)">
<path d="M16.7168 7.50008C16.0542 4.17887 12.9775 1.66675 9.28284 1.66675C5.1047 1.66675 1.7168 4.87943 1.7168 8.84179C1.7168 10.7456 2.49862 12.4754 3.77392 13.7591C4.0547 14.0417 4.24217 14.4279 4.16651 14.8253C4.04165 15.4751 3.75868 16.0813 3.34434 16.5865C4.43448 16.7875 5.56802 16.6065 6.54014 16.094C6.88378 15.9129 7.05561 15.8223 7.17685 15.804C7.26173 15.7911 7.37229 15.8031 7.55013 15.8336" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.2168 13.5515C9.2168 15.9729 11.2691 17.9362 13.8001 17.9362C14.0977 17.9366 14.3945 17.9091 14.6868 17.8542C14.8972 17.8147 15.0024 17.7949 15.0759 17.8062C15.1493 17.8174 15.2534 17.8727 15.4616 17.9834C16.0505 18.2966 16.7372 18.4072 17.3975 18.2844C17.1465 17.9756 16.9751 17.6052 16.8995 17.2081C16.8536 16.9652 16.9672 16.7292 17.1373 16.5565C17.9099 15.772 18.3835 14.7149 18.3835 13.5515C18.3835 11.1301 16.3311 9.16675 13.8001 9.16675C11.2691 9.16675 9.2168 11.1301 9.2168 13.5515Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_737_4832">
<rect width="20" height="20" fill="white" transform="translate(0.0507812)"/>
</clipPath>
</defs>
</svg>

            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
