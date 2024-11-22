import Hero from '../../Components/Doctors/Hero';
import DoctorCard from './../../Components/Doctors/DoctorCard';
import { doctors } from './../../data/Doctor';
import Testimonial from './../../Components/Section/Testimonial';

const Doctors = () => {
  return <>
  <Hero/>
      <div className="max-w-7xl container">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
      {doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor}/>)}
    </div>
      </div>
      <Testimonial/>
  </>
}

export default Doctors