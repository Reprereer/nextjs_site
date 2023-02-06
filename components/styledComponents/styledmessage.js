import styled from 'styled-components'

//メッセージのレスポンシブCSS
export const StyledMessage = styled.h3`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.base};
        overflow-wrap: break-word;
        padding-top: 2%;
        padding-bottom: 5%;
        padding-left: 8%;
        padding-right: 8%;
    `}
`

export default StyledMessage;