import styled from 'styled-components'

//通常テキストに関するCSS
const StyledText = styled.h4`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.base};
        overflow-wrap: break-word;
        padding-bottom: 1%;
        padding-left: 7%;
        padding-right: 8%;
    `}
`

export default StyledText