import Icon1 from '../../assets/Work1.jpg';
import Icon2 from '../../assets/work2.png'
import Icon3 from '../../assets/work3.png'
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
const HowitWork = () => {
  return <section>
    <div className="max-w-7xl container">
      <div className="lg:w-[770px] mx-auto">
        <h2 className="heading text-center">
          Providing the best medical services
        </h2>

        <p className="text_para text-center">
          World-class care for everyone. Our health System offers unmatched, expert health care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={Icon1} alt="" />
          </div>
          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Find a Doctor
            </h2>
            <p className='text-[16px] leading-7 text-center text-textColor mt-4 font-[400]'>
            Connect with top medical experts across specialties for personalized, world-class care tailored to your needs.
            </p>
            <Link to="/doctor" className="w-[44px] h-[44px]   items-center justify-center rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex hover:bg-primaryColor hover:border-none">
            <BsArrowRightShort className='group-hover:text-white w-6 h-5' />
            </Link>
          </div>
        </div>

        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={Icon2} alt="" />
          </div>
          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Find a Location
            </h2>
            <p className='text-[16px] leading-7 text-center text-textColor mt-4 font-[400]'>
            Discover nearby medical facilities offering expert care, ensuring convenient access to world-class healthcare services.
            </p>
            <Link to="/doctor" className="w-[44px] h-[44px]   items-center justify-center rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex hover:bg-primaryColor hover:border-none">
            <BsArrowRightShort className='group-hover:text-white w-6 h-5' />
            </Link>
          </div>
        </div>

        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={Icon3} alt="" />
          </div>
          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Book Appointment
            </h2>
            <p className='text-[16px] leading-7 text-center text-textColor mt-4 font-[400]'>
            Schedule appointments easily with trusted doctors, ensuring timely, convenient access to expert healthcare services.
            </p>
            <Link to="/doctor" className="w-[44px] h-[44px]   items-center justify-center rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex hover:bg-primaryColor hover:border-none">
            <BsArrowRightShort className='group-hover:text-white w-6 h-5' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default HowitWork