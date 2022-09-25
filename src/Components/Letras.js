import styled from "styled-components"
import { useState } from "react"


const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras(){

    
    const [usedletters, setusedletters] = useState([])


    function Clicked(letra){

        const newusedletters = usedletters.includes(letra)?usedletters: [...usedletters, letra];
        setusedletters(newusedletters);
        console.log(newusedletters);
        
    }


        return(
        <Container>
            <RenderLetras>
                {alfabeto.map((letra, i) => {
                    return(
                        <ButtonLetra onClick={()=> Clicked(letra)} isClicked={usedletters.includes(letra)} key={i}>{letra}</ButtonLetra>
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
