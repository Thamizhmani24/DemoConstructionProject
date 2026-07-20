export default function BuildhoodCard({ icon: Icon, title }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md hover:shadow-cyan-400 transition-all duration-300 p-6 w-full h-40">

      <Icon className="text-orange-500 w-10 h-10 mb-3" />


      <h4 className="text-sm font-semibold text-gray-800 text-center">
        {title}
      </h4>
    </div>
  );
}