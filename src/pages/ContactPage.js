import React from "react";
import Forms from "../Components/Forms/Forms";
import FooterTop from "../Components/FooterTop/FooterTop";
import PageTitle from "../Components/PageTitle/PageTitle";

function ContactPage(){
    return(
                <div>
                    <PageTitle PageTitle="Contact Me" />
                    <Forms />
                    <FooterTop />
                </div>
    );
}

export default ContactPage;