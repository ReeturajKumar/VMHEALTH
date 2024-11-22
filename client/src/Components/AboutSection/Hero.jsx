import img1 from '../../assets/doctor-img03.png';

const Hero = () => {
  return (
    <section className="about_hero_section pt-8 sm:pt-16 lg:pt-[60px] 2xl:h-[600px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[90px] items-start justify-between">
          {/* Left Side */}
          <div className="lg:w-1/2 flex-shrink-0">
            <div className="lg:w-[570px]">
              <h1 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[60px] leading-snug lg:leading-[70px] text-headingColor font-bold">
                Delivering Compassionate Innovative Healthcare
              </h1>
              <p className="text_para mt-4 md:mt-6 text-[14px] sm:text-[16px] lg:text-[18px]">
                At VMHEALTH, we are committed to shaping the future of healthcare through
                innovation, compassionate care, and a relentless focus on improving the lives
                of our patients. Our journey is driven by a mission to provide accessible,
                quality healthcare for all.
              </p>
              <button className="btn mt-6 md:mt-8 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-end">
            <img
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none h-auto object-cover rounded-lg"
              src={img1}
              alt="Doctor"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
