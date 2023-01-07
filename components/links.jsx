import Image from 'next/image'

//アイコン押したらリンクに飛ぶ
const Links = () => {
    return (
        <section>
                <h2>Links</h2>
                <p>
				<a href="https://soundcloud.com/tech_treurica" target="_blank" rel="noopener noreferrer"><Image src="/assets/icons/icon_soundcloud.png" width="50" height="50" alt="soundcloud" /></a>
				<a href="https://twitter.com/reprereer" target="_blank" rel="noopener noreferrer"><Image src="/assets/icons/icon_twitter.png" width="50" height="50" alt="Twitter" /></a>
				<a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Image src="/assets/icons/icon_instagram.png" width="50" height="50" alt="Instagram" /></a>
				<a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><Image src="/assets/icons/icon_youtube.png" width="50" height="50" alt="YouTube" /></a>
                <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer"><Image src="/assets/icons/icon_twitch.png" width="50" height="50" alt="Twitch" /></a>
                <a href="https://github.com/reprereer" target="_blank" rel="noopener noreferrer"><Image src="/assets/icons/icon_github.png" width="50" height="50" alt="github" /></a>
		</p>
            </section>
    )
}

export default Links