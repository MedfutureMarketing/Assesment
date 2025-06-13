const ThreeGridSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className=" p-6 rounded-xl shadow-none text-center flex flex-col items-center ">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Dive into the role details and see if it’s the right fit for you.</h3>
            
            <button className="mt-auto px-5 py-2 bg-sky-500 text-white rounded-sm hover:bg-teal-500 transition">
Explore the jobs            </button>
          </div>

          {/* Card 2 */}
          <div className=" p-6 rounded-xl shadow-none text-center flex flex-col items-center">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Get expert guidance—schedule a session with a recruitment consultant.</h3>
           
            <button className="mt-auto px-5 py-2 bg-sky-500 text-white rounded-sm hover:bg-teal-500 transition">
              Book a consultant
            </button>
          </div>

          {/* Card 3 */}
          <div className=" p-6 rounded-xl shadow-none text-center flex flex-col items-center">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Showcase your experience—upload your resume in seconds.</h3>
            
            <button className="mt-auto px-5 py-2 bg-sky-500 text-white rounded-sm hover:bg-teal-500 transition">
            Upload a CV
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ThreeGridSection;
