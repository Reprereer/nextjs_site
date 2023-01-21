import styled from 'styled-components'

//タイトルとメッセージに関するレスポンシブCSS
const StyledTitleBox = styled.div`
  ${({ theme }) => theme.breakpoint.media.base`
    display: flex;
    gap: 10%;
    padding-bottom: 1%;
    padding-left: 3%;
    padding-right: 4%;
    align-items: center;
    grid-area: content;
    justify-content: center;
    flex-direction: column;
  `}
  ${({ theme }) => theme.breakpoint.media.ss`
    padding-left: 4%;
    padding-right: 5%;
  `}
  ${({ theme }) => theme.breakpoint.media.sm`
    padding-left: 5%;
    padding-right: 6%;
  `}
  ${({ theme }) => theme.breakpoint.media.md`
    padding-left: 9%;
    padding-right: 10%;
    flex-direction: row;
  `}
  ${({theme}) => theme.breakpoint.media.lg`
    padding-left: 10%;
    padding-right: 11%;
  `}
  ${({theme}) => theme.breakpoint.media.xl`
    padding-left: 11%;
    padding-right: 12%;
  `}
`

export default StyledTitleBox