import styled from 'styled-components'

//画像に関するレスポンシブCSS
export const StyledImage = styled.div`
    ${({ theme }) => theme.breakpoint.media.base`
    `}
    ${({ theme }) => theme.breakpoint.media.ss`
        transform: scale(1.25)
    `}
    ${({ theme }) => theme.breakpoint.media.md`
        transform: scale(1.25)
    `}
    ${({ theme }) => theme.breakpoint.media.lg`
        transform: scale(1.375)
    `}
    ${({ theme }) => theme.breakpoint.media.xl`
        transform: scale(1.5)
    `}
`

export default StyledImage