import React from "react";

export const FlexcontainerWrapperSubsection = (): JSX.Element => {
  const textLines = [
    {
      text: "Get your",
      color: "text-[#ffffff]",
    },
    {
      text: "next",
      color: "text-[#ffffff]",
    },
    {
      text: "best deal",
      color: "text-[#ff0000]",
    },
  ];

  return (
    <>
      {/* <section className="flex flex-col w-full items-center justify-center gap-2.5 px-6 py-[436px] relative rounded-2xl bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_47%,rgba(0,0,0,1)_76%,rgba(0,0,0,0)_100%)]">
      <div className="w-[168px] h-[110px] gap-[36.08px] flex flex-col items-start">
        {textLines.map((line, index) => (
          <div
            key={index}
            className="self-stretch font-semibold text-transparent text-[40px] tracking-[-1.20px] leading-10 relative [font-family:'Mona_Sans',Helvetica]"
          >
            <span
              className={`${line.color} tracking-[-0.48px] leading-[0.1px]`}
            >
              {line.text}
              {index < 2 && <br />}
            </span>
          </div>
        ))}
      </div>
    </section> */}
    <img src="./public/ads.png" />
    </>
  
  );
};
