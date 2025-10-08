// components/ComingSoonSection.js
import React from 'react';

const ComingSoonSection = () => {
  const features = [
    {
      title: "Our Official Store",
      status: "Coming Soon",
      character: "/pika.png"
    },
    {
      title: "Grading",
      status: "Coming Soon",
      character: "/sark.png"
    },
    {
      title: "Competitions",
      status: "Coming Soon",
      character: "/jokera.png"
    }
  ];

  return (
    <div className="bg-[url('/bg.svg')] bg-center bg-cover md:h-[438px] h-full lg:px-[120px] px-0 py-[64px] relative z-10">
      <div className="max-w-7xl mx-auto  px-2 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white lg:px-[120px] pb-[64px] tracking-tight">
          Many more coming soon...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className=" ">
              <div className="rounded-[32px] border flex  justify-center   items-start border-[rgba(255,255,255,0.25)] bg-[#BC37FD]   p-2   ">
                <div className="    flex justify-center items-center p-2">
                  <img className=' ' src={feature.character} alt={feature.title} />
                </div>
                <div className="flex flex-col items-start pt-3 ">
                  <div className="rounded-[140px] border border-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.25)] text-white mb-4 flex px-[18px] py-[8px] justify-center items-center gap-[10px]">
                    {feature.status}
                  </div>
                  <h3 className="text-xl ml-1 font-bold text-white mb-5">{feature.title}</h3>
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