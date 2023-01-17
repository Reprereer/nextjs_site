import ModalMenu from './modal'
import styled from 'styled-components'
//画面下部。コピーライトやライセンス表示ボタンを置く
const Footer = () => {
    return (
        <footer>
            <StyledFooter>copyright by Fictionaire.</StyledFooter>
        <ModalMenu />
        </footer>
    )
}

export default Footer

export const StyledFooter = styled.h4`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.base};
    `}
`