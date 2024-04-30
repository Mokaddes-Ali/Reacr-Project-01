import React, { Fragment } from "react";
import PageTitle from "../Components/PageTitle/PageTitle";
import FooterTop from "../Components/FooterTop/FooterTop";
import OurCourses from "../Components/OurCourses/OurCourses";

function CourcesPage(){
    return(
           <Fragment>
                <div>
                    <PageTitle PageTitle="Our Cources"/>
                    <OurCourses />
                    <FooterTop />
                </div>
           </Fragment>
    );
}

export default CourcesPage;