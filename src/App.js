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
  const [guess, setGuess] = useState("");
  const [win, setWin] = useState("blue");
  const [noSpecial, setNoSpecial] = useState("blue");


  console.log(guess)


  function StartGame() {
    setWin("blue");
    setusedletters([]);
    setForca(0);
    setGuess("");
    const randomword = Math.floor(Math.random() * Palavras.length);
    setChooseword(Palavras[randomword].split(""));
    setNoSpecial(Palavras[randomword].normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
    setHideword(Array(Palavras[randomword].length).fill("_"));
  }

  function Clicked(letra) {
    console.log(letra)
    if (hideword.includes("_")) {
      if (forca < 6) {
        const showword = [...hideword];
        const newusedletters = usedletters.includes(letra) ? usedletters : [...usedletters, letra];
        setusedletters(newusedletters);
        console.log(newusedletters);

        if (noSpecial.includes(letra)) {

          for (let i = 0; i < noSpecial.length; i++) {
            if (noSpecial[i] === letra) {
              showword[i] = chooseword[i];
            }
          }

          setHideword(showword);
        }
        else if (!chooseword.includes(letra)) { setForca(forca + 1); console.log("FORCA", forca) }
      }
    }
  }

  function Tryanswer() {
    if (guess === "") {
      alert("Escreva algo");
    } else if (guess === noSpecial) {
      setWin("green");
      setHideword([...chooseword]);
      setGuess("");
    } else {
      setForca(6);
      setWin("red");
      setHideword([...chooseword]);
      setGuess("");
    }
  }

  function ChooseForca() {

    if (forca === 0) {
      return <img src={forca0} data-identifier="game-image" alt="forca0" />
    }
    else if (forca === 1) {
      return <img src={forca1} data-identifier="game-image" alt="forca1" />
    }
    else if (forca === 2) {
      return <img src={forca2} data-identifier="game-image" alt="forca2" />
    }
    else if (forca === 3) {
      return <img src={forca3} data-identifier="game-image" alt="forca3" />
    }
    else if (forca === 4) {
      return <img src={forca4} data-identifier="game-image" alt="forca4" />
    }
    else if (forca === 5) {
      return <img src={forca5} data-identifier="game-image" alt="forca5" />
    }
    else if (forca === 6) {
      return <img src={forca6} data-identifier="game-image" alt="forca6" />
    }
    else {
      return <img src={forca6} data-identifier="game-image" alt="forca6" />
    }
  }

  function SetColorWord() {
    if (forca > 5) {
      return "red";
    } else if (forca < 6 && hideword.includes("_")) {
      return "blue";
    } else if (forca < 6 && !hideword.includes("_")) {
      return "green";
    }
  }

  const forcaa = ChooseForca();
  const colorword = SetColorWord();



  return (
    <div>
      <AllItensAlignCenter>
        <AlignTopApp>
          <Forca>{forcaa}</Forca>
          <StartGameDiv>
            <BottomSort onClick={StartGame} forca={forca} data-identifier="choose-word">{(forca < 6) ? "Escolher Palavra" : "Reiniciar Jogo"}</BottomSort>
            <SortWordH1 data-identifier="word" forca={forca} style={{ color: `${colorword}` }}>{(forca < 6) ? hideword : chooseword}</SortWordH1>
          </StartGameDiv>
        </AlignTopApp>
        <Letras clicked={Clicked} usedletters={usedletters} />
        <Chute writeguess={setGuess} tryanswer={Tryanswer} guess={guess} />
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
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 40px;
`
const Chutetext = styled.p`
    font-size: 20px;
    font-weight: 200;
    color: black;
    margin: 0px;
    margin-right: 10px;
`
const ChuteInput = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #39739D;
`
const ChuteButton = styled.button`
    width: 80px;
    height: 35px;
    color: #39739D;
    border-radius: 5px;	
    background-color: #E1ECF4;
    border: 1px solid #39739D;
    margin-left: 10px;
`