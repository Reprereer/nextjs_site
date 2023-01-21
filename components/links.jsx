import Image from 'next/image'
import Link from 'next/link'
import StyledHeadline from './styledComponents/styledheadline'
import StyledLinker from './styledComponents/styledlinker'
import StyledImage from './styledComponents/styledimage'
//アイコン押したらリンクに飛ぶ
const Links = () => {
    return (
        <section>
                <StyledHeadline>Links</StyledHeadline>
                <StyledLinker>
				<Link href="https://soundcloud.com/tech_treurica" target="_blank" rel="noopener noreferrer"><StyledNextImage src="/assets/icons/icon_soundcloud.png" width="50" height="50" alt="soundcloud" /></Link>
				<Link href="https://twitter.com/reprereer" target="_blank" rel="noopener noreferrer"><StyledNextImage src="/assets/icons/icon_twitter.png" width="50" height="50" alt="Twitter" /></Link>
				<Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"><StyledNextImage src="/assets/icons/icon_instagram.png" width="50" height="50" alt="Instagram" /></Link>
				<Link href="https://youtube.com" target="_blank" rel="noopener noreferrer"><StyledNextImage src="/assets/icons/icon_youtube.png" width="50" height="50" alt="YouTube" /></Link>
                <Link href="https://twitch.tv" target="_blank" rel="noopener noreferrer"><StyledNextImage src="/assets/icons/icon_twitch.png" width="50" height="50" alt="Twitch" /></Link>
                <Link href="https://github.com/reprereer" target="_blank" rel="noopener noreferrer"><StyledNextImage src="/assets/icons/icon_github.png" width="50" height="50" alt="github" /></Link>
		</StyledLinker>
            </section>
    )
}

export default Links

export const StyledNextImage = ({src, alt, width, height})=>{
    return(
        <StyledImage>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </StyledImage>
    )
}