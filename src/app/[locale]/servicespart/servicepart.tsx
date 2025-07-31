import React from 'react';
import { useTranslations } from 'next-intl';
import { Title1 } from '../generalCompo/title1';
import { ComponatService } from './componatservice';

export default function Servicepart() {
  const t = useTranslations('services');

  return (
    <div className='mx-2 w-full mt-20 md:w-11/12 md:mx-auto 2xl:w-8/12'>

      <div className='my-20'>
        <Title1 text={t('title')} />
      </div>

      <div className='md:flex mx-auto md:w-full lg:w-5/6 gap-x-4 md:justify-items-stretch'>
        {/* Colonne gauche */}
        <div className='md:w-1/2'>
          <ComponatService
            name={t('titledatabase')}
            text={t('textdatabase')}
            icon={<i className="bi bi-database-fill-gear text-[#E01C1C]"></i>}
          />
          <ComponatService
            name={t('titlefullstack')}
            text={t('textfullstack')}
            icon={<i className="bi bi-browser-chrome text-[#E01C1C]"></i>}
          />
          <ComponatService
            name={t('titlesaasdash')}
            text={t('textsaasdash')}
            icon={<i className="bi bi-clipboard-check text-[#E01C1C]"></i>}
          />
        </div>

        {/* Colonne droite */}
        <div className='md:w-1/2'>
          <ComponatService
            name={t('titleAuth&secu')}
            text={t('textAuth&secu')}
            icon={<i className="bi bi-shield-check text-[#E01C1C]"></i>}
          />
          <ComponatService
            name={t('titleDevOpDeploy')}
            text={t('textDevOpDeploy')}
            icon={<i className="bi bi-hdd-rack text-[#E01C1C]"></i>}
          />
          <ComponatService
            name={t('titleMentoring')}
            text={t('textMentoring')}
            icon={<i className="bi bi-people text-[#E01C1C]"></i>}
          />
        </div>
      </div>
    </div>
  );
}
