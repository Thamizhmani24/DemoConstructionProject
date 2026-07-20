import Canara from "../assets/LoanPartnersImage/canara.png";
import Kotak from "../assets/LoanPartnersImage/kotak.png";
import HDFC from "../assets/LoanPartnersImage/hdfc.png";
import SBI from "../assets/LoanPartnersImage/sbi.png";
import Axis from "../assets/LoanPartnersImage/axis.png";

const partners = [
  { id: 1, name: "Canara Bank", logo: Canara },
  { id: 2, name: "Kotak Mahindra Bank", logo: Kotak },
  { id: 3, name: "HDFC Bank", logo: HDFC },
  { id: 4, name: "State Bank of India", logo: SBI },
  { id: 5, name: "Axis Bank", logo: Axis },
];

export default function LoanPartners() {
  return (
    <section className="py-12 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Loan <span className="text-yellow-600">Partners</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 justify-items-center mx-12">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-gray-200 p-4 shadow-sm flex items-center justify-center w-40 h-32 hover:shadow-xl transition"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
