import styled from "styled-components";
import Forca from "./Components/Forca";
import Letras from "./Components/Letras";
import Palavras from "./Components/Palavras";
import Chute from "./Components/Chute";
import GlobalStyle from "./GlobalStyle";

export default function App() {
  return (
    <div>
      <AllItensAlignCenter>
        <AlignTopApp>
          <Forca/>
        </AlignTopApp>
        <Letras/>
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
`;

const AlignTopApp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;