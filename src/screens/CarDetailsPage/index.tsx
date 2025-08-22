import React, { useState } from "react";
import {
  Heart,
  Share2,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Car,
  Shield,
  Star,
  ChevronLeft,
  ChevronRight,
  Eye,
  Clock,
  Link,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { NavbarSubsection } from "../Home/sections/NavbarSubsection/NavbarSubsection";
import { FooterSubsection } from "../Home/sections/FooterSubsection/FooterSubsection";
import { Card } from "../../components/ui/card";

const CarDetailsPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const carImages = [
    "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  const relatedCars = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "2022 BMW X5",
      price: "$45,000",
      year: "2022",
      mileage: "15,000 km",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "2021 Audi Q7",
      price: "$52,000",
      year: "2021",
      mileage: "22,000 km",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "2023 Mercedes GLE",
      price: "$58,000",
      year: "2023",
      mileage: "8,000 km",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + carImages.length) % carImages.length
    );
  };

  return (
    <div className="bg-gray-10">
     
      <div className="max-w-7xl mx-auto px-4 py-6">
          <div>
            <ul className=" flex items-center gap-1 text-gray-500 mb-4">
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 17C14.2005 17.6224 13.1502 18 12 18C10.8498 18 9.79952 17.6224 9 17" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.3831 2 14.5817 2.86667 16.979 4.6L18.4189 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5537 22 13.1388 22H10.8612C7.44633 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
</svg>

                </li>
                <li>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12L10 8L6 4" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </li>
                <li className=" text-black">
                 Motors

                </li>
                <li>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12L10 8L6 4" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </li>
                  <li className="  text-red-500 font-semibold"> 
                  Cars
                </li>
                
            </ul>
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-sm  overflow-hidden">
              <div className="relative ">
                <img
                  src={carImages[currentImageIndex]}
                  alt="Car main image"
                  className="w-full h-96 rounded-xl object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2  hover:bg-red-500 bg-opacity-50 text-white p-2 rounded-full transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-red-500   text-white p-2 rounded-full transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {carImages.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="p-4">
                <div className="flex gap-2 overflow-x-auto">
                  {carImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? "border-red-500"
                          : "border-gray-200"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <div className="text-left">
                    <div className="text-[30px] font-bold text-black mb-2">
                      $89,900
                    </div>
                    <div className="text-[16px] font-semibold text-gray-500">
                      Nissan.Patrol.SE
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-3 text-gray-600">
                    <div className="flex items-center gap-1">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 13.9749H16M8 13.9749H8.00898M13 17.9749H8M16 17.9749H15.991"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18 2.97485V4.97485M6 2.97485V4.97485"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.5 13.2181C2.5 8.86079 2.5 6.68214 3.75212 5.3285C5.00424 3.97485 7.01949 3.97485 11.05 3.97485H12.95C16.9805 3.97485 18.9958 3.97485 20.2479 5.3285C21.5 6.68214 21.5 8.86079 21.5 13.2181V13.7316C21.5 18.0889 21.5 20.2676 20.2479 21.6212C18.9958 22.9749 16.9805 22.9749 12.95 22.9749H11.05C7.01949 22.9749 5.00424 22.9749 3.75212 21.6212C2.5 20.2676 2.5 18.0889 2.5 13.7316V13.2181Z"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3 8.97485H21"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span>2020</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="18.9749"
                          r="3"
                          stroke="#141B34"
                          stroke-width="1.5"
                        />
                        <path
                          d="M12 15.9749V10.9749"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M22 13.9749C22 8.45201 17.5228 3.97485 12 3.97485C6.47715 3.97485 2 8.45201 2 13.9749"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>

                      <span>78,000 km</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 12.9749C22 18.4977 17.5228 22.9749 12 22.9749C6.47715 22.9749 2 18.4977 2 12.9749C2 7.45201 6.47715 2.97485 12 2.97485C17.5228 2.97485 22 7.45201 22 12.9749Z"
                          stroke="#141B34"
                          stroke-width="1.5"
                        />
                        <path
                          d="M18.9181 11.3873C17.9491 11.8115 16.4851 12.1929 15.1595 11.6917C13.2638 10.9749 12.2893 10.9749 12 10.9749C11.7107 10.9749 10.7362 10.9749 8.84049 11.6917C7.51492 12.1929 6.05092 11.8115 5.08186 11.3873M19 14.2296C16.8546 14.6379 13.6079 15.8529 13.5238 19.9749M10.4762 19.9749C10.3921 15.8529 7.14544 14.6379 5 14.2296"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.008 13.9749L11.999 13.9749"
                          stroke="#141B34"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span>Left Hand</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 12.9749C22 18.4977 17.5228 22.9749 12 22.9749M22 12.9749C22 7.45201 17.5228 2.97485 12 2.97485M22 12.9749H2M12 22.9749C6.47715 22.9749 2 18.4977 2 12.9749M12 22.9749C14.5013 20.2365 15.9228 16.6828 16 12.9749C15.9228 9.26689 14.5013 5.71321 12 2.97485M12 22.9749C9.49872 20.2365 8.07725 16.6828 8 12.9749C8.07725 9.26689 9.49872 5.71321 12 2.97485M2 12.9749C2 7.45201 6.47715 2.97485 12 2.97485"
                          stroke="#101828"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span>GCC Specs</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsFavorited(!isFavorited)}
                    className={`${
                      isFavorited ? "text-red-500 border-red-500" : ""
                    } w-24`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`}
                    />
                    Favorite
                  </Button>
                  <Button variant="outline" size="icon" className="w-24">
                    <Share2 className="w-5 h-5" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-[30px] font-bold text-gray-900 mb-6">
                Car Overview
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-[16px] font-display-lg-medium">
                        Interior Color
                      </span>
                    </div>
                    <span className=" font-semibold text-[16px]">Black</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-[16px] font-display-lg-medium">
                        Exterior Color
                      </span>
                    </div>
                    <span className=" font-semibold text-[16px]">White</span>
                  </div>

                  <div className="flex items-center justify-between py-2 ">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-[16px] font-display-lg-medium">
                        Body Type
                      </span>
                    </div>
                    <span className=" font-semibold text-[16px]">Sedan</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-[16px] font-display-lg-medium">
                        Transmission
                      </span>
                    </div>
                    <span className=" font-semibold text-[16px]">5 Seater</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-[16px] font-display-lg-medium">
                        Seller type{" "}
                      </span>
                    </div>
                    <span className=" font-semibold text-[16px]">Dealer</span>
                  </div>
                </div>

                <div className="space-y-4 border-l border-gray-100 pl-4">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-[16px] font-display-lg-medium">
                        Horsepower
                      </span>
                    </div>
                    <span className=" font-semibold text-[16px]">
                      100-199 HP
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-[16px] font-display-lg-medium">
                        Doors
                      </span>
                    </div>
                    <span className=" font-semibold text-[16px]">4 door</span>
                  </div>

                  <div className="flex items-center justify-between py-2 ">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-[16px] font-display-lg-medium">
                        Body Type
                      </span>
                    </div>
                    <span className=" font-semibold text-[16px]">Sedan</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-[16px] font-display-lg-medium">
                        Target Market
                      </span>
                    </div>
                    <span className=" font-semibold text-[16px]">UK</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-[16px] font-display-lg-medium">
                        Engine Capacity (cc){" "}
                      </span>
                    </div>
                    <span className=" font-semibold text-[16px]">
                      2000-2499 CC
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-[16px] font-display-lg-medium">
                        Trim
                      </span>
                    </div>
                    <span className=" font-semibold text-[16px]">LX</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-[30px] font-bold text-gray-900 mb-5">
                Description
              </h2>
              <p className="text-gray-500 pb-3 leading-relaxed">
                Looking for a reliable, stylish, and well-maintained vehicle?
                ZRS Car Trading is offering a pristine HONDA CIVIC LX | 2.0L V4
                | 2022, ready to hit the roads. This car has been thoroughly
                inspected and warranty from dealer. Drive confidently with a car
                that delivers performance, comfort, and peace of ...
              </p>

              <a className=" text-red-600 font-semibold">Read More</a>

              <div className="mt-6">
                <h2 className="text-[30px] font-bold text-gray-900 mb-5">
                  Features
                </h2>
               <div className=" flex justify-between items-center">
                 <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Drivers Assistance & Safety
                </h3>
                <div  className=" flex  gap-2">
                    <div className="  border border-gray-300 rounded-md w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100">
                  <p>12</p>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </div>
               </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Transmission Type",
                    "Front Airbags",
                    "Side Airbags",
                    "Cruise Airbags",
                    "Front Wheel Drive",
                    "Front Wheel Drive",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center mb-3 gap-2">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 15.4749C5 15.4749 6.5 15.4749 8.5 18.9749C8.5 18.9749 14.0588 9.80819 19 7.97485"
                          stroke="#12B76A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                 <div className=" flex justify-between items-center">
                 <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Drivers Assistance & Safety
                </h3>
                <div  className=" flex  gap-2">
                    <div className="  border border-gray-300 rounded-md w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100">
                  <p>12</p>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </div>
               </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Transmission Type",
                    "Front Airbags",
                    "Side Airbags",
                    "Cruise Airbags",
                    "Front Wheel Drive",
                    "Front Wheel Drive",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center mb-3 gap-2">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 15.4749C5 15.4749 6.5 15.4749 8.5 18.9749C8.5 18.9749 14.0588 9.80819 19 7.97485"
                          stroke="#12B76A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-[30px] font-bold text-gray-900">Location</h2>
              <p className="  text-gray-500 mb-4">London</p>
              <div className="bg-gray-100 rounded-lg  flex items-center justify-center">
                <img
                  src="/public/map.png"
                  className=" object-cover h-fll w-full"
                  alt=""
                />
              </div>
            </div>

            {/* Related Cars */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Similar Cars
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCars.map((car) => (
                <div
                  key={car.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {car.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <span>{car.year}</span>
                      <span>{car.mileage}</span>
                    </div>
                    <div className="text-xl font-bold text-red-600">
                      {car.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
          </div>

          {/* Right Column - Seller Info and Actions */}
          <div className="space-y-6">
            {/* Seller Information */}
            <Card className="w-full h-auto  bg-white rounded-lg border border-[#eaecf0] shadow-shadow-sm">
              <div className="flex border-b items-center gap-4 p-4">
                <div className="w-20 h-20 border p-1  relative rounded-md flex items-center justify-center">
                  <img
                    src="/public/brand.png"
                    className=" w-full h-full"
                    alt=""
                  />
                  <div className=" absolute -bottom-2 -left-3">
                    <img
                      src="/public/icons/verified.png"
                      className=" w-9"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 ">
                    Car Dealer Trading LLC
                  </h3>

                  <p className="text-sm text-gray-500">Dealer</p>
                </div>
              </div>

              <div className=" flex justify-end  items-center py-2.5 px-2 text-sm text-red-500 font-semibold">
                <a>View All Cars</a>
              </div>
            </Card>

            <Card className=" bg-blue-50  border-transparent rounded-lg">
              <div className="flex  p-4 justify-between">
                <div>
                  <h2 className=" font-semibold text-lg">Get Verified</h2>
                  <p className=" pt-1 text-gray-50">
                    Gain more visibility and boost your credibility
                  </p>
                  <Button className=" mt-3">Verify Now</Button>
                </div>
                <div>
                  <img src="/public/icons/verified.png" className=" w-8" />
                </div>
              </div>

              <div className="space-y-3 bg-white  justify-end px-2  py-4 gap-3 flex items-center">
                <Button className=" bg-primary-500 mt-2.5  hover:bg-primary-600 text-white">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.668 7.49996C16.0053 4.17875 12.9286 1.66663 9.23401 1.66663C5.05588 1.66663 1.66797 4.8793 1.66797 8.84166C1.66797 10.7454 2.44979 12.4753 3.72509 13.759C4.00588 14.0416 4.19335 14.4278 4.11769 14.8252C3.99282 15.475 3.70985 16.0812 3.29551 16.5864C4.38566 16.7874 5.51919 16.6064 6.49131 16.0939C6.83496 15.9128 7.00678 15.8222 7.12803 15.8038C7.2129 15.791 7.32346 15.803 7.5013 15.8335"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.16797 13.5514C9.16797 15.9728 11.2203 17.9361 13.7513 17.9361C14.0489 17.9365 14.3457 17.909 14.638 17.8541C14.8484 17.8146 14.9536 17.7948 15.0271 17.806C15.1005 17.8172 15.2046 17.8726 15.4128 17.9833C16.0017 18.2965 16.6883 18.4071 17.3487 18.2842C17.0977 17.9755 16.9263 17.6051 16.8507 17.208C16.8048 16.9651 16.9184 16.7291 17.0885 16.5564C17.861 15.7719 18.3346 14.7148 18.3346 13.5514C18.3346 11.1299 16.2823 9.16663 13.7513 9.16663C11.2203 9.16663 9.16797 11.1299 9.16797 13.5514Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Chat
                </Button>
                <Button
                  variant="outline"
                  className=" bg-red-100 border-transparent text-red-600"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_675_7358)">
                      <path
                        d="M3.14932 9.95192C2.3593 8.57438 1.97784 7.44953 1.74783 6.3093C1.40765 4.62294 2.18614 2.97563 3.47579 1.92452C4.02084 1.48028 4.64566 1.63206 4.96797 2.21029L5.69562 3.51572C6.27238 4.55043 6.56075 5.06779 6.50356 5.61629C6.44636 6.16478 6.05744 6.61151 5.27961 7.50496L3.14932 9.95192ZM3.14932 9.95192C4.74839 12.7402 7.25783 15.251 10.0493 16.8519M10.0493 16.8519C11.4269 17.642 12.5517 18.0234 13.692 18.2534C15.3783 18.5936 17.0256 17.8151 18.0767 16.5255C18.521 15.9804 18.3692 15.3556 17.791 15.0333L16.4855 14.3056C15.4508 13.7289 14.9335 13.4405 14.385 13.4977C13.8365 13.5549 13.3898 13.9438 12.4963 14.7217L10.0493 16.8519Z"
                        stroke="#FF2A2A"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.668 2.5V4.83333M15.7931 4.20898L14.1432 5.8589M17.5013 8.33333H15.168"
                        stroke="#FF2A2A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_675_7358">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Call Now
                </Button>
              </div>
            </Card>

            {/* Get Your Car Listed */}
            <img src="/public/ads.png" className=" w-full" />
          </div>
        </div>

        
      </div>
     
    </div>
  );
};

export default CarDetailsPage;
