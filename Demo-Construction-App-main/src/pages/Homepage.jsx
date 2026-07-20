import Navbar from "../components/Navbar";
import backgroundImage from "../assets/BG.png"
import Services from "../components/Services";
import RecentWorks from "../components/RecentWorks";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import AppFeatureSection from "../components/AppFeatureSection";
import AvailableServices from "../components/AvailabeServices";
import Buildhood from "../components/Buildhood";
import ClientTestimonial from "../components/ClientTestimonial";
import LoanPartners from "../components/LoanPartners";
import ConstructionPackages from "../components/ConstructionPackages";
import LabourOnlyServices from "../components/LabourOnlyServices";
import WhatYouGet from "../components/WhatYouGet";
import OwnersThought from "../components/OwnersThought";
import RealPillars from "../components/RealPillars ";
import TrustedPartners from "../components/TrustedPartners";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";


function Homepage(){
    return(
        <div>

            <section className="relative w-full">
                <div className="absolute inset-0 h-full">
                    <img
                        src={backgroundImage}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
            
                </div>

                <div className="relative z-10">
                <Navbar />
                <Hero />
                </div>
            </section>





        <Services/>
        <RecentWorks/>
        <WhyChooseUs/>
        <AppFeatureSection/>
        <AvailableServices/>
        <Buildhood/>
        <ClientTestimonial/>
        <LoanPartners/>
        <ConstructionPackages/>
        <LabourOnlyServices/>
        <WhatYouGet/>
        <OwnersThought/>
        <RealPillars/>
        <TrustedPartners/>
        <FAQ/>
        <Footer/>

        </div>
    )
}

export default Homepage;