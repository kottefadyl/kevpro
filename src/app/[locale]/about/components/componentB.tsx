import React from 'react';
import Image, { StaticImageData } from 'next/image';

export interface Logotable {
    title: string;
    logo: StaticImageData;
}

type Titleprop = {
    title: string;
    data: Logotable[]; // ajout du tableau
};

export const ComponentB: React.FC<Titleprop> = ({ title, data }) => {
    return (
        <div className="mx-auto p-4 bg-neutral-700 rounded-lg w-full h-[35rem] max-w-[25rem] shadow-2xl shadow-black">
            <div className='shadow-xl dark:bg-[#4b1212] bg-white rounded-lg p-3 font-[hanuman] h-full dark:text-neutral-200 dark:'>
                <h1 className=" text-xl mb-4 text-center my-6 ">{title}</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 mt-6">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <Image className='rounded-full' src={item.logo} alt={item.title} width={50} height={50} />
                            <span className="mt-2">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
