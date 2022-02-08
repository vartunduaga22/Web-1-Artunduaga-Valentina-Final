import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { servicesData } from './servicesData.js';


/* Component ---------------------------*/
import ServiceMenu from './ServiceMenu/ServiceMenu';
import ServiceGallery from './ServiceGallery/ServiceGallery';


const Services = () => {

    return (
        <ServicesStyled className='Services'>
            <h1>Services</h1>
            <ServiceMenu categories={ servicesData.categories }/>
            <ServiceGallery services={ servicesData.services }/>
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`
    
`;