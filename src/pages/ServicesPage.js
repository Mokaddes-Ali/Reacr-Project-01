import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Services from "../Components/Services/Services";
import PageTitle from "../Components/PageTitle/PageTitle";
import FooterTop from "../Components/FooterTop/FooterTop";
import Forms from "../Components/Forms/Forms";

function ServicesPage(){
    return(
            <Fragment>
                    <div>
                        <PageTitle PageTitle="Get My Service" />
                      <Services />
                      <Forms />
                      <FooterTop />
                      
                    </div>
            </Fragment>
    );
}

export default ServicesPage;