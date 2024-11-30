/* eslint-disable react/prop-types */
import img1 from '../../assets/doctor-img01.png';
import Search from './Search';

const Hero = ({ onSearch }) => {
  return (
    <section className="about_hero_section pt-16 lg:pt-[60px] 2xl:h-[600px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[90px] items-center lg:items-start justify-between">
          
          {/* Left Side */}
          <div className="lg:w-1/2 space-y-6">
            <header>
              <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[60px] leading-tight lg:leading-[70px] text-headingColor font-bold">
                Find the Right Doctor for Your Health Needs
              </h1>
            </header>
            <p className="text-base md:text-lg text-gray-700">
              Explore our directory of experienced and compassionate doctors ready to support 
              you on your healthcare journey.
            </p>
            {/* Pass search handler */}
            <Search onSearch={onSearch} />
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 hidden lg:flex flex-row gap-4 lg:gap-[30px]">
            <div className="flex-shrink-0">
              <img className="w-full h-auto lg:h-[450px] object-cover" src={img1} alt="A healthcare professional" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
