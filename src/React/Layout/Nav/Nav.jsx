import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { useMediaQuery } from 'React/common/useMediaQuery.js';

/* Comments ---------------------------*/
import Hamburger from './Hamburger.jsx';
import MainMenu from './MainMenu.jsx';

const Nav = () => {

    const { media } = useMediaQuery();

    return (
        <NavStyled className='Nav'>
            {
                !media.mdUp &&
                <Hamburger />
            }
            <MainMenu />
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: rgb(1, 68, 68);
    padding: 20px;
    color: white;
`;