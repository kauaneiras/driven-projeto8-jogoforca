import styled from "styled-components"
import { useState } from "react"


const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras(props){ //props = clickLetra (função) e letrasClicadas (array)
    //clickLetra = função que recebe a letra clicada, essa função está no App.js	
    //letrasClicadas = array que contém as letras que já foram clicadas, esse array está no App.js
    //se a letra clicada estiver no array letrasClicadas, ela receberá cor diferente dentro do componente <ButtonLetra>

        return(
        <Container>
            <RenderLetras>
                {alfabeto.map((letra, j) => {
                    
                    return(
                        <ButtonLetra onClick={(() => props.clicked(letra, j))} isClicked={props.usedletters.includes(letra)} key={j}>{letra}</ButtonLetra>
                    )
                })}
            </RenderLetras>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 800px;
`

const RenderLetras = styled.div`
    display: flex;
    justify-content: center;    
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`
const ButtonLetra = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: ${props => props.isClicked ? "1px solid #798595" : "1px solid #39739D"};
    margin: 5px;
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.isClicked ? "#798595" : "#39739D"};
    background-color: ${(props) => props.isClicked === true ? "#9FAAB5" : "#E1ECF4"};
    
`
