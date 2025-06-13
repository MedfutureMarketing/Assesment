import citybackground from '../assets/home/skyline-sydney1.png';
import Homedocimg from '../assets/home/homedocimg.png';

export const HeroSection = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-0">
        <div className="flex flex-col xl:flex-row items-center xl:items-stretch">
          
          {/* LEFT IMAGE AREA */}
          <div
            className="w-full xl:w-7/12 relative h-[400px] sm:h-[500px] rounded-lg overflow-hidden mb-6 xl:mb-0"
            style={{
              backgroundImage: `url(${citybackground})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center 119%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img
              src={Homedocimg}
              alt="Foreground Doctor"
              className="absolute inset-0 object-contain w-full h-full z-10 bottom-0"
              draggable={false}
            />
          </div>

          {/* RIGHT TEXT AREA */}
          <div className="w-full xl:w-5/12 xl:px-8 flex flex-col justify-center text-center xl:text-right">
            <h2 className="max-w-xl mx-auto xl:mx-0 mb-4 font-sans text-2xl sm:text-3xl xl:text-4xl font-semibold tracking-tight text-white leading-tight">
              Live & Work in Australia as a GP
            </h2>
            <p className="max-w-xl mx-auto xl:mx-0 mb-4 text-sm sm:text-base md:text-lg text-gray-400">
              Family Medicine Specialist from UK, NZ, Ireland, South Africa and more are in high demand
            </p>
            <div className="mx-auto mx-auto xl:mr-0 xl:ml-auto">
              <button className="mt-2 px-6 py-3 bg-sky-600 text-white font-semibold rounded-sm hover:bg-teal-500 w-36 transition-colors">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
