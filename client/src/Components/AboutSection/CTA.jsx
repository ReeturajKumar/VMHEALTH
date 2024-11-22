import { Link } from 'react-router-dom';

const CTA = () => {
  return <section className="cta_section bg-blue-600 text-white py-[20px]">
  <div className="max-w-7xl container mx-auto text-center">
    <h2 className="text-[36px] font-[800] mb-3">
      Ready to Take the Next Step?
    </h2>
    <p className="text-lg mb-2">
      Experience compassionate, innovative healthcare tailored to your needs.
      Our dedicated team is here to support you every step of the way.
    </p>
    <Link to='/contact-us'>
    <button className="btn bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">
      Schedule an Appointment
    </button>
    </Link>
  </div>
</section>
}

export default CTA