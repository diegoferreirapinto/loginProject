import { styled } from "styled-components";



export const MainStyled = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
`

export const AppStyled = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    max-width: 500px;
    border: 1px solid mediumblue;
    margin: auto;
    overflow-y: auto;
`;

export const HeaderStyled = styled.header`
    width: 100%;
    padding: 0 0.25em;
    background-color: mediumblue;
    color: aliceblue;
    display: flex;
    justify-content: space-between;
    align-items:center;
`
export const FooterStyled = styled.footer`
    width: 100%;
    padding: 0.25em;
    background-color: mediumblue;
    color: aliceblue;
    display: grid;
    place-content: center;
`


