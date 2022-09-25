import { useState } from "react";
import styled from "styled-components";
import Letras from "./Components/Letras";
import Palavras from "./Components/Palavras";
import Chute from "./Components/Chute";
import GlobalStyle from "./GlobalStyle";


//---------   IMPORT IMAGES   ----------\\
import forca0 from './assets/forca0.png';
import forca1 from './assets/forca1.png';
import forca2 from './assets/forca2.png';  
import forca3 from './assets/forca3.png';
import forca4 from './assets/forca4.png';
import forca5 from './assets/forca5.png';
import forca6 from './assets/forca6.png';
//--------------------------------------\\


export default function App() {

  const [usedletters, setusedletters] = useState([])
  const [chooseword, setChooseword] = useState([]);
  const [forca, setForca] = useState(0);
  const [hideword, setHideword] = useState([]);

  function StartGame() {
    setForca(0);
    const randomword = Math.floor(Math.random() * Palavras.length);
    setChooseword(Palavras[randomword].split(""));
    setHideword(Array(Palavras[randomword].length).fill("_"));
}

  function Clicked(letra, j) {
    console.log(letra)
    if (hideword.includes("_") && forca < 6) {
    {const showword = [...hideword];
    const newusedletters = usedletters.includes(letra)? usedletters: [...usedletters, letra];
    setusedletters(newusedletters);
    console.log(newusedletters);
      //substituir _ por letra
    if (chooseword.includes(letra)) {
      for (let i = 0; i < chooseword.length; i++) {
        if (chooseword[i] === letra) {
          //substituir _  do indici i por letra
          showword[i] = letra;
        }
      }
      setHideword(showword);
    } 
    else {setForca(forca + 1); console.log("FORCA", forca)}
  }
}
  else{console.log("Não há palavra para acrescentar letra")}
}

function ChooseForca(){

    if (forca === 0) {
        return <img src={forca0} alt="forca0"/>
    }
    else if (forca === 1) {
        return <img src={forca1} alt="forca1"/>
    }
    else if (forca === 2) {
        return <img src={forca2} alt="forca2"/>
    }
    else if (forca === 3) {
        return <img src={forca3} alt="forca3"/>
    }
    else if (forca === 4) {
        return <img src={forca4} alt="forca4"/>
    }
    else if (forca === 5) {
        return <img src={forca5} alt="forca5"/>
    }
    else if (forca === 6) {
        return <img src={forca6} alt="forca6"/>
    }
    else {
        return <img src={forca6} alt="forca6"/>
    }
}

const forcaa = ChooseForca();

  return (
    <div>
      <AllItensAlignCenter>
        <AlignTopApp>
          <Forca>{forcaa}</Forca>
            <StartGameDiv>
              <BottomSort onClick={StartGame}>Sortear Palavra</BottomSort>
              <SortWordH1>{hideword}</SortWordH1>
            </StartGameDiv>
        </AlignTopApp>
        <Letras clicked = {Clicked} usedletters={usedletters}/>
        <Chute/>
      </AllItensAlignCenter>
    </div>
  );
}

const AllItensAlignCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const AlignTopApp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const BottomSort = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #39739D;
  margin: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #39739D;
  background-color: #E1ECF4;
`

const StartGameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SortWordH1 = styled.h1`
  font-size: 50px;
  font-weight: 600;
  color: #39739D;
  letter-spacing: 0.1em;
  margin-top: 100px;
`

const Forca = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 300px;
   
    img{
        width: 400px;
        height: 100%;
    }
`