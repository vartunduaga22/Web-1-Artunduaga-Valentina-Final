import React from 'react';
import styled from 'styled-components';

import ServiceMenuItem from './ServiceMenuItem';

const ServiceMenu = ({categories, chosenCategory, chosenCategoryUpdate}) => {

    return (
        <ServiceMenuStyled className='ServiceMenu'>
            {
                categories.map((category, idx) => {
                    return <ServiceMenuItem key={ idx } category={ category } chosenCategory={ chosenCategory } chosenCategoryUpdate={ chosenCategoryUpdate }/>
                })
            }
        </ServiceMenuStyled>
    );
}

export default ServiceMenu;

const ServiceMenuStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;