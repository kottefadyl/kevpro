'use client';

import React, { useState } from "react";
import Slider from "react-slick";
import daryl from "./img/daryl.jpg";
import ivan from "./img/ivan.png";
import { useTranslations } from 'next-intl';
import type { Settings } from "react-slick";
import Image from "next/image";

export const Testimony: React.FC = () => {
    const t = useTranslations('testimonies');
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings: Settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        beforeChange: (_, next) => setCurrentSlide(next),
        dotsClass: "slick-dots flex justify-center mt-6 gap-2",
        customPaging: (i) => (
            <div
                className={`w-3 h-3 rounded-full transition-all duration-300 mt-6 ${
                    currentSlide === i
                        ? 'bg-[#800000] scale-110'
                        : 'bg-neutral-400 opacity-50'
                }`}
            ></div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container py-8 px-4 mx-auto">
            <Slider {...settings}>
                {/* Témoignage 1 */}
                <div className="p-4">
                    <div className="flex gap-3 items-center">
                        <Image src={daryl} alt="Talla Daryl" className="rounded-full h-16 w-16 object-cover" />
                        <div className="w-2/5">
                            <h3 className="font-[hanuman] text-lg">Talla Daryl</h3>
                            <h4 className="font-[hanuman] mt-1 text-neutral-700 text-sm">{t('director')}</h4>
                        </div>
                    </div>
                    <p className="mt-3 md:w-3/5 font-[hanuman] text-sm">
                        {t('directorTestimony')}
                    </p>
                </div>

                {/* Témoignage 2 */}
                <div className="p-4">
                    <div className="flex gap-3 items-center">
                        <Image src={ivan} alt="Tchiengang Ivan" className="rounded-full h-16 w-16 object-cover" />
                        <div className="w-2/5">
                            <h3 className="font-[hanuman] text-lg">Tchiengang Ivan</h3>
                            <h4 className="font-[hanuman] mt-1 text-neutral-700 text-sm">{t('dev')}</h4>
                        </div>
                    </div>
                    <p className="mt-3 md:w-3/5 font-[hanuman] text-sm">
                        {t('developerTestimony')}
                    </p>
                </div>

                {/* Témoignage 3 (à personnaliser si besoin) */}
                <div className="p-4">
                    <h3 className="font-[hanuman]">Autre témoignage ici</h3>
                </div>
            </Slider>
        </div>
    );
};
