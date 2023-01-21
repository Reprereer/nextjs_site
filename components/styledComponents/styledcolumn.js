import styled from 'styled-components'

//カラムの位置設定に関するレスポンシブCSS
const StyledColumn = styled.div`
    ${({ theme }) => theme.breakpoint.media.base`
        width: 100%;
        min-height: 12rem;
    `}
    ${({ theme }) => theme.breakpoint.media.md`
        width: 50%;
        position: relative;
        min-height: 12rem;
    `}
`

export default StyledColumn 