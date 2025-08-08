'use client';
import React, { useState } from 'react';
import { Title1 } from '../generalCompo/title1';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaWhatsapp, FaXTwitter, FaGithub } from 'react-icons/fa6';

export default function Getintouch() {
  const t = useTranslations('Get In Touch');
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className='mt-20 md:w-11/12 md:mx-auto 2xl:w-8/12'>
      <Title1 text={t('title1')} />

      <div className='mt-10'>
        <p className='font-[hanuman] md:text-xl max-w-4/5 mx-auto text-center'>{t('text')}</p>
      </div>

      <div className='md:flex mt-52 justify-center lg:w-4/5 mx-auto w-4/5 text-center md:text-left'>
        <div className='md:w-1/3 my-8 md:my-0'>
          <h1 className='font-bold font-[hanuman] text-2xl'>{t('reach')}</h1>
          <p className='font-[hanuman] lg:text-xl text-[#3D413E] md:text-sm mt-3 hover:text-red-400 duration-100 cursor-pointer'>kottekevin01@gmail.com</p>
          <p className='font-[hanuman] lg:text-xl text-[#3D413E] md:text-sm mt-3 hover:text-red-400 duration-100 cursor-pointer'>+237 6 51 44 89 56</p>
        </div>

        <div className='md:w-1/3 my-8 md:my-0'>
          <h1 className='font-bold font-[hanuman] text-2xl'>{t('smedia')}</h1>
          <div className='flex gap-4 justify-center md:justify-start mt-3 text-[#3D413E] text-xl'>
            <a className='hover:text-red-400 duration-100' href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a className='hover:text-red-400 duration-100' href="https://wa.me/237651448956" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a className='hover:text-red-400 duration-100' href="https://x.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a className='hover:text-red-400 duration-100' href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>

        <div className='md:w-1/3 my-8 md:my-0'>
          <button
            onClick={openModal}
            className='rounded-xs font-[gloock] bg-[#B12929] text-white lg:h-14 h-16 lg:w-70 w-60 text-sm hover:bg-neutral-200 cursor-pointer hover:text-black duration-200'>
            {t('hello')}
          </button>
        </div>
      </div>

{/* MODAL */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }} // apparition progressive du backdrop
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60"
    >
      {/* Bouton de fermeture */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-6 text-3xl font-bold text-neutral-300 hover:text-white transition"
      >
        &times;
      </button>

      {/* Contenu du modal avec animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="md:flex md:flex-row-reverse bg-neutral-100 dark:bg-[#1F1F1F] rounded-md shadow-2xl overflow-hidden w-[90%] max-w-4xl"
      >
        {/* Colonne droite (Image & Réseaux sociaux) */}
        <div className="w-full md:w-1/2 relative bg-[url('/images/painting1.png')] bg-cover bg-center flex flex-col items-center justify-center p-6 text-white">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-2xl font-bold font-[caprasimo]">{t("smedia")}</h1>
            <p className="font-[hanuman] text-lg mt-2">{t("otherContact")}</p>
            <div className="flex justify-center gap-4 mt-4 text-4xl">
              <a href="https://facebook.com" target="_blank" className="hover:text-blue-400 transition"><FaFacebookF /></a>
              <a href="https://wa.me/237651448956" target="_blank" className="hover:text-green-400 transition"><FaWhatsapp /></a>
              <a href="https://x.com" target="_blank" className="hover:text-gray-300 transition"><FaXTwitter /></a>
              <a href="https://github.com/kottefadyl?tab=repositories" target="_blank" className="hover:text-purple-400 transition"><FaGithub /></a>
            </div>
          </div>
        </div>

        {/* Colonne gauche (Formulaire) */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 font-[caprasimo] text-[#B12929]">{t("hello")}</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder={t("name")}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B12929]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B12929]"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B12929]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#B12929] hover:bg-black text-white px-6 py-3 rounded-md w-full md:w-auto font-[gloock] transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}
