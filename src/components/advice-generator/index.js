import { useState, useEffect } from "react";

async function createAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice")
    return await response.json()
}

export const Main = () => {

    const [ deck, setDeck ] = useState({slip: []})

    useEffect(() => {
        async function dataFetch() {
            const adviceId = await createAdvice()

            setDeck({slip: [adviceId]})
        }
        dataFetch()
    }, [])

    return(
        <section>
            {
                deck.slip.map((item, index) => {
                    return(
                        <div key={index}>
                            <h2>{item.slip.id}</h2>
                            <p>{item.slip.advice}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}

/* 
.slip.advice
.slip.id
*/