import styled from "styled-components"

export const ButtonClick = (props) => {
    return(
        <Button {...props} />
    )
}

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