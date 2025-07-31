"use client"
import React, { useState } from "react";
import Image, { StaticImageData } from 'next/image';
import { ModalProjet } from "./ModalProjet";

type project = {
    intitul: string;
    type: string;
    date: string;
    text: string;
    img: StaticImageData;
};

export const ProjetItem: React.FC<project> = ({ intitul, type, date, text, img }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div
                onClick={() => setShowModal(true)}
                className="w-full md:w-4/5 flex gap-4  md:my-7 justify-center mx-auto cursor-pointer transition-transform duration-300 hover:scale-105"
            >
                <div className="md:w-1/2 w-full">
                    <Image
                        src={img}
                        alt="img"
                        className="w-full md:h-auto object-cover h-40"
                    />
                </div>

                <div className="md:block hidden w-1/2">
                    <span className="mb-2 h-[2px] w-full bg-neutral-400 rounded-full block" />
                    <h2 className="md:my-3 font-[hanuman] text-neutral-600">{type}</h2>
                    <h1 className="my-2 md:my-5 font-[caprasimo] text-neutral-800 dark:text-[#B12929] md:text-xl">{intitul}</h1>
                </div>
            </div>

            <ModalProjet
                show={showModal}
                onClose={() => setShowModal(false)}
                intitul={intitul}
                type={type}
                date={date}
                text={text}
                img={img}
            />
        </>
    );
};
