import styled from 'styled-components'

//最大サイズのタイトル文字用レスポンシブCSS
const StyledTitleBig = styled.h1`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.xl};
    `}
    ${({ theme }) => theme.breakpoint.media.ss`
        font-size: ${theme.fonts.size.xl3}
    `}
    ${({theme}) => theme.breakpoint.media.sm`
        font-size: ${theme.fonts.size.xl4};
    `}
    ${({theme}) => theme.breakpoint.media.md`
        font-size: ${theme.fonts.size.xl5};
    `}
    ${({theme}) => theme.breakpoint.media.lg`
        font-size: ${theme.fonts.size.xl6};
    `}
    ${({theme}) => theme.breakpoint.media.xl`
        font-size: ${theme.fonts.size.xl7};
    `}
`

export default StyledTitleBig