import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

interface CarData {
  id: number;
  image: string;
  thumbnail: string;
  price: string;
  title: string;
  details: string;
}

export const MetricItemWrapperSubsection = (): JSX.Element => {
  const [activeSlide, setActiveSlide] = useState(1);

  const carData: CarData[] = [
    {
      id: 0,
      image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=200",
      price: "USD$ 850,000",
      title: "BMW X5 2018",
      details: "2018 • 250 KM"
    },
    {
      id: 1,
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=200",
      price: "USD$ 960,000",
      title: "Honda Civic LX 2016",
      details: "2016 • 300 KM"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=200",
      price: "USD$ 720,000",
      title: "Mercedes C-Class 2019",
      details: "2019 • 180 KM"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1073567/pexels-photo-1073567.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/1073567/pexels-photo-1073567.jpeg?auto=compress&cs=tinysrgb&w=200",
      price: "USD$ 1,200,000",
      title: "Audi A4 2020",
      details: "2020 • 120 KM"
    }
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : carData.length - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev < carData.length - 1 ? prev + 1 : 0));
  };

  const handleThumbnailClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <Card className="w-full h-auto  bg-white rounded-3xl border border-[#eaecf0] shadow-shadow-sm p-6 relative">
      <CardContent className="p-0 space-y-6">
        <div className="flex items-start gap-4 w-full">
          <div className="flex items-start gap-2 flex-1">
            <h2 className="font-[number:var(--display-xs-semibold-font-weight)] text-gray-900 text-[length:var(--display-xs-semibold-font-size)] tracking-[var(--display-xs-semibold-letter-spacing)] leading-[var(--display-xs-semibold-line-height)] font-display-xs-semibold [font-style:var(--display-xs-semibold-font-style)]">
              Quick Search
            </h2>
          </div>
        </div>

        <div className="flex sm:flex-row  flex-col-reverse items-start gap-6">
          {/* Thumbnail Column */}
          <div className="flex sm:flex-col h-[367px] items-center justify-start gap-4 pt-4">
            {carData.map((car, index) => (
              <div
                key={car.id}
                className={`w-24 h-24 rounded-lg cursor-pointer transition-all duration-200 ${
                  activeSlide === index 
                    ? 'border-2 border-red-500 ring-1 ring-red-200' 
                    : 'border border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={car.thumbnail}
                  alt={car.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}

            <Button variant="ghost" size="sm" className="h-auto p-2  text-gray-500 hover:text-gray-700">
              <ChevronDownIcon className="w-[18px] h-[18px]" />
            </Button>
          </div>

          {/* Main Display Area */}
          <div className="relative  w-full h-[367px] bg-gray-100 rounded-xl overflow-hidden">
            <img
              src={carData[activeSlide].image}
              alt={carData[activeSlide].title}
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 h-10 w-10 p-0 bg-white rounded-lg shadow-lg hover:bg-red-500 hover:text-white transition-all duration-200"
              onClick={handlePrevSlide}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </Button>

            <Button
              variant="secondary"
              size="sm"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 h-10 w-10 p-0 bg-white rounded-lg shadow-lg hover:bg-red-500 hover:text-white transition-all duration-200"
              onClick={handleNextSlide}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </Button>

            {/* Car Details Overlay */}
            <div className="absolute bottom-10 right-6 text-right">
              <div className="mb-1">
                <div className="text-primary-600 font-semibold text-xl">
                  {carData[activeSlide].price}
                </div>
              </div>
                <div className="text-white bg-opacity-75 p-2 rounded-lg">
                {carData[activeSlide].title} - {carData[activeSlide].details}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-5 right-0 transform  items-center -translate-x-1/2 flex gap-2">
              {carData.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-200 ${
                    activeSlide === index
                      ? 'bg-primary-600 w-5 h-5 shadow-lg'
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};