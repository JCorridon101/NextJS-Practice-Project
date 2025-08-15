'use client';


import React, {useEffect, useState} from 'react';

export default function FactGenerator() {
    const [fact, setFact] = useState("");

    const generate = async () => {
        try {
            const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
            if (!response.ok) throw new Error("Failed to fetch fact");
            const data = await response.json();
            // The API returns { text: "..." }
            setFact(data.text || "No fact found.");
        } catch (error) {
            setFact("Error fetching fact. Please try again.");
        }
    };

    useEffect(() => {
        generate();
    }, []);

    return (
        <div className="min-h-[75vh] flex flex-col items-center justify-center relative">
            <button
                className="px-5 py-2 text-base mb-5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                onClick={generate}
            >
                Generate Fact
            </button>
            <div className="w-full flex flex-col items-center mt-[200px]">
                <p className="max-w-xl text-center">
                    {fact}
                </p>
            </div>
        </div>
    );
}