import React from "react";
type Titleproin = {
    text1: string;
    text2: string
}

export const Title2: React.FC<Titleproin> = ({ text1, text2 }) => {
    return (
        <div>
            <h1 className='font-[caprasimo] mb-15'><span className='text-[#B12929] text-2xl'>{text1}</span> <span>{text2}</span></h1>
        </div>
    )
}