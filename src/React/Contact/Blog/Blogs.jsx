import React from 'react';
import styled from 'styled-components';

import Blog from './Blog.jsx';

const Blogs = () => {

    return (
        <BlogsStyled className='Blogs'>
            <Blog q='How to Develop Black and White Film at Home'>
                <ul>
                    <li> Developing film at home is one my favorite ways to create a deeper connection with the images that I have taken. Additionally, you feel more reward and pride the minute you are staring at the final picture on your computer screen. Developing is definately tricky but I hope the video below can help you get started!</li>
                </ul>
            </Blog> 
        </BlogsStyled>
    );
}

export default Blogs;

const BlogsStyled = styled.div`
    background-color: white;
    padding: 20px;
`;