import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarImageGalleryProps {
  carImages: string[];
}

export default function CarImageGallery({ carImages }: CarImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? carImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === carImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Main Image */}
      <div className="relative">
        <img
          src={carImages[currentImageIndex]}
          alt="Car main image"
          className="w-full h-96 object-cover rounded-2xl"
        />

        {/* Prev Button */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2  bg-opacity-40 hover:bg-opacity-60  hover:bg-primary-600 text-white p-2 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-40 hover:bg-opacity-60 hover:bg-primary-600 text-white p-2 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Count & Icon Badge */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-2xl">
          <svg
            width="20"
            height="20"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.7454 19.5502H17.7562C18.7827 19.5502 19.6148 18.718 19.6148 17.6915V4.6807C19.6148 3.65418 18.7827 2.82202 17.7562 2.82202H4.7454C3.71888 2.82202 2.88672 3.65418 2.88672 4.6807V17.6915C2.88672 18.718 3.71888 19.5502 4.7454 19.5502ZM4.7454 19.5502L14.9681 9.3274L19.6148 13.9741M9.3921 7.93339C9.3921 8.70328 8.76798 9.3274 7.99809 9.3274C7.2282 9.3274 6.60408 8.70328 6.60408 7.93339C6.60408 7.1635 7.2282 6.53938 7.99809 6.53938C8.76798 6.53938 9.3921 7.1635 9.3921 7.93339Z"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {carImages.length}
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="relative  py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {carImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-32 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                index === currentImageIndex
                  ? "border-primary-600"
                  : "border-gray-200"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Right Arrow Overlay for thumbnail scroll */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 pr-2 z-10 pointer-events-none">
          <div className=" bg-primary-600 bg-opacity-70 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow pointer-events-auto">
            <ChevronRight className="text-white w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
