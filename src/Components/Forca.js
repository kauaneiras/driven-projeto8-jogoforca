import { useState } from 'react';
import styled from 'styled-components';
import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';  
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';



export default function Forca(erro) {
  
    const [hangman, setHangman] = useState(forca0)
    
    if (erro === 0) {
        setHangman(forca0)
    } else if (erro === 1) {
        setHangman(forca1)
    } else if (erro === 2) {
        setHangman(forca2)
    } else if (erro === 3) {
        setHangman(forca3)
    } else if (erro === 4) {
        setHangman(forca4)
    } else if (erro === 5) {
        setHangman(forca5)
    } else if (erro === 6) {
        setHangman(forca6)
    }

  return (
    <RenderForca>
        <img src={hangman} alt="hangman" />
    </RenderForca>
  );
}


const RenderForca = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`