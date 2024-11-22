import FeatureImg from '../../assets/feature-img.png';
import video from '../../assets/video-icon.png';
import avatar from '../../assets/avatar.png'
import { Link } from 'react-router-dom';
const Feature = () => {
  return <section>
      <div className="max-w-7xl container">
      <div className="flex items-center justify-between flex-col lg:flex-row">
        <div className="xl:w-[670px]">
          <h2 className="heading">
          Innovative Features for Enhanced Healthcare Experience
          </h2>
          <ul className="pl-4">
            <li className="text_para">
              1. Schedule the appointments online.
            </li>
            <li className="text_para">
              2. Comprehensive Care Solutions.
            </li>
            <li className="text_para">
              3. Telemedicine Accessibility.
            </li>
            <li className="text_para">
              4. Advanced Health Monitoring.
            </li>
            <li className="text_para">
              5. Patient-Centric Approach.
            </li>
            <li className="text_para">
              6. 24/7 Availability.
            </li>
            <Link to="/doctors">
            <button className="btn">
              Learn More
            </button>
            </Link>
          </ul>
        </div>

        <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
          <img src={FeatureImg} alt="" className='w-3/4' />
          <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
            <div className='flex items-center justify-between'>
              <div className="flex items-center gap-[6px] lg:gap-3">
                <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 font-[600] text-headingColor">
                  Wednesday, 2024
                </p>
                <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 font-[400] text-headingColor">
                  10:00 AM
                </p>
              </div>
              <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex  items-center justify-center bg-secondaryColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                <img src={video} alt="" />
              </span>
            </div>


            <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 font-[500] text-irisBlueColor mt-2 lg:mt-4 rounded-full">
              Consultation
            </div>

            <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
              <img src={avatar} alt="" />
              <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[600] text-headingColor'>Deven Smith</h4>
            </div>
          </div>
        </div>
      </div>
      </div>
  </section>
}

export default Feature