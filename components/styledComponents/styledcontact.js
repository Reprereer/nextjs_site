import styled from 'styled-components'

const StyledContact = styled.div`
    ${({ theme }) => theme.breakpoint.media.base`
        background: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: left;
        margin-left: 160px;
        margin-right: 180px;
        flex-direction: column;
    `}
`

export default StyledContact