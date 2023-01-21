import ModalLicense from './modal'
import StyledMessage from './styledComponents/styledmessage'

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