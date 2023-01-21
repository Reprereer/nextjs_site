import styled from 'styled-components'

//通常テキストに関するCSS
const StyledContentText = styled.h4`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: left;
        font-size: ${theme.fonts.size.base};
    `}
`

export default StyledContentText