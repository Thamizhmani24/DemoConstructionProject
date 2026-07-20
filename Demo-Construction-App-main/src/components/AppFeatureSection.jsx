import { CheckCircle } from "lucide-react";
import img1 from "../assets/AppFeatureSectionImage/app-mockup1.png"
import img2 from "../assets/AppFeatureSectionImage/app-mockup2.png"

const AppFeatureSection = ()=>{

    const features = [
    "Monitor project progress, raise queries, and access detailed inspection reports – all in one place.",
    "Explore curated packages, floor plans, and personalized design suggestions.",
    "Experience 3D visual updates of your home as it takes shape.",
    "Enjoy real-time tracking from groundbreaking to handover."
  ];


    return(
        <section className="bg-white mt-12 mx-12 md:px-12 lg:px-20">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
                <div className="relative flex flex-col items-center">
                <img
                    src={img1}
                    alt="App mockup 1"
                    className="w-72 md:w-96 lg:w-[28rem] relative"
                />
                <img
                    src={img2}
                    alt="App mockup 2"
                    className="w-44 md:w-56 lg:w-64 opacity-100 relative -mt-6 z-20"
                />
            </div>



                <div>
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4">
                    We build your dream home. You stay updated through our app.
                </h2>
                <h3 className="text-lg font-semibold text-yellow-400 mb-6">
                    🏗 Stay in Control of Your Home Construction Journey
                </h3>

                <ul className="space-y-4 text-gray-700">
                    {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                        <span>{feature}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
        </section>
    )
}

export default AppFeatureSection;