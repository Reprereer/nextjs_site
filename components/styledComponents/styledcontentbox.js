import styled from 'styled-components'

//カラムが入るところに関するレスポンシブCSS
const StyledContentBox = styled.div`
    ${({ theme }) => theme.breakpoint.media.base`
        display: flex;
        gap: 5%;
        padding-bottom: 1%;
        padding-left: 5%;
        padding-right: 6%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `}
    ${({ theme }) => theme.breakpoint.media.md`
        flex-direction: row;
    `}
`

export default StyledContentBox