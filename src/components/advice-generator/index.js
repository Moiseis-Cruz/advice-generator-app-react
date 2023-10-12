async function createAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice")
    return await response.json()
}

console.log(await createAdvice());

export const Main = () => {
    return(
        <h1>Título</h1>
    )
}

/* 
.slip.advice
.slip.id
*/