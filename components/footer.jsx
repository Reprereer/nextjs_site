import ModalLicense from './modal'
import styled from 'styled-components'
//画面下部。コピーライトやライセンス表示ボタンを置く
const Footer = () => {
    return (
        <footer>
            <StyledMessage>copyright by Fictionaire.</StyledMessage>
        <ModalLicense />
        </footer>
    )
}

export default Footer

export const StyledMessage = styled.h4`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.base};
    `}
`
