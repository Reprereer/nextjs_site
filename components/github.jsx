import StyledText from './styledComponents/styledtext'
import StyledHeadline from './styledComponents/styledheadline'
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