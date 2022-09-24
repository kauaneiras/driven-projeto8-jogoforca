import styled from "styled-components"
import { useState } from "react"


const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras(){

    
    const [usedletters, setusedletters] = useState([])


    function Clickerd(letra){
        const newusedletters = [...usedletters, letra]
        setusedletters(newusedletters)
        console.log(newusedletters);
        
    }


        return(
        <Container>
            <RenderLetras>
                {alfabeto.map((letra) => {
                    return(
                        <ButtonLetra onClick={()=> Clickerd(letra)}>{letra}</ButtonLetra>
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
    border: 1px solid black;
    background-color: #fff;
    margin: 5px;
    
`
