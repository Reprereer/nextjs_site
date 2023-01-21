import styled from 'styled-components'

//Link画像とリストに関するレスポンシブCSS
const StyledLinker = styled.div`
    ${({ theme }) => theme.breakpoint.media.base`
        display: flex;
        color:${theme.colors.black};
        align-items:center;
        flex-direction: column;
        column-gap: 5%;
        row-gap: 5%;
        padding-bottom: 4%;
    `}
    ${({ theme }) => theme.breakpoint.media.md`
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5%;
    `}
`

export default StyledLinker