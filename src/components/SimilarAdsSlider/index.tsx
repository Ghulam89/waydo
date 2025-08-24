import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import car1 from "../../assets/images/cars/car1.png";

const ads = [
  {
    id: 1,
    image: car1,
    title: "2022 Tesla Model 3",
    subtitle: "Honda • Civic",
    price: "$42,500",
    liked: false,
  },
  {
    id: 2,
    image: car1,
    title: "2022 Tesla Model 3",
    subtitle: "Honda • Civic",
    price: "$42,500",
    liked: true,
  },
  {
    id: 3,
    image: car1,
    title: "2022 Tesla Model 3",
    subtitle: "Honda • Civic",
    price: "$42,500",
    liked: false,
  },
  {
    id: 4,
    image: car1,
    title: "2022 Tesla Model 3",
    subtitle: "Honda • Civic",
    price: "$42,500",
    liked: false,
  },
];

export default function SimilarAdsSlider() {
  return (
    <div className="py-10 px-4 relative">
      <h2 className="text-2xl font-semibold mb-6">Similar Ads</h2>

      <div className="relative">
        <Swiper
          spaceBetween={16}
          slidesPerView={3}
          navigation={{
            nextEl: ".custom-next",
          }}
          modules={[Navigation]}
          className="w-full"
        >
          {ads.map((ad) => (
            <SwiperSlide key={ad.id}>
              <div className="rounded-xl border bg-white overflow-hidden shadow-sm relative">
                <div className="relative">
                  <img
                    src={ad.image}
                    alt={ad.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    {/* Heart Icon */}
                    <div>
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M20.031 4.48489C19.552 4.00562 18.9832 3.62543 18.3572 3.36604C17.7311 3.10665 17.0602 2.97314 16.3825 2.97314C15.7049 2.97314 15.0339 3.10665 14.4079 3.36604C13.7819 3.62543 13.2131 4.00562 12.7341 4.48489L11.7399 5.47908L10.7457 4.48489C9.77805 3.51726 8.46566 2.97365 7.09722 2.97365C5.72878 2.97365 4.41638 3.51726 3.44875 4.48489C2.48111 5.45253 1.9375 6.76492 1.9375 8.13336C1.9375 9.50181 2.48111 10.8142 3.44875 11.7818L4.44293 12.776L11.7399 20.073L19.0368 12.776L20.031 11.7818C20.5103 11.3028 20.8905 10.734 21.1498 10.108C21.4092 9.48198 21.5428 8.81099 21.5428 8.13336C21.5428 7.45574 21.4092 6.78475 21.1498 6.15873C20.8905 5.53271 20.5103 4.96394 20.031 4.48489V4.48489Z"
                            stroke="white"
                            strokeWidth="1.87582"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="22.5098"
                              height="22.5098"
                              fill="white"
                              transform="translate(0.488281 0.161133)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    {/* Share Icon */}
                    <div>
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3778 9.01605L16.5346 7.16632C15.2064 5.83355 14.6859 5.11659 13.9667 5.37005C13.0699 5.68609 13.3651 7.68022 13.3651 8.35345C11.9709 8.35345 10.5213 8.22953 9.147 8.48772C4.61008 9.34006 3.19141 13.0248 3.19141 17.0435C4.4755 16.1339 5.75831 15.1649 7.30164 14.7433C9.22815 14.2171 11.3797 14.4682 13.3651 14.4682C13.3651 15.1413 13.0699 17.1356 13.9667 17.4516C14.7816 17.7387 15.2064 16.9881 16.5346 15.6553L18.3778 13.8056C19.5085 12.671 20.0738 12.1037 20.0738 11.4108C20.0738 10.718 19.5085 10.1507 18.3778 9.01606L18.3778 9.01605Z"
                          stroke="white"
                          strokeWidth="1.40687"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-0.5 rounded">
                    8:1
                  </div>
                </div>

                <div className="p-3">
                  <h3 className="text-sm font-semibold">{ad.title}</h3>
                  <p className="text-xs text-gray-400">{ad.subtitle}</p>
                  <p className="text-base font-semibold mt-1">{ad.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* White fade overlay on right side */}
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        {/* Custom right arrow */}
        <div className="custom-next absolute top-1/2 -translate-y-1/2 right-4 z-20">
          <button className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
