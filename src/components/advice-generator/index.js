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
                            <Title>ADVICE #{item.slip.id}</Title>
                            <Advice>{item.slip.advice}</Advice>

                            <picture>
                                <source media="(max-width: 375px)" srcSet={ImgSmall} />
                                <img src={ImgGreat} alt="Descrição da imagem" />
                            </picture>

                            <Button>
                                <img src={ImgDiceButton} />
                            </Button>
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
    position: relative;
`

const Title = styled.h2`
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 3.5px;
    color: #52FFA8;
    margin-top: 47px;
`

const Advice = styled.p`
    color: #CEE3E9;
    text-align: center;
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.28px;
    max-width: 437px;
    width: 100%;
    height: 124px;
    margin-top: 24px;
`

const Button = styled.button`
    background-color: #52FFA8;
    position: absolute;
    bottom: -32px;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`