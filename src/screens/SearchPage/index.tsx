import React from 'react'
import { DownSubsection } from '../Home/sections/DownSubsection/DownSubsection'
import { FrameWrapperSubsection } from '../Home/sections/FrameWrapperSubsection/FrameWrapperSubsection'
import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'
import { Link } from 'react-router-dom'
import { PaginationSubsection } from '../Home/sections/PaginationSubsection/PaginationSubsection'
import { VerifySubsection } from '../Home/sections/VerifySubsection/VerifySubsection'
import { FlexcontainerWrapperSubsection } from '../Home/sections/FlexcontainerWrapperSubsection/FlexcontainerWrapperSubsection'
import car1 from '../../assets/images/cars/car1.png';
import fire from '../../assets/images/icons/fire.png';
import boost from '../../assets/images/icons/boost.png';
import ListingCard from '../../components/common/ListingCard'
import SearchListingCard from '../../components/common/SearchListingCard'
const SearchPage = () => {

    const carListings = [
  {
    id: 1,
    price: "$42,500",
    year: "2015",
    mileage: "105,000 km",
    title: "2022 Tesla Model 3",
    position: "top-[1467px] left-[119px]",
    hasFireIcon: true,
    hasBoostIcon: false,
    isHighlighted: false,
    heartIcon: "/heart.svg",
  },
  {
    id: 2,
    price: "$42,500",
    year: "2015",
    mileage: "105,000 km",
    title: "2022 Tesla Model 3",
    position: "top-[1467px] left-[427px]",
    hasFireIcon: false,
    hasBoostIcon: true,
    isHighlighted: false,
    heartIcon: "/icon.svg",
  },
  {
    id: 3,
    price: "$42,500",
    year: "2015",
    mileage: "105,000 km",
    title: "2022 Tesla Model 3",
    position: "top-[1467px] left-[734px]",
    hasFireIcon: false,
    hasBoostIcon: false,
    isHighlighted: true,
    heartIcon: "/heart.svg",
  },
  {
    id: 4,
    price: "$42,500",
    year: "2015",
    mileage: "105,000 km",
    title: "2022 Tesla Model 3",
    position: "top-[1812px] left-[119px]",
    hasFireIcon: false,
    hasBoostIcon: false,
    isHighlighted: false,
    heartIcon: "/heart.svg",
  },
  {
    id: 5,
    price: "$42,500",
    year: "2015",
    mileage: "105,000 km",
    title: "2022 Tesla Model 3",
    position: "top-[1812px] left-[427px]",
    hasFireIcon: true,
    hasBoostIcon: false,
    isHighlighted: false,
    heartIcon: "/heart.svg",
  },
  {
    id: 6,
    price: "$42,500",
    year: "2015",
    mileage: "105,000 km",
    title: "2022 Tesla Model 3",
    position: "top-[1812px] left-[734px]",
    hasFireIcon: false,
    hasBoostIcon: false,
    isHighlighted: false,
    heartIcon: "/heart.svg",
  },
  {
    id: 7,
    price: "$42,500",
    year: "2015",
    mileage: "105,000 km",
    title: "2022 Tesla Model 3",
    position: "top-[2157px] left-[119px]",
    hasFireIcon: false,
    hasBoostIcon: false,
    isHighlighted: false,
    heartIcon: "/heart.svg",
  },
  {
    id: 8,
    price: "$42,500",
    year: "2015",
    mileage: "105,000 km",
    title: "2022 Tesla Model 3",
    position: "top-[2157px] left-[427px]",
    hasFireIcon: false,
    hasBoostIcon: false,
    isHighlighted: false,
    heartIcon: "/heart.svg",
  },
  {
    id: 9,
    price: "$42,500",
    year: "2015",
    mileage: "105,000 km",
    title: "2022 Tesla Model 3",
    position: "top-[2157px] left-[734px]",
    hasFireIcon: false,
    hasBoostIcon: false,
    isHighlighted: false,
    heartIcon: "/heart.svg",
  },
];

  return (
    <div className=' max-w-6xl mx-auto py-6'>
          <DownSubsection />
          <div className=' flex  items-center justify-between pt-5'>
            <h2 className=' text-primary font-semibold'>Find a Honda in Los Angeles (1034)</h2>
            <div className=' flex items-center gap-3'>
                <label className=' text-red-600'>Reset Filters</label>
                <Button className=' flex bg-white border border-gray-300 text-primary hover:bg-gray-5'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33594 14.9841V8.08963C3.33594 5.06182 3.33594 3.54792 4.31225 2.6073C5.28856 1.66669 6.85991 1.66669 10.0026 1.66669C13.1453 1.66669 14.7166 1.66669 15.693 2.6073C16.6693 3.54792 16.6693 5.06182 16.6693 8.08963V14.9841C16.6693 16.9056 16.6693 17.8663 16.0252 18.2102C14.778 18.8762 12.4386 16.6544 11.3276 15.9854C10.6833 15.5974 10.3611 15.4034 10.0026 15.4034C9.64411 15.4034 9.32194 15.5974 8.67761 15.9854C7.5666 16.6544 5.22716 18.8762 3.97998 18.2102C3.33594 17.8663 3.33594 16.9056 3.33594 14.9841Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 9.44446C7.5 9.44446 8.22917 9.44446 8.95833 10.8334C8.95833 10.8334 11.2745 7.36113 13.3333 6.66669" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Save Search
                </Button>
                 <Button className=' flex bg-white border border-gray-300 text-primary hover:bg-gray-5'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

Sort: Defalut
                </Button>
            </div>
          </div>
             <div className=' pt-5'>
                 <FrameWrapperSubsection />
             </div>


             <div className="   flex  gap-8 justify-between pb-8 pt-10 ">
            <div className=" w-10/12">
              <div className="flex w-full flex-col gap-6 justify-center">
                {carListings.map((car) => (
                  <div
                    key={car.id}
                    className={`  ${car.position}`}
                  >
                    <SearchListingCard/>
                  </div>
                ))}
              </div>
              <div className=" pt-6">
                <PaginationSubsection />

                <div className="  pt-10">
                  <VerifySubsection/>
                </div>
              </div>
            </div>
            <div className="">
              <FlexcontainerWrapperSubsection />
            </div>
          </div>


    </div>
  )
}

export default SearchPage