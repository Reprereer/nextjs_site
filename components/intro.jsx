import styled from 'styled-components'

//タイトル部分
const Intro = () => {
  
    return (
        <StyledTitleBox>
        <StyledTitle>
          Fictionaire.
        </StyledTitle>
        <StyledMessage>
        The characters and events depicted in this site are fictitious. Any similarity to actual persons, living or dead, is purely coincidental.
        </StyledMessage>    
        </StyledTitleBox>
    )
  }

export default Intro

const StyledTitle = styled.h1`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.xl};
    `}
    ${({ theme }) => theme.breakpoint.media.ss`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.xl3}
    `}
    ${({theme}) => theme.breakpoint.media.sm`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.xl4};
    `}
    ${({theme}) => theme.breakpoint.media.md`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.xl5};
    `}
    ${({theme}) => theme.breakpoint.media.lg`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.xl6};
    `}
    ${({theme}) => theme.breakpoint.media.xl`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.xl7};
    `}
`

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
    display: flex;
    gap: 10%;
    padding-bottom: 1%;
    padding-left: 4%;
    padding-right: 5%;
    align-items: center;
    grid-area: content;
    justify-content: center;
    flex-direction: column;
  `}
  ${({ theme }) => theme.breakpoint.media.sm`
    display: flex;
    flex: auto;
    gap: 10%;
    padding-bottom: 1%;
    padding-left: 5%;
    padding-right: 6%;
    align-items: center;
    grid-area: content;
    justify-content: center;
    flex-direction: column;
  `}
  ${({ theme }) => theme.breakpoint.media.md`
    display: flex;
    flex: auto;
    padding-bottom: 1%;
    padding-left: 9%;
    padding-right: 10%;
    align-items: center;
    grid-area: content;
    justify-content: center;
    flex-direction: row;
  `}
  ${({theme}) => theme.breakpoint.media.lg`
    display: flex;
    flex: auto;
    padding-bottom: 1%;
    padding-left: 10%;
    padding-right: 11%;
    align-items: center;
    grid-area: content;
    justify-content: center;
    flex-direction: row;
  `}
  ${({theme}) => theme.breakpoint.media.xl`
    display: flex;
    flex: auto;
    padding-bottom: 1%;
    padding-left: 11%;
    padding-right: 12%;
    align-items: center;
    grid-area: content;
    justify-content: center;
    flex-direction: row;
  `}
`

const StyledMessage = styled.h4`
  ${({ theme }) => theme.breakpoint.media.base`
    color: ${theme.colors.black};
    text-align: center;
    font-size: ${theme.fonts.size.base};
  `}
  ${({ theme }) => theme.breakpoint.media.md`
    color: ${theme.colors.black};
    text-align: left;
    font-size: ${theme.fonts.size.base};
  `}
`