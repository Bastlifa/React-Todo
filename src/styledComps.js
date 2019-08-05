import styled from 'styled-components'
const formElMaxWidth = `500px`
const formElMarginBot = `10px`
const formElFontSize = `2rem`
const formElBorderRad = `6px`

export const StyledForm = styled.form`
    display: flex;
    flex-flow: column nowrap;

    
    input
    {
        box-sizing: border-box;
        
        max-width: ${formElMaxWidth};
        font-size: ${formElFontSize};
        border-radius: ${formElBorderRad};
        border: 2px solid gray;
        margin-bottom: ${formElMarginBot};
        text-align: center;
    }

    button
    {
        max-width: ${formElMaxWidth};
        margin-bottom: ${formElMarginBot};
        font-size: ${formElFontSize};
        border-radius: ${formElBorderRad};
        border: 2px solid gray;
    }
`;

export const AppContainer = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    top: 0;

    h2 
    { 
        margin-bottom: 20px; 
        font-size: 2rem;
        color: white;
        text-shadow: -1px 0 black, 1px 0 black, 0 -1px black;
    }
    
    background: linear-gradient(45deg, #660066, #009933, #0033cc, #ffff00,#660066, #009933, #0033cc,  #ffff00);
    background-size: 337%;
    animation: bgAnim 15s infinite;
    animation-timing-function: ease-in-out;
`;


export const TodoH3 = styled.h3`
    font-size: ${formElFontSize};

`;

export const TodoH2Div = styled.div`
    width: 300px;
    border-radius: 12px;
    border: 3px solid black;
    text-align: center;
    padding: 10px;
    margin: 20px auto;
    /* font-size: 2rem; */
    color: black;
    background-color: white;
`;