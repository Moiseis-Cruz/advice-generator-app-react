import { useState } from "react";

async function adviceGenerator() {
    const response = await fetch("https://api.adviceslip.com/advice")
    return await response.json()
}

console.log(await adviceGenerator());

export const Main = () => {

    const [advice, setAdvice ] = useState({})

    return(
        <section>
            <div>
                <h1>ADVICD <span></span> </h1>
                <p></p>
                <img src="" alt="" />
                <button>
                    <img src="" alt="" />
                </button>
            </div>
        </section>
    )
}

/* 
.slip.advice
.slip.id
*/