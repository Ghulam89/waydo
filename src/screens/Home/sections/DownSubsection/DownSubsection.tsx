import { ChevronDown, Search } from "lucide-react";
import React, { useState } from "react";

const filterOptions = [
  { 
    label: "Brand", 
    placeholder: "Select",
    options: ["Toyota", "Honda", "BMW", "Mercedes", "Audi", "Ford", "Chevrolet", "Nissan", "Volkswagen", "Hyundai"]
  },
  { 
    label: "Model", 
    placeholder: "Select",
    options: ["Camry", "Civic", "X3", "C-Class", "A4", "F-150", "Malibu", "Altima", "Jetta", "Elantra"]
  },
  { 
    label: "Year", 
    placeholder: "Select",
    options: ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"]
  },
  { 
    label: "Price Range", 
    placeholder: "Select",
    options: ["$0 - $15K", "$15K - $25K", "$25K - $35K", "$35K - $50K", "$50K - $75K", "$75K - $100K", "$100K+"]
  },
  { 
    label: "Location", 
    placeholder: "Select",
    options: ["New York", "California", "Texas", "Florida", "Illinois", "Pennsylvania", "Ohio", "Michigan", "Georgia", "North Carolina"]
  },
  { 
    label: "Filters", 
    placeholder: "Select",
    options: ["Mileage: Low to High", "Mileage: High to Low", "Price: Low to High", "Price: High to Low", "Year: Newest First", "Year: Oldest First", "Most Popular", "Recently Added"]
  },
];

const CustomSelect = ({ option, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-end gap-[27px] border-none shadow-none bg-transparent p-0 h-auto focus:ring-0 focus:outline-none"
      >
        <div className="flex flex-col items-start gap-2">
          <div className="font-semibold text-gray-900 text-base tracking-[0] leading-6 [font-family:'Mona_Sans',Helvetica]">
            {option.label}
          </div>
          <div className={`font-medium text-base   tracking-[0] leading-6 [font-family:'Mona_Sans',Helvetica] ${
            value ? 'text-gray-900' : 'text-gray-500'
          }`}>
            {value || option.placeholder}
          </div>
        </div>
        <ChevronDown className={`w-[18px] h-[18px] text-gray-500 transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-20 max-h-60 overflow-y-auto">
            <div className="py-1">
              {value && (
                <button
                  onClick={() => {
                    onChange('');
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors border-b border-gray-100"
                >
                  Clear selection
                </button>
              )}
              {option.options.map((optionValue) => (
                <button
                  key={optionValue}
                  onClick={() => {
                    onChange(optionValue);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                    value === optionValue 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {optionValue}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const DownSubsection = () => {
  const [selectedValues, setSelectedValues] = useState({});

  const handleValueChange = (label, value) => {
    setSelectedValues(prev => ({
      ...prev,
      [label]: value
    }));
  };

  const handleSearch = () => {
    console.log('Search with filters:', selectedValues);
    // Add your search logic here
  };

  const clearAllFilters = () => {
    setSelectedValues({});
  };

  const hasActiveFilters = Object.values(selectedValues).some(value => value);

  return (
    <div className="flex flex-col w-full items-start gap-8 px-8 py-[18px] bg-[#ffffff] rounded-3xl border border-solid border-[#cfd4dc] shadow-shadow-md">
      <div className="flex items-center justify-between gap-8 w-full">
        {filterOptions.map((option, index) => (
          <React.Fragment key={option.label}>
            <div className="inline-flex items-center gap-4 flex-[0_0_auto]">
              <CustomSelect
                option={option}
                value={selectedValues[option.label] || ''}
                onChange={(value) => handleValueChange(option.label, value)}
              />
            </div>
            {index < filterOptions.length - 1 && (
              <div className="h-11 w-px bg-gray-300" />
            )}
          </React.Fragment>
        ))}

        <div className="flex items-center gap-3">
          {/* {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              Clear all
            </button>
          )} */}
          {!hasActiveFilters?  <button
            onClick={handleSearch}
className="inline-flex gap-2 p-3 bg-primary-600 rounded-lg border border-solid border-[#ff0000] shadow-shadow-xs items-center justify-center h-auto"          >
            <Search className="w-5 h-5 text-white" />
          </button>:null}
        
        </div>
      </div>
    </div>
  );
};