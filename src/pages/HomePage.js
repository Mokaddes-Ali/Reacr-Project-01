import React from 'react';
import NavBars from '../Components/Navbars/Navbars';
import TopHeader from '../Components/TopHeader/TopHeader';
import Services from '../Components/Services/Services';
import Technology from '../Components/Technology/Technology';
import TotalWorks from '../Components/TotalWorks/TotalWorks';
import RecentProject from '../Components/RecentProject/RecentProject';
import OurCourses from '../Components/OurCourses/OurCourses';
import VedioSection from '../Components/VedioSection/VedioSection';
import ClientReview from '../Components/ClientReview/ClientReview';
import FooterTop from '../Components/FooterTop/FooterTop';

function HomePage() {
    return(
        
           <div>
             <NavBars />
             <TopHeader />
             <Services />
             <Technology />
             <TotalWorks />
             <RecentProject />
             <OurCourses />
            <VedioSection />
            <ClientReview />
            <FooterTop />

           </div>

    );
    
}

export default HomePage;