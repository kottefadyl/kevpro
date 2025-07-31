import React from "react";
type Titleproin = {
    text: string
}

export const Title1: React.FC<Titleproin> = ({ text }) => {
    return (
        <div>
            <h1 className='font-[caprasimo] fond  text-[#B12929] text-3xl text-center'>
                {text}
            </h1>
        </div>
    )
}