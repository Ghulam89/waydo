import { useState } from "react";
import { Modal } from "../../components/common/Modal";
import { Button } from "../../components/ui/button";

export default function AddReviews({ open, setOpen, onClose }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleConfirm = () => {
    const reviewData = {
      rating,
      review: reviewText,
    };
    console.log("Submitted Review:", reviewData);
    setOpen(false); // Close modal
    // Add your API submission logic here
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleStarClick = (index) => {
    setRating(index);
  };

  const handleStarHover = (index) => {
    setHoverRating(index);
  };

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const starIndex = index + 1;
      const isFilled = hoverRating >= starIndex || rating >= starIndex;

      return (
        <svg key={starIndex}
          className={`w-7 h-7 cursor-pointer ${
            isFilled ? "text-yellow-400" : "text-gray-300"
          }`}
          onClick={() => handleStarClick(starIndex)}
          onMouseEnter={() => handleStarHover(starIndex)}
          onMouseLeave={() => setHoverRating(0)} width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1789 2.06677C15.9456 0.691375 17.9242 0.691372 18.6909 2.06676L22.3432 8.61867C22.6535 9.17526 23.2092 9.5518 23.8412 9.63359L31.5716 10.6341C33.2955 10.8572 33.9429 13.015 32.6266 14.1503L27.3666 18.6869C26.821 19.1575 26.5689 19.8842 26.7059 20.5916L27.9889 27.2153C28.301 28.8269 26.6546 30.1131 25.1664 29.4201L17.7836 25.9821C17.2455 25.7315 16.6243 25.7315 16.0862 25.9821L8.70336 29.4201C7.21524 30.1131 5.56878 28.8269 5.88093 27.2153L7.16388 20.5916C7.3009 19.8842 7.04883 19.1575 6.50317 18.6869L1.24318 14.1503C-0.0731273 13.015 0.57429 10.8572 2.29817 10.6341L10.0286 9.63359C10.6606 9.5518 11.2163 9.17526 11.5266 8.61867L15.1789 2.06677Z" stroke="#98A2B3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

       
      );
    });
  };

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      title="Submit your Review"
      className="max-w-md   max-h-[500px] flex justify-center items-center rounded-xl"
    >
        <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="4.91663" width="48" height="48" rx="24" fill="#D1FADF"/>
<rect x="4" y="4.91663" width="48" height="48" rx="24" stroke="#ECFDF3" stroke-width="8"/>
<path d="M38 27.9966V28.9166C37.9988 31.073 37.3005 33.1713 36.0093 34.8984C34.7182 36.6256 32.9033 37.8891 30.8354 38.5005C28.7674 39.1119 26.5573 39.0385 24.5345 38.2912C22.5117 37.5439 20.7847 36.1627 19.611 34.3537C18.4373 32.5446 17.8798 30.4047 18.0217 28.2529C18.1636 26.1012 18.9972 24.0529 20.3983 22.4137C21.7994 20.7744 23.6928 19.632 25.7962 19.1568C27.8996 18.6815 30.1003 18.8989 32.07 19.7766M38 20.9166L28 30.9266L25 27.9266" stroke="#039855" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    <h2 className=" text-black text-xl pt-4  font-medium">Submit your Review</h2>
      <div className="w-full">
        <p className=" text-gray-500 my-3">
          How was your experience with City Auto Motors? Leave a review to help other buyers.
        </p>


            <h2 className=" text-black  mb-3 font-medium">Overall rating (you select)</h2>

        <div className="flex items-center space-x-1 mb-4">{renderStars()}</div>
            <h2 className=" text-black  mb-3 font-medium">Write Your Review</h2>

        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write Your Review"
          className="w-full h-24 p-2 border border-gray-300 rounded-md resize-none"
        />

        <div className="flex justify-end gap-2 pt-6">
          <Button
            onClick={handleCancel}
            className="w-full bg-white h-11 hover:bg-gray-100 text-primary border"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            className="w-full bg-primary-500 h-11 text-white"
          >
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
}
