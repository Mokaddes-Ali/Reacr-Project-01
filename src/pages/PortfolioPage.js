import React, { Fragment } from "react";
import PageTitle from "../Components/PageTitle/PageTitle";
import FooterTop from "../Components/FooterTop/FooterTop";
import RecentProject from '../Components/RecentProject/RecentProject';





function PortfolioPage() {
    return(
        <Fragment>
            <div>
            <PageTitle PageTitle="All Projects" />
              <RecentProject />
              <RecentProject />
            <FooterTop />
            </div>
        </Fragment>
    )
}

export default PortfolioPage;
