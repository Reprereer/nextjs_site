import StyledTitleMessage from './styledComponents/styledtitlemessage'
import StyledTitleBox from './styledComponents/styledtitlebox'
import StyledTitleBig from './styledComponents/styledtitlebig'

//タイトル部分
const Intro = () => {
  
    return (
        <StyledTitleBox>
        <StyledTitleBig>
          Fictionaire.
        </StyledTitleBig>
        <StyledTitleMessage>
        The characters and events depicted in this site are fictitious. Any similarity to actual persons, living or dead, is purely coincidental.
        </StyledTitleMessage>    
        </StyledTitleBox>
    )
  }

export default Intro


