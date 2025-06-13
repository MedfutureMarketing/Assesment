import tick from '../assets/home/tick.png'
import Whatsapp from '../assets/home/whatsapp.png'
import Email from '../assets/home/email.png'
export const IntGp = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-20">
            <div className="grid gap-5 row-gap-10 lg:grid-cols-">
                <div className="flex flex-col justify-left">
                    <h1 className='text-4xl mb- font-sans text-left font-semibold'>Top Reasons GPs Choose to Move to Australia</h1>
                    <div className="relative pr-8 text-left py-1">
                        <p className="text-base text-gray-700 mt-5 mb-1 text-xl font-sans font-sans">
                            If you are interested in having a successful career as a general practitioner, Australia offers a strong and innovative environment. Moving to Canada with Medfuture is effortless since they assist with paperwork, provide visa support and provide appealing packages. <br />               </p>
                    </div>
                    <div className="relative pr-8 text-left py-1">
                        <p className="text-base text-gray-700 mt-5 mb-10 text-xl font-sans font-sans">
                            Medfuture makes it possible for foreign general practitioners to find jobs that suit their lifestyle and aims by using its significant industry experience and broad Australian networks. We oversee computer matching, employer connections and advice about AHPRA to ensure an easy transition and start for you.<br />               </p>
                    </div>
                    <div className="grid space-y-3 sm:gap-2 py-5 sm:grid-cols-2 sm:space-y-0">
                        <ul className="space-y-3 text-lg text-left">
                            <li className="flex">
                                <span className="mr-1">
                                    <img src={tick} alt="" className='px-2 h-6' />
                                </span>
                                Multiple Roles Across All States
                            </li>
                            <li className="flex">
                                <span className="mr-1">
                                    <img src={tick} alt=""className='px-2 h-6'/>
                                </span>
                                Visa & AHPRA Registration Assistance
                            </li>
                            <li className="flex">
                                <span className="mr-1">
                                    <img src={tick} alt=""className='px-2 h-6' />
                                </span>
                                Tailored Job Matching Based on Your Preferences
                            </li>
                        </ul>
                        <ul className="space-y-3 text-lg text-left">
                            <li className="flex">
                                <span className="mr-1">
                                    <img src={Whatsapp} alt=""className='px-2 h-6' />
                                </span>
                                +61 452 669 911
                            </li>
                            <li className="flex">
                                <span className="mr-1">
                                    <img src={Email} alt=""className='px-2 h-6'/>
                                </span>
                                apply@themedfuture.com
                            </li>
                            {/* <li className="flex">
                                <span className="mr-1">
                                   <img src={tick} alt="" />
                                </span>
                               Tailored Job Matching Based on Your Preferences
                            </li> */}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IntGp;