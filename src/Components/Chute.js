import {useState} from 'react';
import styled from "styled-components"

export default function Chute(props){

    return (
        <Container>
            <Chutetext>Já sei a palavra!</Chutetext>
            <ChuteInput data-identifier="type-guess" placeholder="Chute uma palavra" value={props.chute}onChange={(event) => props.writeguess(event.target.value)}></ChuteInput>
            <ChuteButton data-identifier="guess-button" onClick={props.tryanswer}>Chutar</ChuteButton>
        </Container>
    )
}

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