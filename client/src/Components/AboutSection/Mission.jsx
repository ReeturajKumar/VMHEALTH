import { FaHeart, FaEye, FaStar } from 'react-icons/fa';

const Mission = () => {
  return <section className="mv_section py-[60px] bg-white">
  <div className="max-w-7xl container mx-auto text-center">
    <h2 className="text-[36px] font-bold mb-10 text-headingColor">
      Our Mission, Vision, and Values
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Mission */}
      <div className="p-6 rounded-lg shadow-lg bg-[#9771FF] text-white">
        <div className="flex items-center mb-4">
          <FaHeart className="text-[50px] mr-3" />
          <h3 className="text-[24px] font-semibold">Our Mission</h3>
        </div>
        <p className="text-base">
          To deliver innovative and compassionate healthcare solutions that empower our patients to live healthier lives.
        </p>
      </div>

      {/* Vision */}
      <div className="p-6 rounded-lg shadow-lg bg-[#FEB60D] text-white">
        <div className="flex items-center mb-4">
          <FaEye className="text-[50px] mr-3" />
          <h3 className="text-[24px] font-semibold">Our Vision</h3>
        </div>
        <p className="text-base">
          To transform healthcare by being recognized for excellence and adaptability in an ever-evolving landscape.
        </p>
      </div>

      {/* Values */}
      <div className="p-6 rounded-lg shadow-lg bg-[#01B5C5] text-white">
        <div className="flex items-center mb-4">
          <FaStar className="text-[50px] mr-3" />
          <h3 className="text-[24px] font-semibold">Our Values</h3>
        </div>
        <ul className="list-disc list-inside">
          <li>Compassionate care for every individual.</li>
          <li>Integrity in all our dealings.</li>
          <li>Innovation in healthcare practices.</li>
          <li>Collaboration to achieve shared goals.</li>
          <li>Pursuit of excellence in every aspect.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
}

export default Mission