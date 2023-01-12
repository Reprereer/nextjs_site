import 'styled-components'
import { css } from 'styled-components'

export const breakpoint = {
  media: { //メディアクエリやレスポンシブのブレークポイント
    base: (...args) => css`
        ${css(...args)}
    `,

    //スマホサイズ
    ss: (...args) => css`
        @media (min-width: 375px) {
            ${css(...args)}
        }
    `,

    //小さめタブレットサイズ
    sm: (...args) => css`
      @media (min-width: 640px) {
        ${css(...args)}
      }
    `,

    //タブレットサイズ
    md: (...args) => css`
      @media (min-width: 768px) {
        ${css(...args)}
      }
    `,

    //普通PCサイズ
    lg: (...args) => css`
      @media (min-width: 1024px) {
        ${css(...args)}
      }
    `,

    //最大サイズ
    xl: (...args) => css`
      @media (min-width: 1280px) {
        ${css(...args)}
      }
    `,
  },
}