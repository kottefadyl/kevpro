"use client";

import { useState } from "react";
import {
  FaEnvelope,
} from "react-icons/fa";
import { BsPerson, BsHouse, BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { FaServicestack } from "react-icons/fa6";
import { MdOutlineTranslate, MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function BottomNav() {
  const [visible, setVisible] = useState(true);
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const t = useTranslations("Nav");

  const oppositeLocale = locale === "en" ? "fr" : "en";

  return (
    <>
      {/* Bouton flottant pour afficher/masquer */}
      <button
        onClick={() => setVisible(!visible)}
        className="fixed bottom-24 right-6 z-50 bg-[#B12929] hover:bg-black text-white p-3 rounded-full shadow-lg transition-all duration-300"
      >
        {visible ? "−" : "+"}
      </button>

      {/* Barre de navigation avec animation */}
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ opacity: 0, y: 50 }} // départ : caché + en bas
            animate={{ opacity: 1, y: 0 }} // animation vers visible
            exit={{ opacity: 0, y: 50 }} // sortie : descend et disparaît
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="
              fixed bottom-6 left-1/2 -translate-x-1/2
              bg-neutral-700/40 dark:bg-black/40
              backdrop-blur-md
              border border-white/20 dark:border-neutral-300/20
              shadow-[0_8px_30px_rgba(0,0,0,0.12)]
              rounded-2xl
              px-6 py-3
              flex items-center justify-center gap-6
              z-40
              md:w-5/12
              h-14
            "
          >
            {/* Liens */}
            <a href="#hero" className="hover:scale-110 transition-transform duration-200 hover:text-[#B12929] ">
              <BsHouse />
            </a>
            <a href="#about" className="hover:scale-110 transition-transform duration-200 hover:text-[#B12929] ">
              <BsPerson />
            </a>
            <a href="#recentproject" className="hover:scale-110 transition-transform duration-200 hover:text-[#B12929] ">
              <BsReverseLayoutTextWindowReverse />
            </a>
            <a href="#servicepart" className="hover:scale-110 transition-transform duration-200 hover:text-[#B12929] ">
              <FaServicestack />
            </a>
            <a href="#getintouch" className="hover:scale-110 transition-transform duration-200 hover:text-[#B12929] ">
              <FaEnvelope />
            </a>

            {/* Changement de langue */}
            <Link
              href="/"
              locale={oppositeLocale}
              className="hover:scale-110 transition-transform duration-200 hover:text-[#B12929]"
            >
              <MdOutlineTranslate />
            </Link>

            {/* Changement de thème */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:scale-110 transition-transform duration-200 hover:text-[#B12929]"
            >
              {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
