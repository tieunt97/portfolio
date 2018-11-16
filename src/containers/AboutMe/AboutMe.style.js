import styled from 'styled-components';

export const [H1, H2, P] = ["h1", "h2", "p"].map(tag => styled[tag]`
    text-align: ${({ textAlign }) => textAlign ? textAlign : "left"}
    font-size: ${({ fontSize }) => fontSize ? fontSize : "16px"}
`);