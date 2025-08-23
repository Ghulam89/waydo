import React, { useState } from 'react'
import ReviewCard from '../../components/common/ReviewCard'
import { Button } from '../../components/ui/button';
 import noSearch from '../../assets/images/icons/no-search.png'
import AddReviews from './AddReviews';
const PublicReviews = () => {
const [open,setOpen] = useState(false)
    
const reviews = [
  {
    name: 'Phoenix Babar',
    rating: 4.6,
    date: '19/08/2025',
    skill:'Buyer',
    comment: 'Well maintained Honda Civic with full service history. Single owner, accident-free. Recently serviced with new tires and battery. Perfect for daily commute or family use.',
    response: 'Thank you for the review! Hope it serves you well.'
  },
  {
    name: 'Romi',
    rating: 4.4,
    date: '19/08/2025',
    comment: 'Well maintained Honda Civic with full service history...',
    response: null
  }
];



  return (
    <div  className=' py-5'>
          
    
   {reviews.length > 0 ? (
     reviews.map((review, index) => (
        <>
          <h2 className=' text-lg text-black font-medium mb-6'>4.5 out 5</h2>
         
          <div className="mb-6 border border-[#EAECF0] bg-[#FCFCFD] px-4 py-4 rounded-lg  flex items-start justify-between">
   <div>
         <h2 className="text-2xl font-semibold mb-1">4.5 out of 5</h2>
        <p className="text-gray-600">Based on 2 Ratings</p>
   </div>
        <Button onClick={()=>setOpen(true)} className="mt-2 px-4  h-12  bg-white  text-primary rounded-md hover:bg-gray-5 border shadow-none text-sm">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_819_5079)">
<path d="M10.0052 6.66663L10.0052 13.3333M13.3385 9.99996L6.67187 9.99996" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="10.0052" cy="9.99996" r="8.33333" stroke="#141B34" stroke-width="1.5"/>
</g>
<defs>
<clipPath id="clip0_819_5079">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
  Add your Review
        </Button>
      </div>
        <ReviewCard key={index} {...review} response={review.response ?? undefined} />
        </>
      
      ))
   ):(   <div className=' text-center w-96 mx-auto'>
        <img src={noSearch} alt='' className=' mx-auto' />
        <h2 className=' text-black text-lg text-center font-medium'>No results found</h2>
        <p className=' text-gray-500'>How was your experience with City Auto Motors? Leave a review to help other buyers.</p>
 <Button  onClick={()=>setOpen(true)} className="mt-2 px-4  h-12  bg-white  text-primary rounded-md hover:bg-gray-5 border shadow-none text-sm">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_819_5079)">
<path d="M10.0052 6.66663L10.0052 13.3333M13.3385 9.99996L6.67187 9.99996" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="10.0052" cy="9.99996" r="8.33333" stroke="#141B34" stroke-width="1.5"/>
</g>
<defs>
<clipPath id="clip0_819_5079">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
  Add your Review
        </Button>
      </div>)}
     


   <AddReviews setOpen={setOpen} open={open} onClose={()=>setOpen(false)} />
   
        </div> 
  )
}

export default PublicReviews