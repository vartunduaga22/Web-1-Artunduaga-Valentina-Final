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
                    <li>JPG: Joint Photographis Experts Group: Lossy compression, millions of colors, can make for small files at the expense for quality.</li>
                    <li>GIF: Graphic Interface Format: 256 total colors, animation is supported, indexed colors is supported and supports transparency.</li>
                    <li>PNG: Portable Network Graphics: Supports transparency, lossless compression, also has millions of colors and indexed colors.</li>
                    <li>SVG Images: </li>
                </ul>
            </Essay>
            <Essay q='S8. Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.?'>
                <ul>
                    <li>Project Manager: Responsible for the entire project. Scope/Goals, and orchestrating the team to meet deadlines.</li>
                    <li>Business Analyst: Works with client to define deliverables, understanding client. They make the promises.</li>
                    <li>Scrum Master: Manages the agile process, unblocking teams and keeping the ball moving forward.</li>
                    <li>UX designer: User Experience Designer: Design User Stories, Characters to visually implement the site.</li>
                    <li>Web Developer/Engineer: Build and maintains the website. Translated UX Designs.</li>
                    <li>Quality Assurance Tester: </li>
                    <li>DevOps: </li>
                </ul>
            </Essay>
            <Essay q='S9. What is considered the right size for an image or video asset?'>
                <ul>
                    <li>Trick question, whatever site will give us the fastest download without compromising quality.</li>
                </ul>
            </Essay>
            <Essay q='S10. What does it mean for a company to be Agile? What are the pros and cons of being agile?'>
                <ul>
                    <li>Agile Methodology: This methodology relies on iteration and flexible flexible rapid sprints. Adjust and change
                        requirements as they shift in real time </li>
                    <li>Pros: The product gets to market faster. Requires a consistent team. Adaptive – Priorities can be redefined.
                        Collaborative. Quick problem detection.</li>
                    <li>Cons: No definite deadline. Hard to know specifics or definite costs because things are ever-evolving. Proper planning gets left behind because this method is more reactive.
                        You can’t plan ahead for an issue you don’t know if you might or might not have.</li>
                </ul>
            </Essay>
            <Essay q='S11. What are testing environments? What is the difference between Local, Dev, QA and Production?'>
                <p>A testing environment is: Space developers deploy there work for testing their work.</p>
                
                <ul>
                    <li><b>Local:</b> Developer's Machine - to build and test your own code on your computer.</li>
                    <li><b>Dev:</b> Dev Testing Server: Dev paired code reviews</li>
                    <li><b>QA:</b> Quality Assurance Testing Server for QA team</li>
                    <li><b>Production:</b> Live website for users to access - public domain</li>
                </ul>
            </Essay>
            <Essay q='S12. Function vs Form: When are web images considered part of the content (HTML) as opposed to part of the appearance (CSS)?'>
                <ul>
                    <p>HTML if image is related to content and is crucial for the website to include this image as part of the website.
                        If not, or if an image is being used just for design purposes then you include this as a background image on CSS.</p>
                </ul>
            </Essay>
            <Essay q="S13. What is the difference between ID's, Classes and Tags? How does Specificity play a role in the selection of HTML elements (both in CSS and JS)">
                <ul>
                    <li><b>ID:</b> Label: We use pound sign (#) in CSS and JS. Singular - should only label one HTML element on a page. </li>
                    <li><b>Class:</b> Label: We use the period (.) in CSS and JS. Defines a series, multiple HTML elelemts.</li>
                    <li><b>Tag:</b> Any HTML tag in the HTML language.</li>
                    <li><b>Specificity:</b> Determines which selector and rule applies to an element</li>
                </ul>
            </Essay>
            <Essay q="S14. What is a CSS Preprocessor? What are some examples? In React, what are styled components? How do Styled Components violate separation of concerns?">
                <ul>
                    <li><b>CSS Preprocessor:</b> Turns CSS into programming language to parsing variables and functions.</li>
                    <li><b>What are some examples?:</b> Sass: Syntactically Awesome Style Sheet, LESS: Leaner Style Sheets, Stylus. </li>
                    <li><b>What are styled components in React:</b> Styled components can add styles directly in compents.</li>
                    <li><b>Specificity:</b> Determines which selector and rule applies to an element</li>
                </ul>
            </Essay>
            <Essay q="S15. What is a CSS Preprocessor? What are some examples? In React, what are styled components? How do Styled Components violate separation of concerns?">
                <p>Answer will go here for Thursday.</p>
                <ul>
                    <li><b>ID:</b> Label: We use pound sign (#) in CSS and JS. Singular - should only label one HTML element on a page. </li>
                    <li><b>Class:</b> Label: We use the period (.) in CSS and JS. Defines a series, multiple HTML elelemts.</li>
                    <li><b>Tag:</b> Any HTML tag in the HTML language.</li>
                    <li><b>Specificity:</b> Determines which selector and rule applies to an element</li>
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