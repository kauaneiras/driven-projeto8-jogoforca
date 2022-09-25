import { useState } from "react";
import styled from "styled-components";
import Letras from "./Components/Letras";
import Palavras from "./Components/Palavras";
import Chute from "./Components/Chute";
import GlobalStyle from "./GlobalStyle";


//---------   IMPORT IMAGES   ----------\\
import forca0 from './assets/forca0.png'; // 0 erros
import forca1 from './assets/forca1.png'; // 1 erro
import forca2 from './assets/forca2.png'; // 2 erros
import forca3 from './assets/forca3.png'; // 3 erros
import forca4 from './assets/forca4.png'; // 4 erros
import forca5 from './assets/forca5.png'; // 5 erros
import forca6 from './assets/forca6.png'; // 6 erros
//--------------------------------------\\


export default function App() {

  const [usedletters, setusedletters] = useState([]) //a cada vez que uma letra é usada, adiciono nesse array
  const [chooseword, setChooseword] = useState([]); // esse array armazena a palavra aleatória escolhida, vindo do vetor Palavras, que foi importado
  const [forca, setForca] = useState(0); // armazena um numero que vai ser usado para mostrar a imagem da forca correspondente ao número
  const [hideword, setHideword] = useState([]); // esse array armazena "_" para cada letra da palavra escolhida, e vai sendo substituido pelas letras certas

  function StartGame() {
    setForca(0); // coloca o numero da forca em 0 (imagem da forca vazia)
    const randomword = Math.floor(Math.random() * Palavras.length); // sorteia uma palavra aleatória do vetor Palavras
    setChooseword(Palavras[randomword].split("")); // cria um array com cada letra da palavra sorteada. Se a palavra é "RATO", o array vai ser ["R", "A", "T", "O"]. isso devido ao método split
    setHideword(Array(Palavras[randomword].length).fill("_"));// O método .fill, pega o tamanho da palavra sorteada e cria um array com "_" para cada letra da palavra. Se a palavra é "RATO", o array vai ser ["_", "_", "_", "_"]
}

function Clicked(letra, j) { // essa função é chamada quando uma letra é clicada
    console.log(letra) // mostra no console a letra clicada
    if (hideword.includes("_") && forca < 6) { // se a palavra ainda não foi descoberta e a forca ainda não está completa
    {const showword = [...hideword]; // cria um novo array com o conteúdo do array hideword. os "..." são usados para criar um novo array atualizando o conteúdo do array anterior
    const newusedletters = usedletters.includes(letra)? usedletters: [...usedletters, letra]; // se a letra clicada já foi usada, o array newusedletters recebe o array usedletters. Se a letra clicada não foi usada, o array newusedletters recebe o array usedletters com a letra clicada adicionada
    setusedletters(newusedletters); // atualiza o array usedletters, setando o valor de newusedletters dentro de usedletters
    console.log(newusedletters); // mostra no console o array newusedletters

    if (chooseword.includes(letra)) {// se a letra clicada está na palavra sorteada
      for (let i = 0; i < chooseword.length; i++) { // percorre o array chooseword
        if (chooseword[i] === letra) { // se a letra clicada é igual a letra do array chooseword, pega o indice e substitui o "_" correspondente no array showword
          showword[i] = letra; // substitui o "_" pela letra correspondente no array showword
        }
      }
      setHideword(showword);// atualiza o array hideword, setando o valor de showword dentro de hideword
    } 
    else {setForca(forca + 1); console.log("FORCA", forca)}// se a letra clicada não está na palavra sorteada, atualiza o numero da forca, adicionando +1 ao valor anterior
  }
}
  else{console.log("Não há palavra para acrescentar letra")} // se a palavra já foi descoberta ou a forca está completa, mostra no console "Não há palavra para acrescentar letra"
}

function ChooseForca(){ // essa função é chamada para mostrar a imagem da forca correspondente ao numero da forca

    if (forca === 0) { // se o numero da forca é 0, mostra a imagem da forca vazia
        return <img src={forca0} alt="forca0"/>
    }
    else if (forca === 1) { // se o numero da forca é 1, mostra a imagem da forca com 1 erro
        return <img src={forca1} alt="forca1"/>
    }
    else if (forca === 2) { // se o numero da forca é 2, mostra a imagem da forca com 2 erros
        return <img src={forca2} alt="forca2"/>
    }
    else if (forca === 3) { // se o numero da forca é 3, mostra a imagem da forca com 3 erros
        return <img src={forca3} alt="forca3"/>
    }
    else if (forca === 4) { // se o numero da forca é 4, mostra a imagem da forca com 4 erros
        return <img src={forca4} alt="forca4"/>
    }
    else if (forca === 5) { // se o numero da forca é 5, mostra a imagem da forca com 5 erros
        return <img src={forca5} alt="forca5"/>
    }
    else if (forca === 6) { // se o numero da forca é 6, mostra a imagem da forca com 6 erros
        return <img src={forca6} alt="forca6"/>
    }
    else { // se o numero da forca é maior que 6, mostra a imagem da forca com 6 erros
        return <img src={forca6} alt="forca6"/>
    }
}

const forcaa = ChooseForca(); // chama a função ChooseForca e armazena o resultado na constante forcaa

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