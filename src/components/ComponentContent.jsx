import { MainStyled } from "../ComponentesEstilizados"

export function ComponentContent(props) {
    const text = props.texto

    return(
        <MainStyled>
            {text}
        </MainStyled>
    )
}