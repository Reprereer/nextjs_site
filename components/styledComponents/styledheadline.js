import styled from 'styled-components'

//見出しのレスポンシブCSS
const StyledHeadline = styled.h2`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.xl};
    `}
    ${({theme}) => theme.breakpoint.media.md`
        font-size: ${theme.fonts.size.xl2};
    `}
    ${({theme}) => theme.breakpoint.media.lg`
        font-size: ${theme.fonts.size.xl3};
    `}
    ${({theme}) => theme.breakpoint.media.xl`
        font-size: ${theme.fonts.size.xl3};
    `}
`

export default StyledHeadline;