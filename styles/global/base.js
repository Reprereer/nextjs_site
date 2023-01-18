import { css } from 'styled-components'

export default css`
    html,
    body {
        background-color: #FFF9F7;
        color: black;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        width: 100%;
    }
    footer {
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        flex-direction: column;
    }
`