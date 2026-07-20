const WhyChooseUsCard = ({ img, title, desc }) => {
  return (
    <div className="bg-gray-200 rounded-xl shadow-md p-6 w-64 h-80 flex flex-col items-center justify-start text-center hover:shadow-lg transition-shadow">
      <img
        src={img}
        alt={title}
        className="w-20 h-20 mx-auto mb-6 object-contain"
      />

      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

export default WhyChooseUsCard;
