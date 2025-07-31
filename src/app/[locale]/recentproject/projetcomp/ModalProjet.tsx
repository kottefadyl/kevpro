'use client';

import React from "react";
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type ModalProps = {
    show: boolean;
    onClose: () => void;
    intitul: string;
    type: string;
    date: string;
    text: string;
    img: StaticImageData;
};

export const ModalProjet: React.FC<ModalProps> = ({ show, onClose, intitul, type, date, text, img }) => {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="bg-white dark:bg-[#2D302F] md:w-2/5 rounded-xs shadow-lg relative overflow-hidden"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 text-2xl cursor-pointer">&times;</button>
                        <Image src={img} alt="img" className="w-full h-auto object-cover mb-4" />
                        <div className="font-[hanuman] font-semibold mx-7">
                            <h1 className="text-xl text-[#E01C1C] my-3 font-[inknut_Antiqua]">{intitul}</h1>
                            <p className="leading-relaxed text-md text-neutral-700 dark:text-neutral-200">{text}</p>
                            <div className="flex mt-5 mb-4 ml-14 justify-between text-sm">
                                <h2>{type}</h2>
                                <h2>{date}</h2>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
