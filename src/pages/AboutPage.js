import React from "react";
import FooterTop from "../Components/FooterTop/FooterTop";
import PageTitle from "../Components/PageTitle/PageTitle";
import About from "../Components/About/About";




function AboutPage (){
    return(
        <div>
            <PageTitle PageTitle="About Me"/>
            <About />
            <FooterTop />
        </div>

    );
}

export default AboutPage;