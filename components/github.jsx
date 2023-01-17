import styled from 'styled-components'
//githubがあるって書いてあるだけ
const Githubs = () => {
    return (
        <section>
            <div>
                <StyledHeadline>Github</StyledHeadline>
                <StyledText>Botやアプリなど作ったものを置いています。思いついたしょぼアイデア達のたまり場だと思ってもらえれば嬉しいです（まだ全く溜まってないけど...）。使用言語は主にC++、JavaScript、TypeScriptの3種類となっています。</StyledText>
            </div>
        </section>
    )
}

export default Githubs;

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

export const StyledText = styled.h4`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.base};
        overflow-wrap: break-word;
        padding-bottom: 1%;
        padding-left: 7%;
        padding-right: 8%;
    `}
`