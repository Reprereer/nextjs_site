import Modal from 'react-modal'
import { useState } from 'react'
import styles from '../styles/Modal.module.css'

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
const ModalLicense = () => {
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
        <button className={styles.btnborderopen} onClick={openModal}>Licence</button> 
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            >
                <h3>These are package developers who developed packages used in this site. Many thanks.</h3>
                <h3>Copyright (c) 2023 Vercel, Inc.</h3>
                <h3>Copyright (c) 2017 Ryan Florence</h3>
                <h3>Copyright (c) Meta Platforms, Inc. and affiliates.</h3>
                <h3>Copyright (c) 2016-present Glen Maddern and Maximilian Stoiber</h3>
                <h3>Copyright (c) 2015 Imogen Wentworth</h3>
                <h3>Copyright (c) 2020 tjallingt</h3>
                <h3>Copyright (c) 2021 Sasha Koss and Lesha Koss https://kossnocorp.mit-license.org</h3>
                <h3>Copyright (c) 2014-2018, Jon Schlinkert.</h3>
                <h3>Copyright (c) 2014-2020 Titus Wormer (tituswormer@gmail.com)</h3>
                <h3>Copyright (c) 2011-2014, Christopher Jeffrey (https://github.com/chjj/)</h3>
                <h3>Copyright (c) 2015 Titus Wormer</h3>
                <h3>Copyright © 2022 Zac Anger</h3>
                <h3>Copyright (c) 2011-2019 Andris Reinman</h3>
                <h3>Copyright (c) 2018 Framer B.V.</h3>
                <h4>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</h4>
                <h4>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</h4>
                <h4>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</h4>
                <h3>Copyright (c) 2015, Scott Motte All rights reserved.</h3>
                <h4>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</h4>
                <h4>* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.</h4>
                <h4>* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</h4>
                <h4>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</h4>
                <button className={styles.btnborderclose} onClick={closeModal}>close</button>
            </Modal>
        </>
    )
}

export default ModalLicense