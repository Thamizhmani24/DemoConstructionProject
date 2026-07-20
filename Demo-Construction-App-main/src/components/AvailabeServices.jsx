import AvailableServicesCard from "../cards/AvailableServicesCard";
import Image1 from "../assets/AvailableServicesImage/TurnkeyHouse.png";
import Image2 from "../assets/AvailableServicesImage/CustomHome.png";
import Image3 from "../assets/AvailableServicesImage/IndependentHouse.png";
import Image4 from "../assets/AvailableServicesImage/BudgetHome.png";
import Image5 from "../assets/AvailableServicesImage/LuxuryHome.png";
import Image6 from "../assets/AvailableServicesImage/GreenHome.png";
import Image7 from "../assets/AvailableServicesImage/Renovation.png";
import Image8 from "../assets/AvailableServicesImage/InteriorFitouts.png";



const AvailableServices =() =>{


    const services = [
  { id: 1, title: "Turnkey House Construction", img: Image1, desc: "End-to-end service: design, approvals, construction, interiors, handove, Hassle-free experience with fixed cost and timeline." },
  { id: 2, title: "Custom Home Construction", img: Image2, desc: "Fully personalized designs based on your preferences. Architecture, materials, and finishes tailored to your needs." },
  { id: 3, title: "Independent Houses/Villa Construction", img: Image3, desc: "For individual plots, including basement, duplex, triplex, or luxury villas. Optimized for Vastu, ventilation, and privacy. " },
  { id: 4, title: "Budget Home Construction", img: Image4, desc: "Cost-effective construction with quality assurance. Ideal for first-time homeowners and compact plots." },
  { id: 5, title: "Luxury Home Construction", img: Image5, desc: "High-end finishes, premium materials, and elegant architecture. Smart home integrations and modern amenities." },
  { id: 6, title: "Eco-Friendly/Green Home Construction", img: Image6, desc: "Sustainable building practices and materials. Rainwater harvesting, solar panels, natural ventilation, and more." },
  { id: 7, title: "Renovation & Remodeling Services", img: Image7, desc: "Structural and aesthetic upgrades to existing homes.Includes floor plan changes, elevation updates, and interior makeovers." },
  { id: 8, title: "Interior Fit-Outs", img: Image8, desc: "Modular kitchens, wardrobes, false ceilings, lighting, and furniture.Fully aligned with architectural design." }
];


    return(
        <section className="bg-white mt-12 mx-12">
             <h2 className="text-2xl md:text-3xl font-bold text-yellow-600 text-center mb-12">
                House Construction Solutions Available in Chennai
             </h2>

              <div className="space-y-12 max-w-7xl mx-auto mt-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-items-center gap-10 lg:hidden">
                  {services.map((service) => (
                    <AvailableServicesCard key={service.id} {...service} />
                  ))}
                </div>

                <div className="hidden lg:flex flex-col space-y-12">

                  <div className="grid lg:grid-cols-3 gap-x-56">
                    {services.slice(0, 3).map((service) => (
                      <AvailableServicesCard key={service.id} {...service} />
                    ))}
                  </div>

                  <div className="grid lg:grid-cols-2 gap-x-56 justify-center lg:w-2/3 mx-auto">
                    {services.slice(3, 5).map((service) => (
                      <AvailableServicesCard key={service.id} {...service} />
                    ))}
                  </div>

                  <div className="grid lg:grid-cols-3 gap-x-56">
                    {services.slice(5, 8).map((service) => (
                      <AvailableServicesCard key={service.id} {...service} />
                    ))}
                  </div>
                </div>

              </div>
        </section>
    )
}

export default AvailableServices;