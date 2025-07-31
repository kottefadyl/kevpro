'use client';
import React, { useState } from 'react';
import { Title1 } from '../generalCompo/title1';
import { useTranslations } from 'next-intl';
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
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white dark:bg-[#292D29] w-[90%] max-w-lg p-6 rounded-xl shadow-xl relative">
            <button onClick={closeModal} className="absolute top-2 right-4 text-2xl font-bold">&times;</button>
            <h2 className="text-xl font-bold mb-4 font-[caprasimo]">{t('hello')}</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full p-2 border rounded focus:outline-none"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="w-full p-2 border rounded focus:outline-none"
              />
              <textarea
                placeholder="Votre message"
                rows={4}
                className="w-full p-2 border rounded focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-[#B12929] hover:bg-black text-white px-4 py-2 rounded font-[gloock]"
              >
                Envoyer
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              Ou contactez-moi via :
              <div className="flex justify-center gap-4 mt-2 text-lg">
                <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
                <a href="https://wa.me/237651448956" target="_blank"><FaWhatsapp /></a>
                <a href="https://x.com" target="_blank"><FaXTwitter /></a>
                <a href="https://github.com" target="_blank"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
