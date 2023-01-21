import styled from 'styled-components'

//投稿のリストに対するCSS
const StyledPosts = styled.div`
    ${({ theme }) => theme.breakpoint.media.base`
        padding-bottom: 1%;
    `}
`

export default StyledPosts;