import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    message: "The team was incredibly helpful and guided me at every step!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Smith",
    message: "I’m grateful for their expert advice and support.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Desai",
    message: "Exceptional service and very friendly consultants!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const StarRating = ({ count }) => (
  <div className="flex justify-center text-yellow-400 text-lg">
    {"★".repeat(count)}{"☆".repeat(5 - count)}
  </div>
);

const TestimonialsSection = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const speed = 1; // pixels per frame
    let animationFrame;

    // Duplicate content to make seamless loop
    slider.innerHTML += slider.innerHTML;

    const scrollLoop = () => {
      scrollAmount += speed;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0; // Reset when halfway (duplicated content)
      }
      slider.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(scrollLoop);
    };

    animationFrame = requestAnimationFrame(scrollLoop);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Drag-to-scroll for desktop
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {
      isDown = true;
      slider.classList.add("grabbing");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const mouseUp = () => {
      isDown = false;
      slider.classList.remove("grabbing");
    };

    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mouseleave", mouseUp);
    slider.addEventListener("mousemove", mouseMove);

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mouseleave", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .grabbing { cursor: grabbing; }
      `}</style>

      <section className="w-full px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between max-w-full mx-auto gap-8">
          {/* Text Content */}
          <div className="md:w-4/12 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">Testimonials</h2>
            <p className="text-gray-600 text-lg mb-6 text-left">
              See how doctors like you are successfully relocating and practicing in Australia with our help.
            </p>
            <button className="px-5 py-3 bg-sky-500 text-white font-medium rounded-sm hover:bg-sky-700 transition self-start">
              View More
            </button>
          </div>


          {/* Looping Slider */}
          <div className="md:w-8/12 relative overflow-hidden">
            {/* Left Fade */}
            <div className="absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />

            {/* Right Fade */}
            <div className="absolute top-0 right-0 z-10 h-full w-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

            {/* Slider */}
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-scroll no-scrollbar p-5 cursor-grab"
            >
              {testimonials.concat(testimonials).map((t, i) => (
                <div
                  key={i}
                  className="testimonial-card bg-white rounded-xl shadow-lg px-6 pt-6 pb-10 w-[280px] flex-shrink-0 text-center"
                >
                  <StarRating count={t.rating} />
                  <p className="text-gray-700 text-base mt-4 italic">"{t.message}"</p>
                  <h4 className="mt-6 font-semibold text-gray-800 text-lg">{t.name}</h4>
                  <div className="mt-6 flex justify-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-20 h-20 rounded-full border-4 border-white shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
