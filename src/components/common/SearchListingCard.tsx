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
import car1 from '../../assets/images/cars/car1.png';
import brand from '../../assets/images/brand.png';
export default function SearchListingCard() {
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
      car1,
      car1,
      car1,
     car1,
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
           <div className="py-1 px-5 bg-gradient-to-b from-[#FE6825] to-[#F89713] rounded-full">
  <p className="text-white font-medium">Car of the week</p>
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
          <div className="mt-3 justify-between flex  items-center gap-2">
            <div>
                 <label className=" text-sm text-gray-500">Listed By</label> 
            <h2 className=" text-black font-semibold  text-xl">ABC Trading Grenal LLC</h2>
            </div>
            <div>
                <img src={brand} alt=""  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
