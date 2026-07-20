const Hero =()=>{
    return(
        <>
        <div className="relative flex flex-col items-center justify-center h-full text-center px-6 mt-48 font-">
        <h1 className="text-5xl md:text-6xl font-bold text-red-500 ">
          Build Right. Live Smart.
        </h1>
        <p className="mt-4 text-lg md:text-xl font-semibold text-gray-700">
          The Pros Behind Chennai’s Best Homes
        </p>

        <div className=" mt-8 flex space-x-4">
          <button className="bg-white hover:bg-yellow-500 hover:text-white text-yellow-500 border-yellow-500 border-2 px-6 py-1 shadow-md font-medium">
            TALK TO OUR ARCHITECTS NOW
          </button>
          <button className="bg-white hover:bg-yellow-500 hover:text-white text-yellow-500 border-yellow-500 border-2 px-6 py-1 shadow-md font-medium">
            OUR PACKAGES
          </button>
        </div>
      </div>

      <div className="relative bottom-0 left-0 w-full mt-32 bg-yellow-500 py-8 text-center text-white font-semibold text-lg flex-col ">
        <div>Looking To Construct A Home? Find Out What It Costs.</div>

        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
          <button
            className="bg-black text-white px-1 sm:px-8 py-1 text-sm sm:text-base md:text-lg font-medium shadow-lg"
          >
            Get a free Estimation Now
          </button>
        </div>

      </div>
      </>
    )
}

export default Hero;