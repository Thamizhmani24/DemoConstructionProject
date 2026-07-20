import React, { useState } from "react";

const faqs = [
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 px-4 bg-white flex justify-center">
      <div className="max-w-3xl w-full flex flex-col gap-6">
        

        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Frequently Asked Questions
        </h2>


 
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-yellow-400 rounded-xl shadow-sm bg-white"
          >

            <button
              className="w-full text-left p-4 font-medium text-gray-800 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-yellow-500 font-bold text-lg">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>


            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-600 text-sm border-t border-yellow-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
