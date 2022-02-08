import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <Essay q='​​S2. What is the difference between Git, Github and Heroku?'>
                <ul>
                    <li> Git: Git is a free and open source system used for tracking changes in computer files. This control system allows multiple developers to work together on one same file and it supports non-linear development through its parallel branches. Gilt is scalable, creates backups, and tracks the history of computer files.</li>
                    <li>Github: A place for our Git repos- remote server - leveraging Git. Encourages teamwork, code reviews, and sharing.</li>
                    <li>Heroku: Heroku is a platform that is mostly used for running apps via dynos- virtual computers that can be powered up or down based on how big your app is. Its a platform that was built by developers for developers, it is easy to navigate, and it is open and extensible- you can build on any language.</li>
                </ul>
            </Essay>
            <Essay q='S3. Explain the difference between HTML, CSS and JS?'>
                <ul>
                    <li> HTML: Tag-based language/mark up language based hierarchy and semantic definition. </li>
                    <li>CSS: The appearance/visual aesthetics of the app or web site.</li>
                    <li>JS: Programming language for interaction within the web site. Such as slideshows, scrolling, windows resizing, clicking on a link... etc. It is the interactivity between the user and website and also functionality in terms of enhancing web sites to help users navigate the site most effectively.</li>
                    </ul>
            </Essay>
            <Essay q='S4. What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'>
                <ul>
                    <li> Single Page Apps: A web site that does not have to reload, it is faster, and more efficient. This is the web site most commonly used and seems to be the most popular. Users report having a more pleasant experience. </li>
                    <li>Multi-page Web Sites: </li>
                </ul>
            </Essay>
            <Essay q='S5. What is the difference between Web Designer, Front End Developer and Back End Developer?'>
                <ul>
                    <li>Web Designers/UX Designer: Focus on designing the look of the website, mock ups, feautures for the web developer to translate</li>
                    <li>Front End Developer: Client or User side and user interaction. Front end developers dealt more with rolors, responsiveness and made sure the website or application could be optimally used in all devices.</li>
                    <li>Back End Developer: Server side of the website that focuses more on data collection and server communication. </li>
                </ul>
            </Essay>
            <Essay q='S6. Distinguish the difference between Site Relative, Document Relative, and Absolute Paths?'>
                <ul>
                    <li>Site Relative: URL relates from the root of the websites. Describes the path relative to the sites root folder that contains the home page and all the other pages, folders, and files that make up your site.</li>
                    <li>Document Relative: Link that is relative to the documents </li>
                    <li>Absolute Paths: Fully resolved URL to a resource (any resource) </li>
                </ul>
            </Essay>
            <Essay q='S7. What is the difference between jpg, gif, png and SVG images?'>
                <ul>
                    <li>JPG:</li>
                    <li>GIF:</li>
                    <li>PNG:</li>
                    <li>SVG Images:</li>
                </ul>
            </Essay>
            <Essay q='S8. Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.?'>
                <ul>
                    <li>Answer will go in Thursday</li>
                </ul>
            </Essay>
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;