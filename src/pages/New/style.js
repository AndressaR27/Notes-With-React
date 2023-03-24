import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }

`;

export const Form = styled.form `
    max-width: 550px;
    margin: 38px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    
    
    > header {
        margin-bottom: 36px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        button {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-basis: 50%;
        /* flex-wrap: wrap; */
    }
`