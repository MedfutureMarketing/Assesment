import img1 from '../assets/home/awards/award1.png';
import img2 from '../assets/home/awards/award2.png';
import img3 from '../assets/home/awards/award3.png';
import img4 from '../assets/home/awards/award5.png';
import img5 from '../assets/home/awards/Award6.png';
import img6 from '../assets/home/awards/award7.png';

const Awards = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:py-36">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Column 1: Text */}
        <div className="text-left space-y-4">
          <h2 className="text-3xl font-bold text-slate-800">
            Awards & Affiliation
          </h2>
          <p className="text-slate-600 text-lg">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          {/* <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-500 transition">
            Get Started
          </button> */}
        </div>

        {/* Column 2: 2x2 image grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <img src={img1} alt="Flag 1" className="w-full rounded-lg object-cover" />
          <img src={img2} alt="Flag 2" className="w-full rounded-lg object-cover" />
          <img src={img3} alt="Flag 3" className="w-full rounded-lg object-cover" />
          <img src={img4} alt="Flag 4" className="w-full rounded-lg object-cover" />
        </div>

        {/* Column 3: 2 images side-by-side */}
        <div className="grid grid-cols-2 gap-4">
          <img src={img5} alt="Flag 5" className="w-full h-full rounded-lg object-cover animate-pluse" />
          <img src={img6} alt="Flag 6" className="w-full rounded-lg object-cover" />
        </div>

      </div>
    </div>
  );
};

export default Awards;
