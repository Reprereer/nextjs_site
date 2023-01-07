import { useMail } from './hooks/useMail'
import Layout from '../components/layout'

function Contact() {
    const { setName, setMessage, send } = useMail()
    return (
        <>
        <Layout>
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <textarea onChange={(e) => setMessage(e.target.value)} />
            <button type="button" onClick={send}>Send</button>
        </div>
        </Layout>
        </>
    )
}

export default Contact