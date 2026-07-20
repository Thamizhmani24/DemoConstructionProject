import { Check, Handshake, CalendarDays, Clock } from "lucide-react";

const features = [
  {
    id: 1,
    title: "End to End Ownership",
    description:
      "We’re your single point of contact, let us manage the designers, architects, structural engineers, site supervisors, quality controllers and more.",
    icon: <Check className="w-10 h-10 text-white" />,
  },
  {
    id: 2,
    title: "Quality & Discount Assurance",
    description:
      "Transparency is achieved for both, working process as well as raw material used. Great deals with partnered store!",
    icon: <Handshake className="w-10 h-10 text-white" />,
  },
  {
    id: 3,
    title: "Budgets & Time Upfront",
    description:
      "Get a clear idea of your total project budget and friendly payment schedule upfront. No false promises now and surprises later.",
    icon: <CalendarDays className="w-10 h-10 text-white" />,
  },
  {
    id: 4,
    title: "Timely Updates & Delivery",
    description:
      "Once a project initiates, there is literally next to no delays when we talk about keeping a check on project status.",
    icon: <Clock className="w-10 h-10 text-white" />,
  },
];

export default function WhatYouGet() {
  return (
    <section className="py-16 bg-white text-center">

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        What You Get? <span className="text-yellow-600">When You Hire Us</span>
      </h2>

            <div className="w-64 h-0.5 bg-yellow-400 mx-auto my-4"></div>

      <p className="text-lg text-gray-700 mb-8">
        At our core are four things that define who we are and what we stand
        for. This is what you can count on us.
      </p>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-20">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center text-center">
   
            <div className="bg-yellow-500 w-24 h-24 flex items-center justify-center rounded-full shadow-md mb-6">
              {feature.icon}
            </div>


            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>


            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
