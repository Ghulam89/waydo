import React from 'react';
import SearchListingCard from '../../components/common/SearchListingCard';
import noSearch from '../../assets/images/icons/no-search.png';

const PublicAds = () => {
  const listings = [{
    
  }];

  return (
    <div className="py-5">
      <h2 className="text-lg text-black font-medium">
        {listings.length} items live
      </h2>

      {listings.length > 0 ? (
        <div className="pt-6 space-y-4">
          {listings.map((listing, index) => (
            <SearchListingCard key={index} data={listing} />
          ))}
        </div>
      ) : (
        <div className="text-center w-96 mx-auto pt-10">
          <img src={noSearch} alt="No results" className="mx-auto" />
          <h2 className="text-black text-lg font-medium mt-4">
            No results found
          </h2>
        </div>
      )}
    </div>
  );
};

export default PublicAds;
