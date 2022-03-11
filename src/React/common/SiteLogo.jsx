import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCameraRetro,
} from '@fortawesome/free-solid-svg-icons';


const SiteLogo = () => {

    return (
        <SiteLogoStyled className='SiteLogo'>
            <FontAwesomeIcon icon={ faCameraRetro } className='camera-retro-icon' />
        </SiteLogoStyled>
    );
}

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #e1e1e1;
    width: 100%;
    height: 100%;

    svg.camera-retro-icon {
        width: 200px;
        height: auto;
    }
`;