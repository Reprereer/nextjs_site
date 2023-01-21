import styled from 'styled-components'

//小見出しに関するレスポンシブCSS
const StyledHeadlineSmall = styled.h3`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.lg};
    `}
    ${({ theme }) => theme.breakpoint.media.md`
        font-size: ${theme.fonts.size.xl};
    `}
    ${({ theme }) => theme.breakpoint.media.lg`
        font-size: ${theme.fonts.size.xl};
    `}
    ${({ theme }) => theme.breakpoint.media.xl`
        font-size: ${theme.fonts.size.xl2};
    `}
`

export default StyledHeadlineSmall