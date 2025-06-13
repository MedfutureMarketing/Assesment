import whocanapply from '../assets/home/whocanapply.png'
export const CanApply = () => {
    return (
        <div>
            <h1 className='text-4xl mb-5 font-sans text-left py-5 mt-5 font-semibold'>Who Can Apply?</h1>
            <section className="grid gap-8 lg:grid-cols-[0.5fr_1.25fr] p-0  rounded-none">

                {/* Left Column */}
                <div className="bg-white p-0 rounded-lg shadow-none">
                    <img src={whocanapply} alt="" />
                </div>

                {/* Right Column */}
                <div className="bg-white p-6 rounded-lg shadow-none text-left">
                    <div className="flex flex-col justify-center">
                        <div className="pb-4 mb-4 border-b">

                            <p className="text-lg font-sans text-gray-900">
                                General Practitioners with Recognised Family Medicine Specialist Qualifications, such as MRCGP (UK), MICGP (Ireland), CCFP (Canada), Family Medicine specialist qualifications (e.g FCFP , MD Fam Med) or equivalent
                            </p>
                        </div>
                        <div className="pb-4 mb-4 border-b">

                            <p className="text-lg text-gray-900 font-sans">
                                GPs from the UK, Ireland, Canada, New Zealand, USA, Singapore, South Africa, Malaysia, UAE, and Europe
                            </p>
                        </div>
                        <div>

                            <p className="text-lg text-gray-900 font-sans">
                                Candidates eligible for Limited, Provisional, or Specialist Registration with AHPRA
                            </p>
                        </div>
                    </div>
                </div>
            </section></div>

    );
};


export default CanApply;