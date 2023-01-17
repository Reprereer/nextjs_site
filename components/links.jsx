import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
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

export const StyledHeadline = styled.h2`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.xl};
    `}
    ${({theme}) => theme.breakpoint.media.md`
        font-size: ${theme.fonts.size.xl2};
    `}
    ${({theme}) => theme.breakpoint.media.lg`
        font-size: ${theme.fonts.size.xl3};
    `}
    ${({theme}) => theme.breakpoint.media.xl`
        font-size: ${theme.fonts.size.xl3};
    `}
`
export const StyledLinker = styled.div`
    ${({ theme }) => theme.breakpoint.media.base`
        display: flex;
        color:${theme.colors.black};
        align-items:center;
        flex-direction: column;
        column-gap: 5%;
        row-gap: 5%;
    `}
    ${({ theme }) => theme.breakpoint.media.md`
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5%;
    `}
`
export const StyledImage = styled.div`
    ${({ theme }) => theme.breakpoint.media.base`
    `}
    ${({ theme }) => theme.breakpoint.media.ss`
        transform: scale(1.25)
    `}
    ${({ theme }) => theme.breakpoint.media.md`
        transform: scale(1.25)
    `}
    ${({ theme }) => theme.breakpoint.media.lg`
        transform: scale(1.375)
    `}
    ${({ theme }) => theme.breakpoint.media.xl`
        transform: scale(1.5)
    `}
`

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