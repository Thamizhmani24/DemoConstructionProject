import React from "react";

const RealPillars = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        

        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/ScMzIvxBSi4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>


        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Get to Know <span className="text-yellow-600">The Real Pillars</span>
          </h2>

        <div className="w-64 h-0.5 bg-yellow-400 my-4"></div>

          <p className="text-lg text-gray-700 mb-8">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealPillars;
