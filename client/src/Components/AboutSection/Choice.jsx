import { FaMedal, FaUsers, FaLightbulb, FaShieldAlt, FaHeartbeat, FaWrench } from 'react-icons/fa';

const Choice = () => {
  return <section className="why_choose_us_section py-[60px]">
  <div className="max-w-7xl container mx-auto text-center">
    <h2 className="text-[36px] font-bold mb-10 text-headingColor">
      Why Choose Us
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Card 1 */}
      <div className="p-6 bg-white rounded-lg shadow-md cursor-pointer">
        <div className="flex items-center mb-4">
          <FaMedal className="text-secondaryColor text-[36px] mr-3" />
          <h3 className="text-[20px] font-semibold">Industry Expertise</h3>
        </div>
        <p>
          We have a proven track record of expertise in the healthcare industry, ensuring you’re in capable hands.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 bg-white rounded-lg shadow-md cursor-pointer">
        <div className="flex items-center mb-4">
          <FaUsers className="text-purpleColor text-[36px] mr-3" />
          <h3 className="text-[20px] font-semibold">Personalized Care</h3>
        </div>
        <p>
          We offer tailored healthcare solutions to meet your specific needs, always putting you first.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-6 bg-white rounded-lg shadow-md cursor-pointer ">
        <div className="flex items-center mb-4">
          <FaLightbulb className="text-irisBlueColor text-[36px] mr-3" />
          <h3 className="text-[20px] font-semibold">Innovative Solutions</h3>
        </div>
        <p>
          Leveraging cutting-edge technology, we continually improve to provide top-notch healthcare.
        </p>
      </div>

      {/* Card 4 */}
      <div className="p-6 bg-white rounded-lg shadow-md cursor-pointer ">
        <div className="flex items-center mb-4">
          <FaShieldAlt className="text-irisBlueColor text-[36px] mr-3" />
          <h3 className="text-[20px] font-semibold">Reliable & Secure</h3>
        </div>
        <p>
          Our secure, reliable services mean you can trust us to handle your healthcare needs with integrity.
        </p>
      </div>

      {/* Card 5 */}
      <div className="p-6 bg-white rounded-lg shadow-md cursor-pointer">
        <div className="flex items-center mb-4">
          <FaHeartbeat className="text-secondaryColor text-[36px] mr-3" />
          <h3 className="text-[20px] font-semibold">Commitment to Care</h3>
        </div>
        <p>
          We are committed to compassionate, high-quality care that prioritizes your well-being.
        </p>
      </div>

      {/* Card 6 */}
      <div className="p-6 bg-white rounded-lg shadow-md cursor-pointer">
        <div className="flex items-center mb-4">
          <FaWrench className="text-purpleColor text-[36px] mr-3" />
          <h3 className="text-[20px] font-semibold">Comprehensive Services</h3>
        </div>
        <p>
          From prevention to treatment, we offer a wide range of services to support every aspect of your health.
        </p>
      </div>
    </div>
  </div>
</section>
}

export default Choice