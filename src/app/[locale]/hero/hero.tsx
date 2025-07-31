import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import kevpro from "./img/Component32.png"

import "./hero.css"

export default function Hero() {
    const t = useTranslations('Hero');
    return (
        <div className="2xl:px-96 dark:bg-black/95 lg:pt-24 pt-24 bg-[url('/images/hero-fine1.jpg')] welcome1 dark:bg-[url('/images/hero-fine.png')] block px-6 md:px-20 lg:px-56 md:flex md:flex-row-reverse  md:pb-[6rem] w-full  duration-100 pb-20">

            <div className=" relative lg:w-2/4 mx-auto">
                <h1 className='text-center  md:hidden block font-[gloock] text-3xl text-[#B12929] my-5'>
                    KEVIN KOTTE
                </h1>
                {/* Image de profil centrale */}
                <Image
                    src={kevpro}
                    alt="kev-pro"
                    width={700}
                    height={700}
                    className=" object-cover"
                />
            </div>

            <div className='lg:w-2/4 mt-10 lg:mt-0'>
                <h1 className='md:block hidden font-[gloock] text-3xl text-[#B12929] my-3 '>
                    KEVIN KOTTE
                </h1>
                <p className='font-[joti_One]   text-4xl font-bold text-center md:text-left'>
                    {t('text0')}
                </p>
            </div>
        </div>
    )
}
