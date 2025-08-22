import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";

export const FrameWrapperSubsection = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("Compact");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { label: "Sedan", isSelected: false },
    { label: "Compact", isSelected: true },
    { label: "Compact", isSelected: false },
    { label: "SUV", isSelected: false },
    { label: "Pickup Truck", isSelected: false },
    { label: "Minivan", isSelected: false },
    { label: "Pickup Truck", isSelected: false },
    { label: "Compact", isSelected: false },
    { label: "SUV", isSelected: false },
    { label: "Minivan", isSelected: false },
    { label: "Compact", isSelected: false },
    { label: "SUV", isSelected: false },
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Adjust this value as needed
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-center gap-2 w-full relative">
      {/* <Button
        variant="outline"
        size="sm"
        onClick={() => scroll("left")}
        className="h-auto p-2.5 rounded-[32px] bg-primary-600 border-none hover:bg-primary-700 shrink-0"
      >
        <ChevronLeftIcon className="w-5 h-5 text-white" />
      </Button> */}

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide gap-2 flex-1"
        style={{ scrollbarWidth: 'none' }} // For Firefox
      >
        {categories.map((category, index) => (
          <Button
            key={`category-${index}`}
            variant="outline"
            size="sm"
            onClick={() => handleCategoryClick(category.label)}
            className={`
              h-auto px-4 py-2.5 rounded-[32px] border whitespace-nowrap font-medium text-sm tracking-[0] leading-5 [font-family:'Mona_Sans',Helvetica] shrink-0
              ${
                category.label === selectedCategory || (index === 1)
                  ? "bg-primary-600 text-white border-[#ff0000]"
                  : "bg-white text-gray-700 border-[#cfd4dc] hover:bg-gray-50"
              }
            `}
          >
            {category.label}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => scroll("right")}
        className="h-auto p-2.5 rounded-[32px] bg-primary-600 border-none hover:bg-primary-700 shrink-0"
      >
        <ChevronRightIcon className="w-5 h-5 text-white" />
      </Button>
    </div>
  );
};