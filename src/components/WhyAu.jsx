import personalizeconsultation from '../assets/home/personalizeconsultation.png'
export const WhyAu = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-20">
      <div className="grid gap-12 row-gap-8 lg:grid-cols-[1fr_1.25fr]">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl text-left font-semi-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Why Australia?
            </h2>
            <p className="text-base text-left text-gray-700 md:text-lg">
              Are you looking to relocate your medical career? Australia provides exceptional opportunities for General Practitioners (GPs) around the world. With its excellent level of living, world-class healthcare system, and attractive work-life balance, Australia has emerged as a top destination for globally certified GPs looking for permanent or temporary opportunities.
            </p>
          </div>

        </div>
        <div>
          <div className="flex justify-center px-4">
            <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">
              {/* Card 1 */}
              <div className="px-1 py-6 text-center transition duration-300 transform bg-gray-900 rounded-xl shadow-2xl hover:scale-105 hover:shadow-2xl">
                <img src={personalizeconsultation} alt="" className="mx-auto" />
                <p className="mt-2 font-semibold text-gray-200 text-sm">High Earning Potential</p>
              </div>


              {/* Card 2 */}
              <div className="px-1 py-6 text-center transition duration-300 transform bg-blue-500 rounded-xl shadow-2xl hover:scale-105 hover:shadow-2xl">
                <img src={personalizeconsultation} alt="" className="mx-auto" />

                <p className="mt-2 font-semibold text-gray-200 text-sm">Work-Life Balance</p>
              </div>

              {/* Card 3 */}
              <div className="px-1 py-6 text-center transition duration-300 transform bg-gray-600 rounded-xl shadow-2xl hover:scale-105 hover:shadow-2xl">
                <img src={personalizeconsultation} alt="" className="mx-auto" />

                <p className="mt-2 font-semibold text-gray-200 text-sm">World Class Healthcare System</p>
              </div>

              {/* Card 4 */}
              <div className="px-1 py-6 text-center transition duration-300 transform bg-gray-500 rounded-xl shadow-2xl hover:scale-105 hover:shadow-2xl">
                <img src={personalizeconsultation} alt="" className="mx-auto" />

                <p className="mt-2 font-semibold text-sm text-gray-200">Career Development</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};
export default WhyAu;