import styled from 'styled-components'

//投稿リストに関するCSS
const StyledPostlist = styled.div`
    ${({ theme }) => theme.breakpoint.media.base`
        text-align: center;
        background: #ffffff;
        margin-right: 20px;
    `}
`

export default StyledPostlist;