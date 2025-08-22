import { InfoIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import car1 from '../../../../assets/images/quick/car1.png';
import car2 from '../../../../assets/images/quick/car2.png';
import car3 from '../../../../assets/images/quick/car3.png';
import car4 from '../../../../assets/images/quick/car4.png';
import car5 from '../../../../assets/images/quick/car5.png';
import car6 from '../../../../assets/images/quick/car6.png';
import car7 from '../../../../assets/images/quick/car7.png';
import car8 from '../../../../assets/images/quick/car8.png';

import service1 from '../../../../assets/images/quick/service1.png';
import service2 from '../../../../assets/images/quick/service2.png';
import service3 from '../../../../assets/images/quick/service3.png';
import service4 from '../../../../assets/images/quick/service4.png';
import service5 from '../../../../assets/images/quick/service5.png';
export const MetricItemSubsection = (): JSX.Element => {
  const vehicleTypes = [
    {
      id: 1,
      label: "Compact",
      image: car1,
      className: "w-[70px] h-[30px] top-[15px] left-0",
    },
    {
      id: 2,
      label: "Sedan",
      image:car2,
      className: "w-[69px] h-[41px] top-[11px] left-px",
    },
    {
      id: 3,
      label: "SUV",
      image:car3,
      className: "w-[70px] h-[25px] top-[18px] left-0 object-cover",
    },
    {
      id: 4,
      label: "Pickup Truck",
      image:car4,
      className: "w-[70px] h-[27px] top-4 left-0",
    },
  ];

  const vehicleTypesSecondRow = [
    {
      id: 5,
      label: "Coupe",
      image:car5,
      className: "w-[70px] h-[30px] top-[15px] left-0 object-cover",
    },
    {
      id: 6,
      label: "Convertible",
        image:car6,
      className: "w-[76px] h-[39px] top-0 left-0",
    },
    {
      id: 7,
      label: "Minivan",
         image:car7,
      className: "w-[70px] h-[37px] top-3.5 left-0 object-cover",
    },
    {
      id: 8,
      label: "Minivan",
      image:car8,
      className: "w-[74px] h-[51px] top-[5px] left-0",
    },
  ];

  const fuelTypes = [
    {
      id: 1,
      label: "Petrol",
      image:service1,
      className: "w-[33px] h-8",
    },
    {
      id: 2,
      label: "Petrol",
      image: service2,
      className: "w-[18.1px] h-8",
    },
    {
      id: 3,
      label: "Petrol",
      image:service3,
      className: "w-[29px] h-8",
    },
    {
      id: 4,
      label: "Electric",
      image: service4,
      className: "w-4 h-8",
    },
    {
      id: 5,
      label: "Electric",
      image: service5,
      className: "w-8 h-8",
    },
  ];

  return (
    <Card className="w-full h-auto  bg-white rounded-3xl border border-[#eaecf0] shadow-shadow-sm">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="flex items-start gap-2 flex-1">
            <h2 className="font-[number:var(--display-xs-semibold-font-weight)] text-gray-900 text-[length:var(--display-xs-semibold-font-size)] tracking-[var(--display-xs-semibold-letter-spacing)] leading-[var(--display-xs-semibold-line-height)] font-display-xs-semibold [font-style:var(--display-xs-semibold-font-style)]">
              Quick Search
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-4 items-start gap-4">
            {vehicleTypes.map((vehicle) => (
              <div
                key={vehicle.id}
                className="relative w-[72px] h-[70px] cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img
                  className={`absolute ${vehicle.className}`}
                  alt={vehicle.label}
                  src={vehicle.image}
                />
                <div className="absolute w-14 top-[60px] left-[7px] [font-family:'Mona_Sans',Helvetica] font-medium text-gray-500 text-[10px] text-center tracking-[0] leading-5">
                  {vehicle.label}
                </div>
              </div>
            ))}
          </div>

          <div className=" grid grid-cols-4 items-start gap-4">
            {vehicleTypesSecondRow.map((vehicle, index) => (
              <div
                key={vehicle.id}
                className={`relative ${index === 3 ? "w-[76px]" : "w-[72px]"} h-[70px] cursor-pointer hover:opacity-80 transition-opacity`}
              >
                {vehicle.id === 6 ? (
                  <div className="absolute w-[70px] h-[33px] top-4 left-0">
                    <div className="relative w-[76px] h-[39px] left-[-3px]">
                      <div className="absolute w-[59px] h-[3px] top-[23px] left-[7px] bg-[#75747480] rounded-[29.62px/1.35px] shadow-[0px_3px_3px_#00000029] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]" />
                      <img
                        className={vehicle.className}
                        alt={vehicle.label}
                        src={vehicle.image}
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    className={`absolute ${vehicle.className}`}
                    alt={vehicle.label}
                    src={vehicle.image}
                  />
                )}
                <div
                  className={`absolute w-14 top-[60px] ${vehicle.id === 8 ? "left-[11px]" : "left-2"} [font-family:'Mona_Sans',Helvetica] font-medium text-gray-500 text-[10px] text-center tracking-[0] leading-5`}
                >
                  {vehicle.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="w-full h-px bg-gray-200" />

        <div className="flex items-center gap-1.5">
          {fuelTypes.map((fuel) => (
            <div
              key={fuel.id}
              className="flex flex-col w-[60.5px] items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                className={`${fuel.className}`}
                alt={fuel.label}
                src={fuel.image}
              />
              <div className="[font-family:'Mona_Sans',Helvetica] font-medium text-gray-400 text-[10px] text-center tracking-[0] leading-5">
                {fuel.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col h-[58px] items-start gap-2.5 p-4 bg-indigo-50 rounded-2xl">
          <div className="flex items-center gap-2">
            <InfoIcon className="w-6 h-6 text-gray-500" />
            <div className="w-[267px] [font-family:'Mona_Sans',Helvetica] font-normal text-gray-500 text-xs tracking-[0] leading-[17px]">
              Choose one or more vehicle and fuel types to perform a
              personalized search.
            </div>
          </div>
        </div>

        <div className="flex items-start w-full rounded-lg">
          <Button className="flex gap-2 px-3.5 py-2 flex-1 bg-primary-600 rounded-lg border border-[#ff0000] shadow-shadow-xs h-auto">
            <span className="font-medium text-white text-sm tracking-[0] leading-5 [font-family:'Mona_Sans',Helvetica]">
              Search
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
