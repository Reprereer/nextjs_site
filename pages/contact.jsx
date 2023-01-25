import { useMail } from './hooks/useMail'
import Layout from '../components/layout'
import Head from 'next/head'
import StyledHeadline from '../components/styledComponents/styledheadline'
import StyledContact from '../components/styledComponents/styledcontact'
import styles from '../styles/Modal.module.css'

//問い合わせページ
function Contact() {
    const { setName, setMessage, send } = useMail()
    return (
        <>
        <Layout>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Contact page for Fictionaire.net" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <StyledHeadline>Contact</StyledHeadline>
        <StyledContact>
            Enter your Name.<br />
            <input type="text" onChange={(e) => setName(e.target.value)} /><br />
            Enter your Request.<br />
            <textarea onChange={(e) => setMessage(e.target.value)} /><br />
            <button type="button" onClick={send} className={styles.btnborderopen}>Send</button>
        </StyledContact>
        </Layout>
        </>
    )
}

export default Contact