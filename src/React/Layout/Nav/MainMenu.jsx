import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

const MainMenu = ({showMenuUpdate}) => {

    const clickHandler = () => {
        showMenuUpdate(false);
    }

    return (
        <MainMenuStyled className='MainMenu'>
            <NavLink onClick={ clickHandler } to={ '/' } exact>Welcome</NavLink>
            <NavLink onClick={ clickHandler } to={ '/services' }>Photography</NavLink>
            <NavLink onClick={ clickHandler } to={ '/contact' }>Blog</NavLink>
            <NavLink onClick={ clickHandler } to={ '/homework' }>Homework</NavLink>
        </MainMenuStyled>
    );
}

export default MainMenu;

const MainMenuStyled = styled.div`
    a {
        display: block;
        color: #f4f4f4;
        margin: 5px 0px;
        background-color: #212121;
        height: 50px;
        line-height: 55px;
        text-decoration: none;
        text-align: center;

        border-radius: 5px;

        text-transform: uppercase;
        font-weight: bold;

        &:hover {
            background-color: black;
        }
        &.active {
            color: #e1e1e1;
            background-color: #6a6a6a;
        }

    }
    @media ${defaultMediaQueries.mdUp} {
        display: flex;
        justify-content: center;
        a {
            display: inline-block;
            width: 150px;
            margin: 0px 10px;
            font-size: 16px;
            border-radius: 5px;
        }
    }
`;