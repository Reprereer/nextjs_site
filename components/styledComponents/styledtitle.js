import styled from 'styled-components'

//ページの一番上の大きい文字に関するレスポンシブCSS
const StyledTitle = styled.h1`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.xl2};
    `}
    ${({ theme }) => theme.breakpoint.media.ss`
        font-size: ${theme.fonts.size.xl3}
    `}
    ${({theme}) => theme.breakpoint.media.sm`
        font-size: ${theme.fonts.size.xl3};
    `}
    ${({theme}) => theme.breakpoint.media.md`
        font-size: ${theme.fonts.size.xl4};
    `}
    ${({theme}) => theme.breakpoint.media.lg`
        font-size: ${theme.fonts.size.xl4};
    `}
    ${({theme}) => theme.breakpoint.media.xl`
        font-size: ${theme.fonts.size.xl4};
    `}
`

export default StyledTitle;