import React, { useState, useEffect} from 'react'

export default function useScrollProgress() {
    const [ completion, setCompletion ] = useState(0);

    useEffect(() => {
        const updateScrollCompeletion = () => {
            const currentProgress = window.screenY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if(scrollHeight){
                setCompletion(Number(currentProgress/scrollHeight).toFixed(2) * 100);
            }
        };

        window.addEventListener('scroll', updateScrollCompeletion);
        
        return () => window.removeEventListener('scroll', updateScrollCompeletion);
    }, []);

    return completion;
}