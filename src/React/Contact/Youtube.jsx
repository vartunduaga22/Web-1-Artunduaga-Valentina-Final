import React from 'react';
import styled from 'styled-components';

import ReactPlayer from 'react-player/youtube'

const Youtube = () => {

    return (
        <YoutubeStyled className='Youtube'>
            <ReactPlayer url='https://www.youtube.com/watch?v=vzsa3ZsYArA' /> 
        </YoutubeStyled>
    );
}

export default Youtube;

const YoutubeStyled = styled.div`
    
`;