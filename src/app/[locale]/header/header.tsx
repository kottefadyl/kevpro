'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { FaGlobe } from 'react-icons/fa';
import { ModeToggle } from '@/compo-provider/ModeToggle';

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const oppositeLocale = locale === 'en' ? 'fr' : 'en';
  const tooltip = locale === 'en' ? 'Passer en français 🇫🇷' : 'Switch to English 🇬🇧';

  return (
    <div className="bg-[#2D302F]/80 backdrop-blur-md flex justify-between items-center py-4 px-11 
lg:w-9/12 w-full text-white mx-auto z-50 fixed top-0 left-1/2 transform -translate-x-1/2">
      {/* Logo ou nom */}
      <div className="font-[Cardo] text-white/90 text-xl">KEVIN .</div>

      {/* Actions : Langue + Thème */}
      <div className="flex items-center gap-4">
        {/* Changement de langue avec icône globe */}
        <Link
          href={pathname}
          locale={oppositeLocale}
          className="p-2 rounded-full bg-white text-black hover:bg-gray-300 transition-colors"
          title={tooltip}
          aria-label={tooltip}
        >
          <FaGlobe size={18} />
        </Link>

        {/* Toggle thème (déjà stylé avec shadcn) */}
        <ModeToggle />
      </div>
    </div>
  );
}
