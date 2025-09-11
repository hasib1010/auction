// components/ComingSoonSection.js
import React from 'react';

const ComingSoonSection = () => {
  const features = [
    {
      title: "Our Official Store",
      status: "Coming Soon",
      character: "/pikachu.png"
    },
    {
      title: "Grading",
      status: "Coming Soon",
      character: "/BabiSherlock.png"
    },
    {
      title: "Competitions",
      status: "Coming Soon",
      character: "/Joker.png"
    }
  ];


  return (
    <div className=" bg-[url('/bg.svg')] bg-center bg-cover md:h-[885px] h-full lg:p-[120px] py-10 ">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white pb-[120px]  tracking-tight">
          Many more coming soon...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className=" rounded-[32px] border border-[rgba(255,255,255,0.25)] bg-[#BC37FD] flex  p-2 flex-col justify-center items-start gap-[24px]">
                <div className=" rounded-[24px] bg-[rgba(255,255,255,0.25)] w-full   h-[321px] flex justify-center items-center p-6 ">
                  <img src={feature.character} alt="" />
                </div>
                <div className="flex flex-col items-start ml-4" >
                  <div className="rounded-[140px] border border-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.25)] text-white mb-4 flex px-[18px] py-[8px] justify-center items-center gap-[10px]">
                    {feature.status}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-5">{feature.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;