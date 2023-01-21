import StyledHeadline from './styledComponents/styledheadline'
import StyledContentBox from './styledComponents/styledcontentbox'
import StyledColumn from './styledComponents/styledcolumn'
import StyledHeadlineSmall from './styledComponents/styledheadlinesmall'
import StyledText from './styledComponents/styledtext'

//自分が行っているプロジェクトの概要を2カラムで説明する
const Projects = () => {
    return (
        <section>
            <StyledHeadline>Projects</StyledHeadline>
            <StyledContentBox>
                <StyledColumn>
                    <StyledHeadlineSmall>Music</StyledHeadlineSmall>
                    <StyledText>Tech Treurica（てくとれうりか）の名義で音楽活動をしています。ボーカルからインストまでジャンル問わず幅広く創作していきます。作った曲はYouTube、Soundcloudにて視聴可能となっております。</StyledText>
                </StyledColumn>
                <StyledColumn>
                    <StyledHeadlineSmall>Blog</StyledHeadlineSmall>
                    <StyledText>本サイト「この物語はフィクションです」の中でブログを運営しています。投稿頻度は週1回程度の予定ですが、作っているもの次第で変わりますのでご了承ください。小説やアイデア記事など様々なジャンルの投稿をお楽しみください。</StyledText>
                </StyledColumn>
            </StyledContentBox>
        </section>
    )
}

export default Projects