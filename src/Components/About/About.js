import React, { Fragment } from "react";
import '../../Assets/css/style.css';
import { Container } from "react-bootstrap";



function About(){
    return(
            <Fragment>
                <Container className="mt-5 mb-5">
                <h3>Who i Am</h3>
        <div className='lineAbout'></div>

        <p className='mt-3'>I am a highly talented experienced, professional and coperative software engineer.
            I am working in programming and web world for more thant 4 years. I assure you a wide
            of quality of IT services. Web development, mobile app development and UI design the major
             field i am expert in. Moreoveri have teaching passion. I make video tutorial to share my knowledge. 
             My over all skill makes me a complete software developer. so you can hire me for your project.
            </p>
        <h3 className='mt-3'>My Mission</h3>

        <div className='lineAbout'></div>
        <p className='mt-3'>My mission is to develop unique idea and quality software that will secure Top
            ranking in marketplace. people's system and people's heart develope robust. secure, dynamic responsive 
            software for all platform computer tab, mobile phones. provice top nothch customer 
            service customization of our product according to customer demand and curernt technology. planning
            advanced techniques for optimization. user experience and satisfaction of customer for our
            software. Planning flexible software that will not be bounded by any linguistic or regional 
            restriction. I want to flourish software that can blow people's heart and soul.
        </p>
        <h3 className='mt-3'>My Vission</h3>

        <div className='lineAbout'></div>
        <p className='mt-3'>
            My vission os to brand our firm as the best firm in the world. Secure the top 
            place among software providers for both local and international market brand our country
            as the best software provider country. create employment for youth on the field of both
            software and corporate level. Provide our country and world with superior software. Nature youth
            to be highly skilled software engineer.
        </p>

                </Container>
            </Fragment>
    );

}


export default About;
