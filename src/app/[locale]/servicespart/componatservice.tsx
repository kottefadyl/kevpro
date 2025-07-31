import React, { JSX } from 'react';

type ServiceProps = {
  name: string;
  text: string;
  icon: JSX.Element;
};

export const ComponatService: React.FC<ServiceProps> = ({ name, text, icon }) => {
  return (
    <div
      className="md:w-[18rem] lg:w-[24rem] w-4/5 h-fit lg:h-[15rem] mx-auto my-16 max-w-[30rem] border rounded-2xl shadow-sm 
                 bg-[#E6DEDE] dark:bg-[#2D302F]/80 text-center transition-all duration-300 ease-in-out 
                 transform hover:scale-105 cursor-pointer"
    >
      <div className="text-4xl mt-8">{icon}</div>
      <h3 className="font-[caprasimo] my-5 text-xl">{name}</h3>
      <p className="font-[hanuman] px-4 text-sm">{text}</p>
    </div>
  );
};
