import { SetStateAction, useState } from "react";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { Input } from "../../../components/ui/input";
import CarCard from "../../../components/common/CarCard";

const favoriteLists = [
  {
    id: 1,
    title: "All Favorites",
    savedAds: 0,
    privacy: "Private",
    imgSrc: "/cars/car1.png", // Removed 'public' from path
  },
];

const MyFavorites = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedFilter2, setSelectedFilter2] = useState("");

  const filterOptions = [
    { value: "Filter", label: "Filter" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "recent", label: "Recently Added" },
    { value: "popular", label: "Most Popular" },
  ];

  const filterOptions2 = [
    { value: "Category", label: "All Categories" },
    { value: "bmw", label: "BMW" },
    { value: "toyota", label: "Toyota" },
    { value: "tesla", label: "Tesla" },
    { value: "audi", label: "Audi" },
  ];

  const handleFilterChange = (value: SetStateAction<string>) => {
    setSelectedFilter(value);
  };

  const handleFilterChange2 = (value: SetStateAction<string>) => {
    setSelectedFilter2(value);
  };

  // Sample car data
  const sampleCars = [
    {
      id: 1,
      title: "2022 Tesla Model 3",
      description: "Chevrolet • Captiva • Premier",
      price: "$42,500",
      year: "2022",
      location: "Manhattan, NY • 17 July 2025",
      image: "/cars/car1.png",
    },
      {
      id: 1,
      title: "2022 Tesla Model 3",
      description: "Chevrolet • Captiva • Premier",
      price: "$42,500",
      year: "2022",
      location: "Manhattan, NY • 17 July 2025",
      image: "/cars/car1.png",
    },
    
      {
      id: 1,
      title: "2022 Tesla Model 3",
      description: "Chevrolet • Captiva • Premier",
      price: "$42,500",
      year: "2022",
      location: "Manhattan, NY • 17 July 2025",
      image: "/cars/car1.png",
    },
    
    
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">My Favorites</h1>
          <p className="text-sm text-gray-500 mt-1">
            Create a list to organize your favorite listings
          </p>
        </div>

        <div>
          <Select value={selectedFilter} onValueChange={handleFilterChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a filter" />
            </SelectTrigger>
            <SelectContent>
              {filterOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col gap-8">
        {/* Left panel */}
        <Card className="w-full md:w-1/3 p-5 space-y-6">
          {/* Favorite List Title and Create */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Favorite Lists</h2>
            <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Create List
            </button>
          </div>

          {/* Existing Favorite Lists */}
          {favoriteLists.map((list) => (
            <div
              key={list.id}
              className="flex items-center gap-3 p-3 border-b border-l-4 border-l-red-500 border-b-gray-200 cursor-pointer"
            >
              <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={list.imgSrc}
                  alt={list.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col text-sm text-gray-900">
                <span className="font-semibold">{list.title}</span>
                <span className="text-gray-500">{list.savedAds} Saved Ads</span>
                <span className="text-gray-500">{list.privacy}</span>
              </div>
            </div>
          ))}

          {/* Create personalized list box */}
          <Card className="rounded-md p-6 flex flex-col items-center justify-center text-center cursor-pointer">
            <div className="">
              <img
                src="/icons/no-conversation.png"
                alt="Create your personalized list"
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-gray-900 font-semibold mb-1">
              Create your personalized list
            </p>
            <p className="text-gray-500 text-sm mb-4">Organize your favorites</p>
            <Button className="bg-transparent border text-gray-600 hover:bg-red-500 hover:text-white w-full rounded px-3 py-1 text-sm">
              Create a List
            </Button>
          </Card>
        </Card>

        {/* Right panel */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6 gap-4">
            <div className=" w-80">
              <Input 
                placeholder="Search" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-[180px]">
              <Select value={selectedFilter2} onValueChange={handleFilterChange2}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions2.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {sampleCars.length > 0 ? (
            <div className="space-y-4">
              {sampleCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="rounded-md flex flex-col items-center justify-center p-16 text-center text-gray-500">
              <div className="mb-6">
                <img
                  src="/icons/no-favourites.png"
                  alt="No favorites"
                  className="mx-auto mb-4"
                />
                <p className="text-xl text-black font-semibold mb-2">You have no favorites yet</p>
                <p className="mb-2 text-sm">
                  Use the favorites icon to save ads that you want to check later
                </p>
                <button className="text-blue-600 text-sm hover:underline">
                  Keep Searching
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyFavorites;