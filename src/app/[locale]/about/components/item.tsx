import React, { useState } from "react";

type Itemprop = {
    intitul: string;
    titrposte: string;
    date: string;
    text: string;
};

export const Item: React.FC<Itemprop> = ({ intitul, titrposte, date, text }) => {
    const [showFullText, setShowFullText] = useState(false);

    return (
        <div className="font-[hanuman] flex mb-14 ">
            <span className="m-3 p-2 bg-[#E01C1C] h-4 w-4 rounded-full"></span>
            <div>
                <h1 className="text-[#E01C1C] text-xl font-bold my-2">{intitul}</h1>
                <h2 className="font-semibold text-lg my-2">{titrposte}</h2>
                <span className="text-[#565353] my-2 block">{date}</span>
                
                <p className={`my-2 text-justify ${!showFullText ? "line-clamp-6" : ""}`}>
                    {text}
                </p>

                {text.split(" ").length > 40 && (
                    <button
                        className="text-[#E01C1C] underline text-sm"
                        onClick={() => setShowFullText(!showFullText)}
                    >
                        {showFullText ? "seen" : "Plus"}
                    </button>
                )}
            </div>
        </div>
    );
};
