import React from 'react'
import { Title1 } from '../generalCompo/title1'
import { useTranslations } from 'next-intl';
import { ProjetItem } from './projetcomp/projectcomp';

import devup from "./img/devup.png";
import shift from "./img/shifthouse.png";
import flayer from "./img/Frame1review2.png";
import portfol from "./img/kev-pro.png";
import { Title2 } from '../generalCompo/title2';
import { Testimony } from './projetcomp/testimony';

export default function Recentpr() {
  const t = useTranslations('projet');
  const ts = useTranslations('testimonies');
  return (
    <div className='mt-16 w-11/12 mx-auto 2xl:w-8/12'>
      <Title1 text={t('title0')} />
      <p className='font-[hanuman] md:text-2xl text-center my-12 w-4/5 lg:w-3/6 mx-auto'>
        {t("projettext")}
      </p>

      <div className='grid grid-cols-2  mx-auto'>
        <ProjetItem intitul='Dev-up Solution' type={t('typeprodevup')} date={t('dateprodevup')} text={t('textprojetdevup')} img={devup} />
        <ProjetItem intitul='Shift House' type={t('typeproshift')} date={t('dateproshift')} text={t('textproshift')} img={shift} />
        <ProjetItem intitul='My Portfolio' type={t('typeproportfo')} date={t('dateproportfo')} text={t('textproportfo')} img={portfol} />
        <ProjetItem intitul='Dev-up Solution' type={t('typeproflayer')} date={t('dateproflayer')} text={t('textproflayer')} img={flayer} />
      </div>

      <div className='px-4 w-full mt-32 lg:w-10/12  mx-auto'>
        <Title2 text1={ts('title1')} text2={ts('title2')}/>
        <div className='mx-auto '>
          <Testimony/>
        </div>
      </div>
    </div>
  )
}
