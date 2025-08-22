import { ChevronDown, Search } from "lucide-react";
import React, { useState } from "react";

const filterOptions = [
  { label: "Brand", type: "brand" },
  { label: "Model", type: "list", options: ["Corolla", "Civic", "Camry", "Fortuner", "X3", "C-Class"] },
  { label: "Year", type: "range" },
  { label: "Price Range", type: "price", options: ["$0 - $15K", "$15K - $25K", "$25K - $35K", "$35K - $50K", "$50K - $75K", "$75K - $100K", "$100K+"] },
  { label: "Location", type: "list", options: ["New York", "California", "Texas", "Florida", "Illinois", "Ohio"] },
  { label: "Filters", type: "advanced" },
];

const CustomSelect = ({ option, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-end gap-6 border-none shadow-none bg-transparent p-0 h-auto focus:ring-0 focus:outline-none"
      >
        <div className="flex flex-col items-start gap-1">
          <div className="font-semibold text-gray-900 text-base">{option.label}</div>
          <div className={`font-medium text-base ${value ? 'text-gray-900' : 'text-gray-500'}`}>
            {value || "Select"}
          </div>
        </div>
        <ChevronDown className={`w-[18px] h-[18px] text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute top-16 sm:-left-24   left-16 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-200 z-20 p-4">
            
            {/* Brand → Popular Searches */}
            {option.type === "brand" && (
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Popular Searches</h4>
                  <button className="px-3 py-2 text-left hover:bg-gray-50 rounded-md">Toyota</button>
                  <button className="px-3 py-2 text-left hover:bg-gray-50 rounded-md">Honda</button>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Toyota</h4>
                  <button className="px-3 py-2 text-left hover:bg-gray-50 rounded-md">Corolla</button>
                  <button className="px-3 py-2 text-left hover:bg-gray-50 rounded-md">Fortuner</button>
                </div>
              </div>
            )}

            {/* Model / Location → List */}
            {option.type === "list" && (
              <div className="space-y-2">
                {option.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      onChange(opt);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                      value === opt ? "bg-blue-50 text-blue-700 font-medium" : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Year Range */}
            {option.type === "range" && (
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <input type="number" placeholder="From" className="border rounded-lg px-3 py-2 text-sm" />
                  <input type="number" placeholder="To" className="border rounded-lg px-3 py-2 text-sm" />
                </div>
                <div className="flex justify-between">
                  <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">Clear</button>
                  <button className="px-4 py-2 text-sm bg-black text-white rounded-lg">Apply Filters</button>
                </div>
              </div>
            )}

            {/* Price Range */}
            {option.type === "price" && (
              <div className="flex flex-col gap-3">
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {option.options.map((range) => (
                    <button
                      key={range}
                      onClick={() => {
                        onChange(range);
                        setIsOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                        value === range ? "bg-blue-50 text-blue-700 font-medium" : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between pt-2">
                  <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">Clear</button>
                  <button className="px-4 py-2 text-sm bg-black text-white rounded-lg">Apply Filters</button>
                </div>
              </div>
            )}

            {/* Other Filters */}
            {option.type === "advanced" && (
              <div className="flex flex-col gap-3">
                <input type="text" placeholder="Keywords" className="border rounded-lg px-3 py-2 text-sm" />
                <div className="flex gap-2">
                  <button className="flex-1 border rounded-lg px-3 py-2 text-sm">Individual</button>
                  <button className="flex-1 border rounded-lg px-3 py-2 text-sm">Dealer</button>
                </div>
                <div className="flex justify-between">
                  <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">Clear</button>
                  <button className="px-4 py-2 text-sm bg-black text-white rounded-lg">Apply Filters</button>
                </div>
              </div>
            )}

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

  return (
    <div className="flex flex-col w-full items-start gap-8 px-8 py-[18px] bg-white rounded-3xl border border-gray-300 shadow-md">
      <div className="flex flex-wrap gap-8  items-center justify-between w-full">
        {filterOptions.map((option, index) => (
          <React.Fragment key={option.label}>
            <CustomSelect
              option={option}
              value={selectedValues[option.label] || ''}
              onChange={(val) => handleValueChange(option.label, val)}
            />
            {index < filterOptions.length - 1 && <div className="h-11 w-px bg-gray-300" />}
          </React.Fragment>
        ))}

        {/* Main search button */}
        <button className="p-3  bg-primary-600 rounded-lg text-white">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
