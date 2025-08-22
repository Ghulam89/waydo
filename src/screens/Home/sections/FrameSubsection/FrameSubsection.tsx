import React from "react";
import { Button } from "../../../../components/ui/button";

export const FrameSubsection = (): JSX.Element => {
  return (
    <section style={{ 
    backgroundImage: `url('/public/banner.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}  className="flex flex-col w-full rounded-2xl py-8 items-center gap-4 relative">
      <div className="flex flex-col items-start relative w-full max-w-[747px] flex-[0_0_auto]">
        <h2 className="text-[#ffffff] text-[length:var(--display-sm-semibold-font-size)] text-center tracking-[var(--display-sm-semibold-letter-spacing)] leading-[var(--display-sm-semibold-line-height)] relative w-full mt-[-1.00px] font-display-sm-semibold font-[number:var(--display-sm-semibold-font-weight)] [font-style:var(--display-sm-semibold-font-style)]">
          Want to sell your vehicle?
        </h2>

        <p className="relative w-full font-[number:var(--text-xl-normal-font-weight)] text-[#f8f9fb] text-[length:var(--text-xl-normal-font-size)] text-center leading-[var(--text-xl-normal-line-height)] font-text-xl-normal tracking-[var(--text-xl-normal-letter-spacing)] [font-style:var(--text-xl-normal-font-style)]">
          Post easily and reach thousands of potential buyers.
        </p>
      </div>

      <div className="flex items-start relative flex-[0_0_auto]">
        <Button className="flex gap-2 px-3.5 py-2 bg-primary-600 rounded-lg border border-solid border-[#ff0000] shadow-shadow-xs items-center justify-center h-auto">
          <span className="font-medium text-[#ffffff] text-sm tracking-[0] leading-5 whitespace-nowrap [font-family:'Mona_Sans',Helvetica]">
            Post Ad
          </span>
        </Button>
      </div>
    </section>
  );
};
