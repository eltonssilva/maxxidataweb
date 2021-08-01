import styled from 'styled-components';

export const ListUserSyles = styled.div`
    background-color: gainsboro;
    border-radius: 0px;
    height: 75px;
    width: 90%;
    margin-left: 5%;
    margin-block-start: 0px;
    margin-block-end: 15px;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    flex-direction: row;
`;

export const Icon = styled.div`
    height: 60px;
    width: 60px;
`;

export const ImgIcon = styled.img`
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
`;

export const NomeUser = styled.div`
    width: 170px;
    font-weight: bold;
    flex-direction: column;
    align-content:center;
`;

export const NomeEmpresa = styled.div`
    width:170px; 
    font-weight: bold;
    align-content: center;
`;

export const UserDados = styled.div`
    width: 100px;
    font-weight: bold;
`;



export const rootElement = document.getElementById("root");