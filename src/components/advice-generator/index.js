import { useState, useEffect } from "react";
import ImgDiceButton from "../imgs/icon-dice.svg"
import ImgGreat from "../imgs/pattern-divider-desktop.svg"
import ImgSmall from "../imgs/pattern-divider-mobile.svg"

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
                            <h2>ADVICE #{item.slip.id}</h2>
                            <p>{item.slip.advice}</p>

                            <picture>
                                <source media="(max-width: 375px)" srcSet={ImgSmall} />
                                <img src={ImgGreat} alt="Descrição da imagem" />
                            </picture>

                            <button>
                                <img src={ImgDiceButton} />
                            </button>
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