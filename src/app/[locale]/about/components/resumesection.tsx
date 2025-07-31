'use client';
import React, { useState } from 'react';
import { Title2 } from '../../generalCompo/title2';
import { useTranslations } from 'next-intl';
import { Item } from './item';

const ResumeSection = () => {
  const t = useTranslations('about');
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="bg-[#E6DEDE] dark:bg-[#2D302F] h-fit py-10 px-6 sm:px-16 font-sans mt-32 text-neutral-800 dark:text-neutral-300 rounded-xs">
      
      {/* Bloc scrollable avec animation de hauteur */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          showAll ? 'max-h-[3000px]' : 'max-h-[900px]'
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Colonne Expérience */}
          <div className='w-full lg:w-1/2'>
            <Title2 text1={t('exprerience21')} text2={t('experience22')} />
            <Item intitul='SHIFT HOUSE' titrposte={t('shiftHousePoste')} date={t('shiftHousedate')} text={t('shiftHousetexte')} />
            <Item intitul='DEV UP SOLUTION' titrposte={t('devupsolutionposte')} date={t('devupsolutiondate')} text={t('devupsolutiontext')} />
            <Item intitul='ECHO COLLECT' titrposte={t('echocollecteposte')} date={t('echocollectedate')} text={t('echocollectetext')} />
          </div>

          {/* Colonne Diplômes et Certifications */}
          <div className='w-full lg:w-1/2'>
            <Title2 text1={t('Edu-certi1')} text2={t('Edu-certi2')} />
            <Item intitul={t('school')} titrposte={t('diploma1')} date={t('datediploma1')} text={t('diplomatext')} />
            <Item intitul={t('school')} titrposte={t('diploma2')} date={t('datediploma2')} text={t('diploma2text')} />
            <Item intitul='CYON GROUP' titrposte={t('cyonCertification')} date={t('datecyon')} text={t('cyonCertificationtext')} />
            <Item intitul='IPERCASH' titrposte={t('ipercashcertif')} date={t('dateipercash')} text={t('ipercashcertiftext')} />
          </div>
        </div>
      </div>

      {/* Bouton "Show more / Hide" */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#E01C1C] text-white px-6 py-2 rounded-full shadow-md  transition duration-300 cursor-pointer hover:bg-neutral-100 hover:text-neutral-900"
        >
          {showAll ? t('hide') || 'Hide' : t('show') || 'Show more'}
        </button>
      </div>
    </div>
  );
};

export default ResumeSection;
