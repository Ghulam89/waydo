import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { DownSubsection } from "../../screens/Home/sections/DownSubsection/DownSubsection";
import "swiper/css";
import "swiper/css/autoplay";
interface BannerProps {
    withFilter?: boolean;
    onSearch?: () => void;
    filterSticky?: boolean;
}

export default function Banner({ withFilter, onSearch, filterSticky }: BannerProps) {
    return (
        <div className="relative  mt-5">
            {/* Banner Container with proper dimensions and rounded corners */}
            <div className="relative h-[257px] rounded-[21px] border border-gray-200 overflow-hidden">
                <Swiper
                    loop
                    autoplay={{
                        delay: 10000
                    }}
                    className="h-full"
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className="relative h-full w-full">
                            <img 
                                src={'/public/banner1.png'} 
                                alt="banner" 
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute top-10 left-10 text-white max-w-md">
                                <h2 className="text-4xl font-bold mb-4">The car of your dreams, now within reach.</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative h-full w-full">
                            <img 
                                  src={'/public/banner2.png'}  
                                alt="banner" 
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute top-10 left-10 text-white max-w-md">
                                <h2 className="text-4xl font-bold mb-4">The car of your dreams, now within reach.</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="relative h-full w-full">
                            <img 
                                  src={'/public/banner1.png'}  
                                alt="banner" 
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute top-10 left-10 text-white max-w-md">
                                <h2 className="text-4xl font-bold mb-4">The car of your dreams, now within reach.</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Filter Container */}
            {withFilter && (
                <div className={`w-[90%] z-10 mx-auto ${filterSticky ? "mt-4" : "absolute -bottom-6 left-1/2 transform -translate-x-1/2"}`}>
                    <div className="relative z-[500]">
                        <DownSubsection />
                    </div>
                </div>
            )}
        </div>
    )
}