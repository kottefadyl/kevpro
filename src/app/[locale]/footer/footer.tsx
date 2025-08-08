import React from 'react'

export default function Footer() {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto mt-36 pb-20'>
            <span className='h-[2px] w-full bg-neutral-500 rounded-full block' />
            <div className='font-[hanuman] flex justify-between mt-5'>
                <div className='block gap-2'>
                    <span><i className="bi bi-c-circle"></i></span>
                    <span>Copyright Kevine 2022 </span>
                    <br className='block md:hidden' /><span className='text-neutral-500'>design by</span>
                    <span> styleshout </span>
                    <br className='block md:hidden' /><span className='text-neutral-500'>Distrubution By </span>
                    <span> Themewagon </span></div>
                <div className='cursor-pointer'>
                    <span className='px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-50 '>
                        <i className="bi bi-arrow-up text-neutral-900 dark:text-neutral-50"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}
