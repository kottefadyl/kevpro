import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import image1 from "./img/img-about.png"
import { ComponentB } from './components/componentB';
import { languages, frameWorkTool, other } from './components/skillsTable'
import ResumeSection from './components/resumesection'
import { Title1 } from '../generalCompo/title1';
import { Title2 } from '../generalCompo/title2';

export default function About() {
    const t = useTranslations('about');
    return (
        <div className='w-11/12 md:w-8/12 mx-auto mt-44 pb-10'>

            <div className='lg:flex md:justify-center items-center lg:gap-5'>
                <div className='lg:w-2/4 w-full text-center '>
                    <Title1 text={t('title')} />
                    <p className='font-[hanuman] text-lg mt-10'>
                        {t('text')}
                    </p>

                    <a href="/files/A4CVKotte-1.pdf" download>
                        <button className='
        rounded-xs font-[gloock] bg-[#B12929] text-white lg:h-10 h-16 w-72 text-sm mt-12 
        hover:bg-neutral-200 cursor-pointer hover:text-black duration-200
    '>
                            {t('button')}
                        </button>
                    </a>
                </div>
                <div className='lg:w-2/4  w-full items-center '>
                    <Image
                        className='h-[26rem] w-[26rem] rounded-xl  mx-auto mt-12'
                        src={image1}
                        alt='image1'
                    />
                </div>
            </div>

            <div className='mt-28'>
                <Title2 text1={t('experience1')} text2={t('experience2')} />
                <p className='font-[inknut_Antiqua] text-3xl font-bold mt-10'>
                    {t('text2')}.
                </p>
            </div>

            <div className='mt-56 mb-32 text-center'>
                <Title2 text1={t('softskill1')} text2={t('softskill2')} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
                <ComponentB title={t('cardTitle1')} data={languages} />
                <ComponentB title={t('cardTitle2')} data={frameWorkTool} />
                <ComponentB title={t('cardTitle3')} data={other} />
            </div>

            <div>
                <ResumeSection />
            </div>

        </div>
    )
}
