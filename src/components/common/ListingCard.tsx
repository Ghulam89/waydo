import React from "react";
import {
  Pause,
  Eye,
  Trash2,
  Heart,
  Flame,
  Zap,
  Rocket,
  Gauge,
  Calendar,
  Globe2,
  Hand,
  MapPin,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "../ui/button";

export default function ListingCard() {
  const data = {
    price: "$42,500",
    title: "Nissan · Patrol · SE",
    subtitle: "1YR AL GHURAIR WARRANTY | AED 2490 PM | 4.0 L | LEAT…",
    year: 2020,
    km: 78000,
    hand: "Left Hand",
    specs: "GCC Specs",
    location: "Manhatton, NY",
    date: "17 July 2025",
    views: 552,
    likes: 12,
    boostExpires: "Jan 17",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop",
    ],
  };

  const Badge = ({
    tone,
    icon,
    children,
  }: {
    tone: "green" | "orange" | "blue";
    icon?: React.ReactNode;
    children: React.ReactNode;
  }) => {
    const tones: Record<string, string> = {
      green: "bg-green-100 text-green-700 ring-green-200",
      orange: "bg-orange-100 text-orange-700 ring-orange-200",
      blue: "bg-blue-100 text-blue-700 ring-blue-200",
    };
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ${tones[tone]}`}
      >
        {icon}
        {children}
      </span>
    );
  };

  const Action = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
    <button className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50">
      {icon}
      <span className="hidden md:inline">{label}</span>
    </button>
  );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
      <div className="flex gap-4">
        {/* Left: Image + thumbs */}
        <div className="w-56 shrink-0">
          <div className="relative h-44 overflow-hidden rounded-xl ring-1 ring-gray-200">
            <img
              src={data.images[0]}
              alt="car"
              className="h-full w-full object-cover"
            />
            <div className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
              <ImageIcon className="h-3.5 w-3.5" />
              <span>{data.images.length}</span>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            {data.images.slice(0, 3).map((src, i) => (
              <button
                key={i}
                className={`relative h-12 w-16 overflow-hidden rounded-md ring-1 ${
                  i === 0
                    ? "ring-blue-500"
                    : "ring-gray-200 hover:ring-gray-300"
                }`}
              >
                <img
                  src={src}
                  alt="thumb"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex-1 min-w-0">
          {/* Top Row */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xl font-bold text-gray-900">
                {data.price}
              </div>
              <div className="mt-0.5 text-sm font-medium text-gray-700">
                {data.title}
              </div>
              <p className="mt-1 line-clamp-1 text-sm text-gray-500">
                {data.subtitle}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <Action icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 4H8" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 7H11" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M5 20C6.07093 18.053 7.52279 13.0189 10.3063 13.0189C12.2301 13.0189 12.7283 15.4717 14.6136 15.4717C17.8572 15.4717 17.387 10 21 10" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
} label="Pause Boost" />
              <Action icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="#141B34" stroke-width="1.5"/>
<path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="#141B34" stroke-width="1.5"/>
</svg>
} label="View" />
              <Action icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M9.5 16.5L9.5 10.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14.5 16.5L14.5 10.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
</svg>

} label="Delete" />
              <Action icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="#141B34" stroke-width="1.5"/>
<path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="#141B34" stroke-width="1.5"/>
</svg>
} label="Pause" />
            </div>
          </div>

          {/* Info Row */}
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 13.5H16M8 13.5H8.00898M13 17.5H8M16 17.5H15.991" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 2.5V4.5M6 2.5V4.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 12.7432C2.5 8.38594 2.5 6.20728 3.75212 4.85364C5.00424 3.5 7.01949 3.5 11.05 3.5H12.95C16.9805 3.5 18.9958 3.5 20.2479 4.85364C21.5 6.20728 21.5 8.38594 21.5 12.7432V13.2568C21.5 17.6141 21.5 19.7927 20.2479 21.1464C18.9958 22.5 16.9805 22.5 12.95 22.5H11.05C7.01949 22.5 5.00424 22.5 3.75212 21.1464C2.5 19.7927 2.5 17.6141 2.5 13.2568V12.7432Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 8.5H21" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              {data.year}
            </span>
            <span className="inline-flex items-center gap-1">
             <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="18.5" r="3" stroke="#141B34" stroke-width="1.5"/>
<path d="M12 15.5V10.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M22 13.5C22 7.97715 17.5228 3.5 12 3.5C6.47715 3.5 2 7.97715 2 13.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
</svg>

              {data.km.toLocaleString()} km
            </span>
            <span className="inline-flex items-center gap-1">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5Z" stroke="#141B34" stroke-width="1.5"/>
<path d="M18.9181 10.9125C17.9491 11.3367 16.4851 11.718 15.1595 11.2168C13.2638 10.5 12.2893 10.5 12 10.5C11.7107 10.5 10.7362 10.5 8.84049 11.2168C7.51492 11.718 6.05092 11.3367 5.08186 10.9125M19 13.7548C16.8546 14.1631 13.6079 15.378 13.5238 19.5M10.4762 19.5C10.3921 15.378 7.14544 14.1631 5 13.7548" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.008 13.5L11.999 13.5" stroke="#141B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              {data.hand}
            </span>
            <span className="inline-flex items-center gap-1">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12.5C22 18.0228 17.5228 22.5 12 22.5M22 12.5C22 6.97715 17.5228 2.5 12 2.5M22 12.5H2M12 22.5C6.47715 22.5 2 18.0228 2 12.5M12 22.5C14.5013 19.7616 15.9228 16.208 16 12.5C15.9228 8.79203 14.5013 5.23835 12 2.5M12 22.5C9.49872 19.7616 8.07725 16.208 8 12.5C8.07725 8.79203 9.49872 5.23835 12 2.5M2 12.5C2 6.97715 6.47715 2.5 12 2.5" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              {data.specs}
            </span>
           
          </div>

          <span className="inline-flex mt-3 items-center gap-1 text-gray-500">
              <MapPin className="h-4 w-4" />
              {data.location} · {data.date}
            </span>

         

           {/* Badges */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
               <Button  className=" bg-[#D1FADF] hover:bg-[#FDB022]">
              <span className=" text-[#039855] ">Active</span>
            </Button>
            <Button  className=" bg-[#FDB022] hover:bg-[#FDB022]">
              <span className=" text-[#7A2E0E] ">Boosted</span>
            </Button>
            <img src="/public/icons/fire.png" alt="" />
            <img src="/public/icons/boost.png" alt="" />
            <span className="inline-flex items-center gap-1">
             <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21.5H9C5.70017 21.5 4.05025 21.5 3.02513 20.4749C2 19.4497 2 17.7998 2 14.5V3.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M16.0086 7.5C16.0086 7.08579 16.3444 6.75 16.7586 6.75C17.1728 6.75 17.5086 7.08579 17.5086 7.5L16.7586 7.5L16.0086 7.5ZM6 18.25C5.58579 18.25 5.25 17.9142 5.25 17.5C5.25 17.0858 5.58579 16.75 6 16.75L6 17.5L6 18.25ZM15.0651 9.01223C14.7822 9.31479 14.3076 9.33073 14.005 9.04783C13.7025 8.76494 13.6865 8.29033 13.9694 7.98777L14.5172 8.5L15.0651 9.01223ZM15.4907 7.45887L14.9429 6.94664L15.4907 7.45887ZM18.0265 7.45887L18.5744 6.94664L18.0265 7.45887ZM19.5478 7.98777C19.8307 8.29033 19.8148 8.76494 19.5122 9.04783C19.2097 9.33073 18.7351 9.31479 18.4522 9.01223L19 8.5L19.5478 7.98777ZM16.7586 6.5L16.7586 5.75L16.7586 6.5ZM16.7586 7.5L17.5086 7.5C17.5086 11.0107 16.2248 13.7267 14.0961 15.5543C11.9829 17.3686 9.1058 18.25 6 18.25L6 17.5L6 16.75C8.83602 16.75 11.3383 15.9451 13.1189 14.4162C14.8841 12.9007 16.0086 10.6168 16.0086 7.5L16.7586 7.5ZM14.5172 8.5L13.9694 7.98777L14.9429 6.94664L15.4907 7.45887L16.0385 7.9711L15.0651 9.01223L14.5172 8.5ZM18.0265 7.45887L18.5744 6.94664L19.5478 7.98777L19 8.5L18.4522 9.01223L17.4787 7.9711L18.0265 7.45887ZM15.4907 7.45887L14.9429 6.94664C15.2269 6.64283 15.491 6.35804 15.7354 6.15863C15.9947 5.94704 16.3271 5.75 16.7586 5.75L16.7586 6.5L16.7586 7.25C16.8188 7.25 16.8161 7.21277 16.6837 7.32081C16.5364 7.44102 16.3522 7.63566 16.0385 7.9711L15.4907 7.45887ZM18.0265 7.45887L17.4787 7.9711C17.1651 7.63567 16.9808 7.44102 16.8335 7.32081C16.7011 7.21277 16.6984 7.25 16.7586 7.25L16.7586 6.5L16.7586 5.75C17.1902 5.75 17.5226 5.94704 17.7819 6.15863C18.0263 6.35805 18.2903 6.64283 18.5744 6.94664L18.0265 7.45887Z" fill="#141B34"/>
</svg>

              Boost expires: {data.boostExpires}
            </span>
            <span className="inline-flex items-center gap-1">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.544 11.545C21.848 11.9713 22 12.1845 22 12.5C22 12.8155 21.848 13.0287 21.544 13.455C20.1779 15.3706 16.6892 19.5 12 19.5C7.31078 19.5 3.8221 15.3706 2.45604 13.455C2.15201 13.0287 2 12.8155 2 12.5C2 12.1845 2.15201 11.9713 2.45604 11.545C3.8221 9.62944 7.31078 5.5 12 5.5C16.6892 5.5 20.1779 9.62944 21.544 11.545Z" stroke="#FF0000" stroke-width="1.5"/>
<path d="M15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5C13.6569 15.5 15 14.1569 15 12.5Z" stroke="#FF0000" stroke-width="1.5"/>
</svg>

              {data.views} Views
            </span>
            <span className="inline-flex items-center gap-1">
              <Heart className="h-4 w-4 text-red-500" />
              {data.likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
