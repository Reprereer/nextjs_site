import Modal from 'react-modal'
import { useState } from 'react'

//Modal自体のオーバーレイとコンテンツの表示についての設定
const customStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(255, 255, 255, 0.75)"
    },

    content : {
        top     :'50%',
        left    :'50%',
        right   :'auto',
        bottom  :'auto',
        marginRight:'-50%',
        width   :'500px',
        height  :'300px',
        border: '1px solid #ccc',
        transform:'translate(-50%, -50%)',
        borderRadius: '20px',
        outline: 'none',
        padding: '10px',
    
    }
};

Modal.setAppElement('#__next')

//React-modalを用いたModalメニューの実装.ポップアップウィンドウ的なやつ
const ModalMenu = () => {
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const afterOpenModal = () => {

    }

    const closeModal = () => {
        setIsOpen(false)
    }

//buttonの設定はCSSで行う
    return (
        <>
        <button onClick={openModal}>Licence</button> 
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            >
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
            </Modal>
        </>
    )
}

export default ModalMenu