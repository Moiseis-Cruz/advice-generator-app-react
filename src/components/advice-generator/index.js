import { useState, useEffect } from "react";
import ImgDiceButton from "../imgs/icon-dice.svg"
import ImgGreat from "../imgs/pattern-divider-desktop.svg"
import ImgSmall from "../imgs/pattern-divider-mobile.svg"
import styled from "styled-components";

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
        <Section>
            {
                deck.slip.map((item, index) => {
                    return(
                        <Card key={index}>
                            <h2>ADVICE #{item.slip.id}</h2>
                            <p>{item.slip.advice}</p>

                            <picture>
                                <source media="(max-width: 375px)" srcSet={ImgSmall} />
                                <img src={ImgGreat} alt="Descrição da imagem" />
                            </picture>

                            <button>
                                <img src={ImgDiceButton} />
                            </button>
                        </Card>
                    )
                })
            }
        </Section>
    )
}

const Section = styled.section`
    max-width: 1440px;
    height: 100vh;
    margin: 0 auto;
    background-Color: #1F2632;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Card = styled.div`
    max-width: 540px;
    width: 100%;
    height: 332px;
    border-radius: 15px;
    background-color: #323A49;
    display: flex;
    flex-direction: column;
    align-items: center;
`