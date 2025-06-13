import React, { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
  type="button"
  aria-label="Open item"
  title="Open item"
  className="flex items-center justify-between w-full p-4 focus:outline-none"
  onClick={() => setIsOpen(!isOpen)}
>
  <p className="text-lg font-semibold">{title}</p>
  <div className="flex items-center gap-2">
    {/* Plus icon */}
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 text-blue-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>

    {/* Arrow icon */}
    {/* <svg
      viewBox="0 0 24 24"
      className={`w-3 text-gray-600 transform transition-transform duration-200 ${
        isOpen ? 'rotate-180' : ''
      }`}
    >
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        points="2,7 12,17 22,7"
        strokeLinejoin="round"
      />
    </svg> */}
  </div>
</button>

      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-0 ">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <h1 className="text-4xl mb-0 px-6 py-10 uppercase font-sans text-center py-2 mt-5 font-semibold">
             Faq
            </h1>
        <div class="max-w-xl mb-10 md:mx-auto sm:text-left lg:max-w-2xl md:mb-12">
         
          <h2 class="max-w-full mb-6 font-sans text-xl text-left font-semibold leading-none tracking-tight text-gray-900 sm:text-xl md:mx-auto">
            What is involved in the PEP Specialist Pathway?
          </h2>
          <p class="text-base text-gray-700 md:text-lg ">
           General Practitioners (GPs) holding credentials from other countries that match those obtained by Australian GPs can enroll in the Practice Experience Program (PEP) Specialist Pathway. Medical practitioners on this pathway can practice in Australia with supervision while moving toward FRACGP and Specialist (Vocational) Registration.
          </p>
        </div>
        <div class="space-y-4 text-left">
          <Item title="Are my family members allowed to move?">
            Are my family members allowed to move?
          </Item>
          <Item title="Am I provided with help when I relocate?">
          Am I provided with help when I relocate?
          </Item>
          <Item title="Can I be employed in rural places or in urban locations?">
          Can I be employed in rural places or in urban locations?
          </Item>
          <Item title="How long is the process itself?">
            How long is the process itself?
          </Item>
          <Item title="Am I allowed to choose where I would like to work?">
            How long is the process itself?
          </Item>
        </div>
      </div>
    </div>
  );
};
export default Faq;