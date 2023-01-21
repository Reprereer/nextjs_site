import styled from 'styled-components'

//ホーム画面のタイトルにつけるテキストのCSS
const StyledTitleMessage = styled.h4`
  ${({ theme }) => theme.breakpoint.media.base`
    color: ${theme.colors.black};
    text-align: center;
    font-size: ${theme.fonts.size.base};
  `}
  ${({ theme }) => theme.breakpoint.media.md`
    text-align: left;
  `}
`

export default StyledTitleMessage