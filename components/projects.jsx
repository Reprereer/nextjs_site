import styled from 'styled-components'
//自分が行っているプロジェクトの概要を2カラムで説明する
const Projects = () => {
    return (
        <section>
            <StyledHeadline>Projects</StyledHeadline>
            <StyledContentBox>
                <StyledColumn>
                    <StyledHeadlineSmall>Music</StyledHeadlineSmall>
                    <p>Tech Treurica（てくとれうりか）の名義で音楽活動をしています。ボーカルからインストまでジャンル問わず幅広く創作していきます。作った曲はYouTube、Soundcloudにて視聴可能となっております。</p>
                </StyledColumn>
                <StyledColumn>
                    <StyledHeadlineSmall>Blog</StyledHeadlineSmall>
                    <p>本サイト「この物語はフィクションです」の中でブログを運営しています。投稿頻度は週1回程度の予定ですが、作っているもの次第で変わりますのでご了承ください。小説やアイデア記事など様々なジャンルの投稿をお楽しみください。</p>
                </StyledColumn>
            </StyledContentBox>
        </section>
    )
}

export default Projects

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

export const StyledContentBox = styled.div`
    ${({ theme }) => theme.breakpoint.media.base`
        display: flex;
        gap: 5%;
        padding-bottom: 1%;
        padding-left: 5%;
        padding-right: 6%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `}
    ${({ theme }) => theme.breakpoint.media.md`
        flex-direction: row;
    `}
`

export const StyledColumn = styled.div`
    ${({ theme }) => theme.breakpoint.media.base`
        width: 100%;
        min-height: 12rem;
    `}
    ${({ theme }) => theme.breakpoint.media.md`
        width: 50%;
        position: relative;
        min-height: 12rem;
    `}
`

export const StyledHeadlineSmall = styled.h3`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.lg};
    `}
    ${({ theme }) => theme.breakpoint.media.md`
        font-size: ${theme.fonts.size.xl};
    `}
    ${({ theme }) => theme.breakpoint.media.lg`
        font-size: ${theme.fonts.size.xl};
    `}
    ${({ theme }) => theme.breakpoint.media.xl`
        font-size: ${theme.fonts.size.xl2};
    `}
`

export const StyledText = styled.h4`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: left;
        font-size: ${theme.fonts.size.base};
    `}
`