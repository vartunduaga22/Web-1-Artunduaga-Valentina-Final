import React , { useState }from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { servicesData } from './servicesData.js';


/* Component ---------------------------*/
import ServiceMenu from './ServiceMenu/ServiceMenu';
import ServiceGallery from './ServiceGallery/ServiceGallery';


const Services = () => {

    const [chosenCategory, chosenCategoryUpdate] = useState('All')

    console.log('chosenCategory', chosenCategory);

    return (
        <ServicesStyled className='Services'>
            <h1>Film Photography</h1>
            <ServiceMenu categories={ servicesData.categories } chosenCategory={ chosenCategory } chosenCategoryUpdate={ chosenCategoryUpdate } />
            <ServiceGallery services={ servicesData.services } chosenCategory={ chosenCategory } />
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`
    
`;