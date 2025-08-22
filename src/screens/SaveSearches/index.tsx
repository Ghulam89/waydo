import { SetStateAction, useState } from "react";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";

const savedSearches = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corrola",
    year: 2019,
    tags: "Other",
    date: "01 Aug 2025",
  },
  {
    id: 2,
    brand: "Toyota",
    model: "Corrola",
    year: 2019,
    tags: "Other",
    date: "01 Aug 2025",
  },
  {
    id: 3,
    brand: "Toyota",
    model: "Corrola",
    year: 2019,
    tags: "Other",
    date: "01 Aug 2025",
  },
];

const SaveSearches = () => {

    const [selectedFilter, setSelectedFilter] = useState("");

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
       <div className=" mb-4 flex justify-between items-center">
         <h2 className="text-2xl font-semibold pb-5">Saved Searches</h2>
       <div>
         <Select value={selectedFilter}  onValueChange={handleFilterChange}>
        <SelectTrigger className="w-full">
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
        <ul className="">
          {savedSearches.map((search) => (
            <Card
              key={search.id}
              className="flex mb-4 rounded-2xl items-center justify-between py-6 px-6"
            >
                <div>
<div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-900 font-normal">
                <span>
                  <b>Brand:</b> <span className="text-gray-500 ">{search.brand}</span>
                </span>
                <span className=" w-[1px] h-5 bg-gray-600"> 
                  
                </span>
                <span>
                  <b>Model:</b> <span className="font-light">{search.model}</span>
                </span>
                <span className=" w-[1px] h-5 bg-gray-600"> 
                  
                </span>
                <span>
                  <b>Year:</b> <span className="font-light">{search.year}</span>
                </span>
                <span className=" w-[1px] h-5 bg-gray-600"> 
                  
                </span>
                <span>
                  <b>Tags:</b> <span className="font-light">{search.tags}</span>
                </span>
              </div>
               <div className="flex pt-5 items-center gap-5 text-gray-500 text-sm cursor-pointer select-none">
                  {/* View */}
                  <button className="flex items-center gap-2 hover:text-gray-900">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="#141B34" stroke-width="1.5"/>
<path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="#141B34" stroke-width="1.5"/>
</svg>

                    View
                  </button>

                  {/* Delete */}
                  <button className="flex items-center gap-2 hover:text-red-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M9.5 16.5L9.5 10.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14.5 16.5L14.5 10.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
</svg>

                    Delete
                  </button>
                </div>

                </div>
              

              <div className="flex flex-col items-end gap-2">
                <span className="text-gray-400 text-sm">{search.date}</span>

               
                <label className="flex items-center gap-2 cursor-pointer select-none text-gray-700 text-sm">
                  <Input
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded"
                  />
                  Email & Notify
                </label>
              </div>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SaveSearches;
