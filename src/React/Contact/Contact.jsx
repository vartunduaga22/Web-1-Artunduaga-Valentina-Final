import React from 'react';
import styled from 'styled-components';

import Blogs from './Blog/Blogs.jsx';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <h1>Blog</h1>
            <Blogs />
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
`;