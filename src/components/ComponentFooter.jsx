import { FooterStyled } from "../ComponentesEstilizados"

export function ComponentFooter() {
    let year = new Date()
    return (
        <FooterStyled>
            <p>
                Copyright @ {year.getFullYear()}
            </p>
        </FooterStyled>   
    )
}