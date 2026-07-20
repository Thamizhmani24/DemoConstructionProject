import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    id: 1,
    name: "Standard Package",
    features: [
      "Design & Drawing",
      "Core Construction Materials",
      "Flooring & Wall Tiling",
      "Painting",
      "Electricals",
      "Plumbing",
      "Doors",
      "Windows",
      "Kitchen & Bathroom Fixtures",
      "Fabrication Works",
      "Warranty Period",
      "Site Audit & Reporting",
      "Elevation Budget",
      "Extra Charges",
      "Govt Sanction Assistance",
    ],
  },
  {
    id: 2,
    name: "Premium Package",
    features: [
      "Design & Drawing",
      "Core Construction Materials",
      "Flooring & Wall Tiling",
      "Painting",
      "Electricals",
      "Plumbing",
      "Doors",
      "Windows",
      "Kitchen & Bathroom Fixtures",
      "Fabrication Works",
      "Warranty Period",
      "Site Audit & Reporting",
      "Elevation Budget",
      "Extra Charges",
      "Govt Sanction Assistance",
    ],
  },
  {
    id: 3,
    name: "Luxury Package",
    features: [
      "Design & Drawing",
      "Core Construction Materials",
      "Flooring & Wall Tiling",
      "Painting",
      "Electricals",
      "Plumbing",
      "Doors",
      "Windows",
      "Kitchen & Bathroom Fixtures",
      "Fabrication Works",
      "Warranty Period",
      "Site Audit & Reporting",
      "Elevation Budget",
      "Extra Charges",
      "Govt Sanction Assistance",
    ],
  },
];

export default function ConstructionPackages() {
  return (
    <section className=" mt-12 mx-12 bg-white text-center">


      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Full-Service <span className="text-yellow-600">Construction Packages</span>
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Get a True Feel of Our Craftsmanship at the Experience Centre – We Use Only Trusted, Top-Grade Materials!
      </p>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white shadow-md border border-gray-200 rounded-xl p-6 flex flex-col"
          >

            <h3 className="text-lg font-semibold text-gray-900 mb-4 uppercase">
              {pkg.name}
            </h3>

            <Link to="QuoteForm">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold py-2 px-4 rounded-lg mb-6">
              Get a Quote
            </button>
            </Link>

            <ul className="space-y-3 text-left">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 border-b-2">
                  <CheckCircle className="text-yellow-500 w-5 h-5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
