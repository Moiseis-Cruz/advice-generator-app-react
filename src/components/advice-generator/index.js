import { useState, useEffect } from "react";

async function createAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice")
    return await response.json()
}

console.log(await createAdvice());

export const Main = () => {

    const [ deck, setDeck ] = useState({slip})

    useEffect(() => {
        async function dataFetch() {
            const adviceId = await createAdvice()

            setDeck()
        }
    })

    return(
        <h1>Título</h1>
    )
}

/* 
.slip.advice
.slip.id
*/