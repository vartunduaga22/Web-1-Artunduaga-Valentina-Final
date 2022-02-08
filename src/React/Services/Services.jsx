import React from 'react';
import styled from 'styled-components';

import ServiceMenu from './ServiceMenu/ServiceMenu';
import ServiceMenuItem from './ServiceMenu/ServiceMenuItem';
import ServiceGallery from './ServiceGallery/ServiceGallery';
import ServiceGalleryItem from './ServiceGallery/ServiceGalleryItem';


const Services = () => {

    return (
        <ServicesStyled className='Services'>
            <h1>Services</h1>
            <ServiceMenu />
            <ServiceMenuItem /> 
            <ServiceGallery />
            <ServiceGalleryItem />
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`
    
`;