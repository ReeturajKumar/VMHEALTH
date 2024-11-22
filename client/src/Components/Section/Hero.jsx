import Hero1 from '../../assets/hero-img01.png'
import Hero2 from '../../assets/hero-img02.png'
import Hero3 from '../../assets/hero-img03.png'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <>
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="max-w-7xl container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* left side */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                Guiding You to a Healthier, Longer Life with Expert Care
                </h1>
                <p className="text_para">
                  Our mission is to provide the best healthcare service with
                  personalized solutions, ensuring a healthy future for
                  everyone.
                </p>
                <Link to="/about">
                <button className="btn">Request an Appointment</button></Link>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-secondaryColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className='w-full' src={Hero1} alt="" />
              </div>
              <div className='mt-[30px]'>
                <img className='w-full mb-[30px]' src={Hero2} alt="" />
                <img className='w-full' src={Hero3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
