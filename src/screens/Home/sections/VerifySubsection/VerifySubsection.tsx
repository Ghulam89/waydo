import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const VerifySubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start justify-center gap-2.5 px-10 py-8 bg-indigo-600 rounded-2xl">
      <div className="flex items-center justify-between relative w-full">
        <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[17px] relative flex-[0_0_auto]">
            <div className="inline-flex  items-center gap-2 relative flex-[0_0_auto]">
              <div className="relative w-[42px] h-10 bg-[url(/vector-1.svg)] bg-[100%_100%]">
                <img
                  className=""
                  alt="Vector"
                  src={'./public/icons/verified.png'}
                />
              </div>

              <div className="relative w-[99px] h-[18px] mr-[-2.00px]">
                <div className="absolute w-[97px] top-0 left-0 [font-family:'Mona_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[18px]">
                  Get Verified
                </div>
              </div>
            </div>

            <Separator
              orientation="vertical"
              className="h-[46px] w-px bg-white mr-[-1.00px]"
            />
          </div>

          <div className="relative w-[349px] h-[18px] mr-[-2.00px]">
            <div className="absolute w-[347px] top-0 left-0 [font-family:'Mona_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[18px]">
              Gain more visibility and boost your credibility
            </div>
          </div>
        </div>

        <Button
          variant="secondary"
          className="inline-flex gap-2 px-3.5 py-2 bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs items-center justify-center h-auto"
        >
          <span className="font-medium text-gray-700 text-sm tracking-[0] leading-5 whitespace-nowrap [font-family:'Mona_Sans',Helvetica]">
            Verify Now
          </span>
        </Button>
      </div>
    </section>
  );
};
