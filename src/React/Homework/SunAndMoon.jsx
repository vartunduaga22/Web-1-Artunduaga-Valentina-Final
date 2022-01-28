import React, { useState } from 'react';
import styled from 'styled-components';

const SunAndMoon = () => {

    const [theImageSrc, theImageSrcUpdate] = useState('/assets/img/sun.png');
    const [theDesc, theDescUpdate] = useState( 'The Sun');

    const changeToMoon = ()  => {
        theImageSrcUpdate('/assets/img/moon.png');
        theDescUpdate('The Moon');
    }

    const changeToSun = () => {
        theImageSrcUpdate('/assets/img/sun.png');
        theDescUpdate('The Sun');
    }


    return (
        <SundAndMoonStyled>
            <h2>Sun And Moon</h2>

            <img src={ theImageSrc }
                onMouseOver={ changeToMoon }
                onMouseOut= { changeToSun }
            />

            <h3> { theDesc }</h3>
        </SundAndMoonStyled>
    )   
}

export default SunAndMoon;

const SundAndMoonStyled = styled.div`
    background-color: yellow;
    text-align: center;
    padding: 20px;

    h2 { 
        color: teal;
        font-size: 50px;
        margin: 0px;
    }

    h3 { 
        color: teal;
        font-size: 20px;
        margin: 0px;
    }
        
    img {
        border: solid 10px teal;
        background-color: white;
    }
`;
