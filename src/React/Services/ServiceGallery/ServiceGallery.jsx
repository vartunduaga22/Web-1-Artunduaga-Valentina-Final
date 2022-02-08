import React from 'react';
import styled from 'styled-components';
import { servicesVersion } from 'typescript';

import ServiceGalleryItem from './ServiceGalleryItem.jsx';

const ServiceGallery = ({services}) => {

    return (
        <ServiceGalleryStyled className='ServiceGallery'>
            {
                    services.map((service, idx) => {
                        return <ServiceGalleryItem key={ idx } service={ service }/>
                    })
            }
        </ServiceGalleryStyled>
    );
}

export default ServiceGallery;

const ServiceGalleryStyled = styled.div`
    
`;