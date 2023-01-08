import {
    CSSObject,
    FlattenSimpleInterpolation,
    SimpleInterpolation,
    css,
    FlattenInterpolation,
  } from 'styled-components'
  
  export const breakpoint = {
    base: (
      base: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
        ${css(base, ...interpolations)}
    `,
    ss: (
        ss: CSSObject | TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
        @media (min-width: 375px ) {
            ${css(ss, ...interpolations)}
        }
    `,
    sm: ( //小さめタブレットサイズ
      sm: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 640px) {
        ${css(sm, ...interpolations)}
      }
    `,
    md: ( //タブレットサイズ
      md: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 768px) {
        ${css(md, ...interpolations)}
      }
    `,
    lg: ( //普通PCサイズ
      lg: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 1024px) {
        ${css(lg, ...interpolations)}
      }
    `,
    xl: ( //最大サイズ
      xl: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 1280px) {
        ${css(xl, ...interpolations)}
      }
    `,
  };