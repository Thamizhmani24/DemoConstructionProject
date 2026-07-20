import BuildhoodCard from "../cards/BuildhoodCard";
import { FaHardHat } from "react-icons/fa";
import { UserCheck, Fingerprint, Award, Settings, Clock, Tag, Shield, Eye, User, Headphones, Smile } from "lucide-react";

const Buildhood = () => {

const features = [
  { icon: FaHardHat, title: "No subcontractors" },
  { icon: UserCheck, title: "Professional Project Management" },
  { icon: Fingerprint, title: "Unique and modern designs" },
  { icon: Award, title: "Quality" },
  { icon: Settings, title: "Process" },
  { icon: Clock, title: "Adherence to Timelines" },
  { icon: Tag, title: "Competitive Pricing" },
  { icon: Shield, title: "High-Quality Design" },
  { icon: Eye, title: "Transparency" },
  { icon: User, title: "Brand/Trustworthy" },
  { icon: Headphones, title: "Professional customer service" },
  { icon: Smile, title: "Hassle-free service" },
];

    return(
        <section className="bg-white mt-12 mx-12">

      <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 text-center mb-12">
        Why Choose <span className="text-yellow-600">Buildhood</span>
      </h2>


      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <BuildhoodCard key={idx} icon={feature.icon} title={feature.title} />
        ))}
      </div>
    </section>
    )
}

export default Buildhood;