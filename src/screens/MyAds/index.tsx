import { SetStateAction, useState } from "react";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { VerifySubsection } from "../Home/sections/VerifySubsection/VerifySubsection";
import { Button } from "../../components/ui/button";
import ListingCard from "../../components/common/ListingCard";

const savedSearches = [
  {
    id: 1,
    title: "Total Ads",
    number: 3
  },
  {
    id: 2,
    title: "Active",
    number: 3
  },
  {
    id: 3,
    title: "Boosted",
    number: 3
  },
  {
    id: 4,
    title: "Total Views",
    number: 322
  },
];

const listingData = [
  {
    id: 1,
    title: "Modern Apartment in Downtown",
    price: "$250,000",
    location: "New York, NY",
    status: "Active",
    image: "/images/apartment1.jpg",
    views: 125,
    likes: 12,
    datePosted: "2023-05-15",
    isBoosted: true
  },
  {
    id: 2,
    title: "Cozy Suburban House",
    price: "$375,000",
    location: "Chicago, IL",
    status: "Active",
    image: "/images/house1.jpg",
    views: 87,
    likes: 8,
    datePosted: "2023-06-22",
    isBoosted: false
  },
  {
    id: 3,
    title: "Luxury Beachfront Villa",
    price: "$1,200,000",
    location: "Miami, FL",
    status: "Inactive",
    image: "/images/villa1.jpg",
    views: 210,
    likes: 25,
    datePosted: "2023-04-10",
    isBoosted: true
  }
];

const MyAds = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [hasAds, setHasAds] = useState(false); // Change to false to see the "no ads" state

  const filterOptions = [
    { value: "Filter", label: "Filter" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "recent", label: "Recently Added" },
    { value: "popular", label: "Most Popular" },
  ];

  const handleFilterChange = (value: SetStateAction<string>) => {
    setSelectedFilter(value);
  };

  return (
    <div className="w-full py-10">
      <div className="max-w-6xl mx-auto px-3 bg-white rounded-lg overflow-hidden">
        <div className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">My Ads</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage your listings and boost performance
            </p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-transparent hover:bg-gray-5 text-gray-700 border h-11">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_711_5438)">
                  <path d="M9.99935 6.66663L9.99935 13.3333M13.3327 9.99996L6.66602 9.99996" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9.99935" cy="9.99996" r="8.33333" stroke="#141B34" strokeWidth="1.5" />
                </g>
                <defs>
                  <clipPath id="clip0_711_5438">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Post Ad
            </Button>
            <Button className="h-auto px-[18px] py-2.5 bg-primary-600 text-[#ffffff] text-[14px] font-medium [font-family:'Mona_Sans',Helvetica] border border-solid border-[#ff0000] shadow-shadow-xs hover:bg-primary-700">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_711_6288)">
                  <path d="M11.1033 8.89604L4.53317 15.4662M5.24223 10.698L2.02406 9.93779C1.67 9.85415 1.54547 9.41459 1.80196 9.15718L4.36125 6.59788C4.53317 6.42596 4.76643 6.32746 5.01083 6.3256L7.89631 6.30051M11.5308 2.9987C13.6784 4.46328 15.5361 6.32095 17.0007 8.46857M9.30048 14.7571L10.0606 17.9753C10.1443 18.3294 10.5838 18.4539 10.8413 18.1974L13.4006 15.6381C13.5725 15.4662 13.671 15.2329 13.6728 14.9885L13.6979 12.1031M17.5517 6.95845L18.3026 3.34533C18.5071 2.36213 17.6372 1.49231 16.654 1.69675L13.0409 2.44763C11.9769 2.6688 11.0011 3.19572 10.2335 3.96425L7.26903 6.92779C6.13807 8.05875 5.40207 9.52518 5.16974 11.1078L5.15952 11.1756C5.01269 12.1858 5.35096 13.2052 6.07209 13.9273C6.79323 14.6484 7.8136 14.9867 8.82375 14.8389L8.89159 14.8287C10.4742 14.5973 11.9406 13.8604 13.0716 12.7294L16.0351 9.76587C16.8037 8.99827 17.3306 8.0225 17.5517 6.95845Z" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_711_6288">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Upgrade Plan
            </Button>
          </div>
        </div>
        <ul className="grid grid-cols-4 gap-6">
          {savedSearches.map((search) => (
            <Card
              key={search.id}
              className="flex mb-4 rounded-2xl items-center justify-between py-6 px-6"
            >
              <div>
                <div className="flex flex-col gap-x-4 gap-y-2 text-sm text-gray-900 font-normal">
                  <span className="text-gray-500 font-semibold">{search.title}</span>
                  <span>
                    <h2 className="text-black font-semibold text-3xl">{search?.number}</h2>
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </ul>
        <VerifySubsection />
        
        {/* Filter section */}
        <div className="flex justify-between items-center my-6">
          <h2 className="text-xl font-semibold">Your Listings</h2>
          <div className="flex gap-4">
            <Input 
              placeholder="Search your ads..." 
              className="w-64"
            />
            <Select value={selectedFilter} onValueChange={handleFilterChange}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Listing Cards */}
        {!listingData?.length==0? (
          <div className="grid grid-cols-1 gap-6">
            {listingData.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10">
            <img
              src={"/public/icons/no-ads.png"}
              className="mx-auto mb-4"
              alt="No notifications"
            />
            <h3 className="text-2xl text-black font-semibold mb-1">
              You haven't placed any ads yet
            </h3>
            <Button className="h-auto w-44 mt-4 bg-primary-600 text-[#ffffff] text-base font-medium [font-family:'Mona_Sans',Helvetica] border border-solid border-[#ff0000] shadow-shadow-xs hover:bg-primary-700">
              Post Ads
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAds;