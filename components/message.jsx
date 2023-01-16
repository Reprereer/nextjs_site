import styled from 'styled-components'

//サイトメッセージのための場所
const Message = () => {
    return (
        <section>
            <StyledMessage>
            ここに載っている創作物は私の制作したフィクションです。ブログ記事も、小説も、音楽も、動画も、そしてこのサイトすらフィクションです。あなたが見ている物語のキャラクターは私とは全く関係がありません。
            </StyledMessage>
        </section>
    )
}

export default Message

export const StyledHeadline = styled.h2`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.xl};
    `}
    ${({ theme }) => theme.breakpoint.media.ss`
        font-size: ${theme.fonts.size.xl};
    `}
    ${({theme}) => theme.breakpoint.media.sm`
        font-size: ${theme.fonts.size.xl2};
    `}
    ${({theme}) => theme.breakpoint.media.md`
        font-size: ${theme.fonts.size.xl3};
    `}
    ${({theme}) => theme.breakpoint.media.lg`
        font-size: ${theme.fonts.size.xl4};
    `}
    ${({theme}) => theme.breakpoint.media.xl`
        font-size: ${theme.fonts.size.xl5};
    `}
`

export const StyledMessage = styled.h3`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.base};
        overflow-wrap: break-word;
        padding-bottom: 1%;
        padding-left: 8%;
        padding-right: 8%;
    `}
`