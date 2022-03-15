import React from 'react';
import styled from 'styled-components';

const Blog = ({q, children}) => {

    return (
        <BlogStyled className='Blog'>
            <h3>{ q }</h3>
            <div className="answer">
                { children }
            </div> 
        </BlogStyled>
    );
}

export default Blog;

const BlogStyled = styled.div`
    background-color: gray;
    margin: 20px 0px;
    border: solid 2px #212121;

    h3 {
        margin: 0px;
        background-color: #212121;
        padding: 10px 20px;
        color: #e1e1e1;
    }

    .answer {
        background-color: white;
        padding: 20px;
    }
`;