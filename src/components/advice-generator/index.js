import { useState, useEffect } from "react";

async function adviceGenerator() {
    const response = await fetch("https://api.adviceslip.com/advice")
    const teste = await response.json()
    return teste.slip
}

console.log(await adviceGenerator());

export const Main = () => {

    const [advice, setAdvice ] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const datos = await adviceGenerator()

            setAdvice({datos})
        }
        fetchData()
    },[])

    return(
        <section>
            {
                
            }
        </section>
    )
}

/* 
.slip.advice
.slip.id
*/