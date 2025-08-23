import { useState } from "react";
import { Modal } from "../../components/common/Modal";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import map from '../../assets/images/map.png'
export default function AddAddress({ open, setOpen, onClose }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const [address, setAddress] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [landmark, setLandmark] = useState("");
  const [label, setLabel] = useState("home");
  const [setDefault, setSetDefault] = useState(false);

  const handleConfirm = () => {
    const reviewData = {
      rating,
      review: reviewText,
      address,
      neighbourhood,
      landmark,
      label,
      setDefault,
    };
    console.log("Submitted Review:", reviewData);
    setOpen(false);
    // Submit data to your API here
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleStarClick = (index) => setRating(index);
  const handleStarHover = (index) => setHoverRating(index);

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const starIndex = index + 1;
      const isFilled = hoverRating >= starIndex || rating >= starIndex;

      return (
        <svg
          key={starIndex}
          className={`w-7 h-7 cursor-pointer ${
            isFilled ? "text-yellow-400" : "text-gray-300"
          }`}
          onClick={() => handleStarClick(starIndex)}
          onMouseEnter={() => handleStarHover(starIndex)}
          onMouseLeave={() => setHoverRating(0)}
          width="34"
          height="31"
          viewBox="0 0 34 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1789 2.06677C15.9456 0.691375 17.9242 0.691372 18.6909 2.06676L22.3432 8.61867C22.6535 9.17526 23.2092 9.5518 23.8412 9.63359L31.5716 10.6341C33.2955 10.8572 33.9429 13.015 32.6266 14.1503L27.3666 18.6869C26.821 19.1575 26.5689 19.8842 26.7059 20.5916L27.9889 27.2153C28.301 28.8269 26.6546 30.1131 25.1664 29.4201L17.7836 25.9821C17.2455 25.7315 16.6243 25.7315 16.0862 25.9821L8.70336 29.4201C7.21524 30.1131 5.56878 28.8269 5.88093 27.2153L7.16388 20.5916C7.3009 19.8842 7.04883 19.1575 6.50317 18.6869L1.24318 14.1503C-0.0731273 13.015 0.57429 10.8572 2.29817 10.6341L10.0286 9.63359C10.6606 9.5518 11.2163 9.17526 11.5266 8.61867L15.1789 2.06677Z"
            stroke="#98A2B3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    });
  };

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      title="Submit your Review"
      className="max-w-lg   flex flex-col justify-center items-center rounded-xl"
    >
      <h2 className="text-black text-lg font-semibold mb-2">Select Location</h2>

      <div className="w-full max-h-[90vh] overflow-y-auto space-y-4">
        <Input
          placeholder="Street address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          placeholder="Neighbourhood"
          value={neighbourhood}
          onChange={(e) => setNeighbourhood(e.target.value)}
        />
        <Input
          placeholder="Nearby landmarks"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
        />

        <p className="text-sm text-gray-600">
          Confirming the precise street spot allows our technology to suggest routes that are friendly, efficient, or bus-safe.
        </p>

        {/* Map */}
        <div className="h-64 w-full rounded-md overflow-hidden z-0">
           <img src={map} alt="" />
        </div>

        {/* Label selector */}
        <div>
          <div className=" flex justify-between items-center px-2">
            <label className="block text-sm  font-semibold text-black mb-1">
            Choose how you want to label your location:
          </label>
          <span className=" text-sm text-gray-600">(Required)</span>
          </div>
        

          <div className=" flex gap-2 pt-3">
             <Button className=" bg-white border h-10 text-primary hover:bg-primary-500 hover:text-white">
                Add Custom Label
            </Button>
            <Button className=" bg-white border h-10 text-primary hover:bg-primary-500 hover:text-white">
                Home
            </Button>
             <Button className=" bg-white border h-10 text-primary hover:bg-primary-500 hover:text-white">
                Office
            </Button>
             <Button className=" bg-white border h-10 text-primary hover:bg-primary-500 hover:text-white">
                Other
            </Button>
          </div>

          <div className=" mt-4">
            <Input placeholder="Custom Label" />
          </div>

          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="defaultLocation"
              checked={setDefault}
              onChange={(e) => setSetDefault(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="defaultLocation" className="text-sm text-gray-700">
              Set as default
            </label>
          </div>
        </div>

       
        {/* Buttons */}
        <div className="flex justify-end gap-2 pt-4">
          <Button
            onClick={handleCancel}
            className="w-full bg-white h-11 hover:bg-gray-100 text-primary border"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            className="w-full bg-black h-11 text-white"
          >
            Save Address
          </Button>
        </div>
      </div>
    </Modal>
  );
}
