import { Circle, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const labourServices = [
  {
    id: 1,
    title: "THE MASON ONLY",
    features: [
      "Excavation Works",
      "Material Shifting",
      "Masonry Works",
      "Plastering Works",
    ],
  },
  {
    id: 2,
    title: "THE COMPLETE LABOUR",
    features: [
      "All Mason Only Workers",
      "Supply of BarBending Workers",
      "Supply of Electrical Workers",
      "Supply of Plumbing Workers",
      "Supply of Painting Workers",
      "Supply of Tiles Workers",
    ],
  },
];

export default function LabourOnlyServices() {
  return (
    <section className="py-16 bg-white text-center">

      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Our <span className="text-yellow-600">Labour Only Services</span>
      </h2>
      
      <p className="text-lg text-gray-700 mb-8">
        We also provide all labour services such as masons, helpers,
        electricians, plumbers and painters.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20">
        {labourServices.map((service) => (
          <div
            key={service.id}
            className="bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden flex flex-col"
          >

            <div className="py-4 bg-gray-50 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 uppercase">
                {service.title}
              </h3>
            </div>


            <ul className="divide-y divide-gray-200 flex-1">
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between px-6 py-3 text-gray-700"
                >
                  <div className="flex items-center space-x-2">
                    <Circle className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span>{feature}</span>
                  </div>
                  <Plus className="w-4 h-4 text-yellow-500 font-bold" />
                </li>
              ))}
            </ul>


            <div className="p-6">
              <Link to="QuoteForm">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded shadow-md w-full transition">
                GET A QUOTE
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
