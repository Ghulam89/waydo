import { XIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { FlexcontainerWrapperSubsection } from "./sections/FlexcontainerWrapperSubsection/FlexcontainerWrapperSubsection";
import { FooterSubsection } from "./sections/FooterSubsection/FooterSubsection";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { MetricItemSubsection } from "./sections/MetricItemSubsection/MetricItemSubsection";
import { MetricItemWrapperSubsection } from "./sections/MetricItemWrapperSubsection/MetricItemWrapperSubsection";
import { NavbarSubsection } from "./sections/NavbarSubsection/NavbarSubsection";
import { PaginationSubsection } from "./sections/PaginationSubsection/PaginationSubsection";
import { VerifySubsection } from "./sections/VerifySubsection/VerifySubsection";
import Banner from "../../components/Banner";
import car1 from '../../assets/images/cars/car1.png';
import fire from '../../assets/images/icons/fire.png';
import boost from '../../assets/images/icons/boost.png';

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

export const Home = (): JSX.Element => {
  return (
    <div className="">
      <div className="">
        
        <main className="  max-w-7xl mx-auto px-4 md:px-6">
          <section className="">
            <Banner withFilter />
          </section>

          <section className=" grid sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-0  py-16">
            <div className=" w-full">
              <MetricItemSubsection />
            </div>

            <div className=" col-span-2 w-full sm:mt-0 mt-6">
              <MetricItemWrapperSubsection />
            </div>
          </section>
          <section className="">
            <FrameSubsection />
          </section>
          <section className="flex pt-10 pb-3 w-[331px] items-start gap-4">
            <div className="flex items-start gap-2 relative flex-1 grow">
              <h3 className="w-fit mt-[-1.00px] font-[number:var(--display-xs-semibold-font-weight)] text-gray-900 text-[length:var(--display-xs-semibold-font-size)] tracking-[var(--display-xs-semibold-letter-spacing)] leading-[var(--display-xs-semibold-line-height)] whitespace-nowrap relative font-display-xs-semibold [font-style:var(--display-xs-semibold-font-style)]">
                Recent
              </h3>
            </div>
          </section>

          <FrameWrapperSubsection />

          <div className=" grid  pb-8 pt-10  grid-cols-5">
            <div className=" col-span-4">
              <div className="flex w-full flex-wrap gap-6 justify-center">
                {carListings.map((car) => (
                  <div
                    key={car.id}
                    className={` w-[295px] h-[319px] ${car.position}`}
                  >
                    <Card
                      className={`flex flex-col w-[280px] items-start bg-[#ffffff] rounded-2xl border ${
                        car.isHighlighted
                          ? "border-[#ff0000]"
                          : "border-[#eaecf0]"
                      } ${
                        car.isHighlighted
                          ? "shadow-shadow-md"
                          : "shadow-shadow-sm"
                      }`}
                    >
                      <div className="flex flex-col h-[167px] items-start gap-2.5  relative self-stretch w-full rounded-[16px_16px_0px_0px] bg-cover bg-[50%_50%]">
                        <img
                          src={car1}
                          className=" h-full w-full"
                          alt=""
                        />
                        {
                          car.hasFireIcon && (
                          <div className="absolute top-2 -right-4">
                            <img src={fire} alt="" />
                          </div>
                          )
                        }
                         {
                          car.hasBoostIcon && (
                           <div className="absolute top-2 -right-3">
                        <img src={boost} alt="" />
                      </div>
                          )
                        }
                        
                     
                      </div>

                      <CardContent className="flex flex-col items-start gap-2.5 pt-[18px] pb-6 px-3 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] rounded-[0px_0px_16px_16px]">
                        <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col h-[38px] items-center gap-5 relative flex-1 grow">
                                <div className="items-center gap-2 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
                                  <div className="self-stretch mt-[-1.00px] font-[number:var(--display-xs-semibold-font-weight)] text-primary-600 text-[length:var(--display-xs-semibold-font-size)] tracking-[var(--display-xs-semibold-letter-spacing)] leading-[var(--display-xs-semibold-line-height)] relative font-display-xs-semibold [font-style:var(--display-xs-semibold-font-style)]">
                                    {car.price}
                                  </div>
                                </div>
                              </div>

                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20.8401 4.61012C20.3294 4.09912 19.7229 3.69376 19.0555 3.4172C18.388 3.14064 17.6726 2.99829 16.9501 2.99829C16.2276 2.99829 15.5122 3.14064 14.8448 3.4172C14.1773 3.69376 13.5709 4.09912 13.0601 4.61012L12.0001 5.67012L10.9401 4.61012C9.90843 3.57842 8.50915 2.99883 7.05012 2.99883C5.59109 2.99883 4.19181 3.57842 3.16012 4.61012C2.12843 5.64181 1.54883 7.04108 1.54883 8.50012C1.54883 9.95915 2.12843 11.3584 3.16012 12.3901L4.22012 13.4501L12.0001 21.2301L19.7801 13.4501L20.8401 12.3901C21.3511 11.8794 21.7565 11.2729 22.033 10.6055C22.3096 9.93801 22.4519 9.2226 22.4519 8.50012C22.4519 7.77763 22.3096 7.06222 22.033 6.39476C21.7565 5.7273 21.3511 5.12087 20.8401 4.61012V4.61012Z"
                                  stroke="#101828"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>

                            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                              <div className="relative w-[187px] mt-[-1.00px] font-[number:var(--text-md-normal-font-weight)] text-gray-500 text-[length:var(--text-md-normal-font-size)] leading-[var(--text-md-normal-line-height)] font-text-md-normal tracking-[var(--text-md-normal-letter-spacing)] [font-style:var(--text-md-normal-font-style)]">
                                {car.year} • {car.mileage}
                              </div>
                            </div>

                            <div className="flex flex-col h-[30px] items-center gap-5 relative self-stretch w-full">
                              <div className="items-center gap-2 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
                                <div className="self-stretch mt-[-1.00px] font-[number:var(--text-lg-semibold-font-weight)] text-gray-900 text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] relative font-text-lg-semibold [font-style:var(--text-lg-semibold-font-style)]">
                                  {car.title}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              <div className=" pt-6">
                <PaginationSubsection />

                <div className="  pt-10">
                  <VerifySubsection />
                </div>
              </div>
            </div>
            <div className=" col-span-1 ">
              <FlexcontainerWrapperSubsection />
            </div>
          </div>
        </main>

      </div>
    </div>
  );
};
